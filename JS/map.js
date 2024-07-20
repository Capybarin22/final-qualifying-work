const viewOptions = {
	center: ol.proj.fromLonLat([37, 55.5]),
	zoom: 5,
	minZoom: 3,
	maxZoom: 18,
	projection: "EPSG:3857"
};

const baseLayers = [
	new ol.layer.Tile({
		source: new ol.source.OSM(),
		title: "OpenStreetMap",
		type: "base"
	}),
	new ol.layer.Tile({
		source: new ol.source.XYZ({
			url: "https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
		}),
		title: "CartoDB Voyager",
		type: "base"
	}),
	new ol.layer.Tile({
		source: new ol.source.XYZ({
			attributions: "Картографические данные © авторы OpenStreetMap, SRTM | Карта стиля © OpenTopoMap (CC-BY-SA)",
			url: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"
		}),
		title: "OpenTopoMap",
		type: "base"
	})
];

const imageLayers = imageData.flat().map((data, index) => new ol.layer.Image({
	source: new ol.source.ImageStatic(data),
	opacity: 1,
	title: data.name,
	year: data.year || null,
	visible: false,
	zIndex: index + 1
}));

const map = new ol.Map({
	target: "map",
	layers: [...imageLayers.reverse(), ...baseLayers.reverse()],
	view: new ol.View(viewOptions),
	controls: ol.control.defaults({ zoom: false }).extend([
		new ol.control.ZoomSlider(),
		new ol.control.ScaleLine(),
		new ol.control.LayerSwitcher({
			target: "layerSwitcherContainer",
			groupSelectStyle: "children",
			collapsed: true
		})
	])
});