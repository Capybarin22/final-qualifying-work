const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({ source: vectorSource });
map.addOverlay(vectorLayer);

const polygonContainer = document.createElement("div");
polygonContainer.id = "polygonElementsContainer";
layersList.appendChild(polygonContainer);

const polygonDraw = new ol.interaction.Draw({
	source: vectorSource,
	type: "Polygon"
});

function calculateArea(coords) {
	return turf.area({ type: "Feature", geometry: { type: "Polygon", coordinates: [coords] } });
}

polygonDraw.on("drawend", event => {
	let boundary = event.feature.getGeometry().getCoordinates()[0];
	if (boundary[0][0] !== boundary.at(-1)[0] || boundary[0][1] !== boundary.at(-1)[1]) {
		boundary.push(boundary[0]);
	}

	const areaSqMeters = calculateArea(boundary.map(coord => ol.proj.transform(coord, "EPSG:3857", "EPSG:4326")));
	const centerPoint = turf.center({ type: "Feature", geometry: { type: "Polygon", coordinates: [boundary] } }).geometry.coordinates;

	const areaOverlay = new ol.Overlay({
		position: centerPoint,
		element: document.createElement("div"),
		positioning: 'bottom-center',
		stopEvent: false,
		offset: [0, -15],
	});

	const overlayElement = areaOverlay.getElement();
	overlayElement.style.background = '#FFD700';
	overlayElement.style.border = '1px solid #000';
	overlayElement.style.padding = '5px 10px';
	overlayElement.style.borderRadius = '5px';
	overlayElement.style.fontSize = '12px';
	overlayElement.style.textAlign = 'center';
	overlayElement.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';

	const pointer = document.createElement('div');
	pointer.style.width = '0';
	pointer.style.height = '0';
	pointer.style.borderLeft = '5px solid transparent';
	pointer.style.borderRight = '5px solid transparent';
	pointer.style.borderBottom = '10px solid #FFD700';
	pointer.style.position = 'absolute';
	pointer.style.bottom = '-10px';
	pointer.style.left = '50%';
	pointer.style.transform = 'translateX(-50%)';
	overlayElement.appendChild(pointer);

	overlayElement.textContent = ` ${((areaSqMeters / 1e6).toFixed(2))} кв. км`;
	map.addOverlay(areaOverlay);

	event.feature.setId(`polygon-${polygonCount}`);
	polygonContainer.appendChild(createPolygonElement(polygonCount++));
	setInitialStyle(event.feature);
	map.removeInteraction(polygonDraw);
});

document.querySelector(".polygon").addEventListener("click", () => map.addInteraction(polygonDraw));

let polygonCount = 1;

function createPolygonElement(id) {
	const element = document.createElement("div");
	element.classList.add("polygonItem");
	element.id = `polygonItem-${id}`;
	getPolygonName().then(name => {
		element.textContent = name;
		createColorSelectors(element, id);
	});
	return element;
}

function getPolygonName() {
	return new Promise(resolve => {
		const name = prompt("Enter the name of the polygon:");
		if (name && name.trim()) {
			resolve(name.trim());
			const title = document.createElement("h3");
			title.textContent = name;
			document.getElementsByClassName("legendContainer")[0].appendChild(title);
		} else {
			alert("Please enter a name for the polygon.");
			getPolygonName().then(resolve);
		}
	});
}

function createColorSelectors(element, id) {
	const colors = [
		{ color: "Red", value: "rgba(252, 62, 66, 0.2)" },
		{ color: "Green", value: "rgba(20, 147, 29, 0.2)" },
		{ color: "Blue", value: "rgba(0, 96, 223, 0.2)" }
	];
	colors.forEach(color => {
		const input = document.createElement("input");
		input.classList.add("polygonItems");
		input.type = "radio";
		input.name = `polygonColor-${id}`;
		input.value = color.value;
		input.id = `color-${color.value}-${id}`;
		const label = document.createElement("label");
		label.htmlFor = input.id;
		label.textContent = color.color;
		input.addEventListener("change", event => updateStyle(event, id));
		element.appendChild(input);
		element.appendChild(label);
	});
}

function updateStyle(event, id) {
	const color = event.target.value;
	const feature = vectorSource.getFeatures().find(f => f.getId() === `polygon-${id}`);
	if (feature) {
		feature.setStyle(new ol.style.Style({
			fill: new ol.style.Fill({ color: color }),
			stroke: new ol.style.Stroke({ color: "black", width: 2 })
		}));
		vectorLayer.changed();
	}
}

function setInitialStyle(feature) {
	feature.setStyle(new ol.style.Style({
		fill: new ol.style.Fill({ color: "rgba(255, 255, 255, 0.2)" }),
		stroke: new ol.style.Stroke({ color: "#000", width: 2 })
	}));
}

function measureDistance(map) {
	const distanceLayer = new ol.layer.Vector({
		source: new ol.source.Vector(),
		style: new ol.style.Style({
			stroke: new ol.style.Stroke({ color: "red", width: 2 })
		})
	});
	const distanceDraw = new ol.interaction.Draw({
		source: distanceLayer.getSource(),
		type: "LineString"
	});
	map.addLayer(distanceLayer);
	map.addInteraction(distanceDraw);
	distanceDraw.on("drawend", event => {
		const coordinates = event.feature.getGeometry().getCoordinates().map(coord =>
			ol.proj.transform(coord, map.getView().getProjection(), "EPSG:4326")).flat();
		const distance = calculateHaversineDistance(...coordinates);
		alert(`Distance (Haversine): ${(distance / 1e3).toFixed(2)} km`);
		map.removeInteraction(distanceDraw);
		distanceLayer.getSource().clear();
	});
}

function calculateHaversineDistance(lon1, lat1, lon2, lat2) {
	const [radLon1, radLat1, radLon2, radLat2] = [lon1, lat1, lon2, lat2].map(deg => deg * Math.PI / 180);
	const deltaLon = radLon2 - radLon1;
	const deltaLat = radLat2 - radLat1;
	const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) ** 2;
	return 12742e3 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
document.querySelector(".distance").addEventListener("click", () => measureDistance(map));