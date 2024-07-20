const vectorIconsSource = new ol.source.Vector();
const markerIcons = [
	'../data/icons/dark-red-icon.png',
	'../data/icons/green-icon.png',
	'../data/icons/light-green-icon.png',
	'../data/icons/orange-icon.png',
	'../data/icons/red-icon.png',
	'../data/icons/violet-icon.png',
	'../data/icons/yellow-icon.png',
].map(src => new ol.style.Icon({ src }));

const defaultStyle = new ol.style.Style({
	image: new ol.style.Circle({ radius: 5, fill: new ol.style.Fill({ color: 'red' }) }),
});

const battleIconStyle = new ol.style.Style({
	image: new ol.style.Icon({ src: '../data/icons/historic.png', scale: 0.0625 }),
});

const getMarkerIconStyle = id => (id >= 1 && id <= markerIcons.length) ?
	new ol.style.Style({ image: markerIcons[id - 1] }) :
	defaultStyle;

function convertCoordinatesToWebMercator(coordinates) {
	return ol.proj.transform(coordinates, "EPSG:4326", "EPSG:3857");
}

const createMarkerFromFeature = (feature, getIconStyleCallback) => {
	const transformedCoordinates = convertCoordinatesToWebMercator(feature.geometry.coordinates);
	const marker = new ol.Feature(new ol.geom.Point(transformedCoordinates));
	marker.setProperties({
		...feature.properties,
		coordinates: feature.geometry.coordinates,
		isMarker: true,
		isVisible: true,
	});
	marker.setStyle(getIconStyleCallback(feature.properties.id));
	return marker;
};

const legendContainer = document.querySelector('.legendContainer');

const addLegendItem = (feature) => {
	const legendItem = document.createElement('div');
	legendItem.className = 'legend-item';

	if (!legendContainer.querySelector('.legend-item img[src="../data/icons/historic.png"]')) {
		const historicItem = document.createElement('div');
		historicItem.className = 'legend-item';
		historicItem.innerHTML = '<img src="../data/icons/historic.png" class="legend-icon"><h5>Битва</h5>';
		legendContainer.prepend(historicItem);
	}

	legendItem.innerHTML = `<img src="${feature.getStyle().getImage().getSrc()}" class="legend-icon"><h5>${feature.getProperties().name}</h5>`;

	legendContainer.prepend(legendItem);
	legendContainer.appendChild(legendItem);
};

const clearMapData = () => {
	vectorIconsSource.clear();
	legendContainer.innerHTML = '';
};

const displayInfo = (feature, coordinate) => {
	overlay.setPosition(coordinate);
	const { name, foto, description, forces } = feature.getProperties();
	overlay.getElement().innerHTML = forces
	?
		`<h3>${name}</h3>
		<div class="forces-container">
		<div class="soviet-forces">
		<h4>Советские силы:</h4>
		<div style="display:flex;"><img src='../data/icons/soldier.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.Soviet.personnel}</p></div>
		<div style="display:flex;"><img src='../data/icons/tank.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.Soviet.tanks}</p></div>
		<div style="display:flex;"><img src='../data/icons/artillery.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.Soviet.artillery}</p></div>
		<div style="display:flex;"><img src='../data/icons/aircraft.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.Soviet.aircraft}</p></div>
		</div>
		<div class="german-forces">
		<h4>Немецкие силы:</h4>
		<div style="display:flex;"><img src='../data/icons/soldier.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.German.personnel}</p></div>
		<div style="display:flex;"><img src='../data/icons/tank.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.German.tanks}</p></div>
		<div style="display:flex;"><img src='../data/icons/artillery.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.German.artillery}</p></div>
		<div style="display:flex;"><img src='../data/icons/aircraft.png' alt="" style="width: 32px; height: 32px;"><p style="align-self: center;">: ${forces.German.aircraft}</p></div>
		</div>
		</div>`
	:
		`<h3>${name}</h3>
		<img src="${foto}" alt="${name}">
		<p>${description}</p>`;
};

const handleMapPointerMove = displayOverlayCallback => {
	map.on('pointermove', event => {
		const displayFeature = map.forEachFeatureAtPixel(event.pixel, feature => feature.get('isMarker') && feature);
		const featureFound = !!displayFeature;
		overlay.getElement().style.display = featureFound ? 'block' : 'none';
		if (featureFound) {
			displayOverlayCallback(displayFeature, event.coordinate);
		}
	});
};

const dataMaps = {
	monuments: {
		'1941': BarbarossaMonuments,
		'1942': StalinGradMonuments,
		'1943': KurskBulgeMonuments,
		'1944': BagrationMonuments,
		'1945': BerlinOffensiveMonuments
	},
	battles: {
		'1941': MoscowBattles,
		'1942': StalingradBattles,
		'1943': KurskBattles,
		'1944': BagrationBattles,
		'1945': BattleForBerlin
	}
};

const drawMarkersFromData = (data, type) => {
	data.features.forEach(feature => {
		const marker = createMarkerFromFeature(feature, type === 'monuments' ? getMarkerIconStyle : () => battleIconStyle);
		vectorIconsSource.addFeature(marker);
		if (type === 'monuments' && marker.get('isVisible')) {
			addLegendItem(marker, feature);
		}
	});
	handleMapPointerMove(displayInfo);
};

const handleYearSliderChange = event => {
	const selectedYear = event.target.value;
	clearMapData();
	drawMarkersFromData(dataMaps.monuments[selectedYear], 'monuments');
	drawMarkersFromData(dataMaps.battles[selectedYear], 'battles');
};

const createMapOverlay = () => {
	const overlayElement = document.createElement('div');
	overlayElement.classList.add('marker-popup');
	return new ol.Overlay({
		element: overlayElement,
		autoPan: true,
		autoPanAnimation: { duration: 250 }
	});
};

const overlay = createMapOverlay();
yearSlider.addEventListener('input', handleYearSliderChange);

const vectorIconsLayer = new ol.layer.Vector({
	source: vectorIconsSource
});

map.addOverlay(overlay);
map.addOverlay(vectorIconsLayer);