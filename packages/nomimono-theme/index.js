var c = document.getElementById('container')

var colourIsLight = function (r, g, b) {
	// Counting the perceptive luminance
	// human eye favors green color...
	var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255
	return a < 0.5
}

var randomRgb = function () {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return [r, g, b]
}

var colourFromRgb = function (r, g, b) {
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}

for (var i = 0; i < 1000; i += 1) {
	var el = document.createElement('div')
	el.setAttribute('class', 'box')
	el.textContent = 'Hello'

	var bgRgb = randomRgb()
	var bgColour = colourFromRgb(bgRgb[0], bgRgb[1], bgRgb[2])
	var textColour = colourIsLight(bgRgb[0], bgRgb[1], bgRgb[2]) ? 'black' : 'white'

	el.setAttribute('style', 'background-color: ' + bgColour + '; color: ' + textColour)

	c.appendChild(el)
}
