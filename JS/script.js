const yearSlider = document.getElementById("yearRange");
const yearSliderTooltip = document.querySelector(".yearSliderTooltip");
const layerSwitcherContainer = document.querySelector(".layer-switcher");
const opacityManageContainer = document.querySelector(".opacityManageContainer");

function updateTooltip(value) {
	const percentage = (value - yearSlider.min) / (yearSlider.max - yearSlider.min) * 100;
	yearSliderTooltip.innerHTML = value;
	yearSliderTooltip.style.left = `${percentage}%`;
	yearSliderTooltip.style.transform = `translateX(-${percentage}%)`;
}

const yearRanges = {
	1941: { start: 8, end: 10 },
	1942: { start: 6, end: 8 },
	1943: { start: 4, end: 6 },
	1944: { start: 2, end: 4 },
	1945: { start: 0, end: 2 },
};

function getYearRange(year) {
	return yearRanges[year] || { start: 0, end: 0 };
}

function handleSliderInput() {
	const year = parseInt(yearSlider.value, 10);
	const range = getYearRange(year);
	imageLayers.forEach((layer, index) => {
		layer.setVisible(index >= range.start && index < range.end);
	});
	document.querySelector(`.layer:nth-child(${2 * (year - 1941) + 4}) input[type="checkbox"]`).click();
	updateTooltip(year);
}

function toggleVisibility() {
	[layerSwitcherContainer, opacityManageContainer].forEach(element => {
		element.style.display = element.style.display === "block" ? "none" : "block";
	});
}

function createRangeInputs(data, layers) {
	const container = document.querySelector(".opacityManagersContainer");
	data.forEach((layerData, layerIndex) => {
		const layerDiv = document.createElement("div");
		layerDiv.style.cssText = "height: 40px; border-top: 1px solid gray;";
		layerData.forEach((rangeData, rangeIndex) => {
			const rangeDiv = document.createElement("div");
			rangeDiv.style.height = "20px";
			const rangeInput = document.createElement("input");
			Object.assign(rangeInput, {
				type: "range",
				name: rangeData.name,
				value: 100,
				min: 0,
				max: 100,
				className: "opacityOfLayersRange",
			});
			rangeInput.addEventListener("input", function() {
				const layerId = layers.length - 1 - (layerIndex * layerData.length + rangeIndex);
				layers[layerId].setOpacity(parseFloat(this.value) / 100);
			});
			rangeDiv.appendChild(rangeInput);
			layerDiv.appendChild(rangeDiv);
		});
		container.appendChild(layerDiv);
	});
}

yearSlider.addEventListener("input", handleSliderInput);
document.addEventListener("DOMContentLoaded", () => {
	yearSlider.dispatchEvent(new Event("input"));
	document.getElementById("toggle-layerswitcher").addEventListener("click", toggleVisibility);
});
document.addEventListener("DOMContentLoaded", () => createRangeInputs(imageData, imageLayers));