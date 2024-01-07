	const getBtn = document.getElementById('get-btn')

	firstColorName = document.getElementById('first-color-name')
	secondColorName = document.getElementById('second-color-name')
	thirdColorName = document.getElementById('third-color-name')
	fourthColorName = document.getElementById('fourth-color-name')
	fifthColorName = document.getElementById('fifth-color-name')

	console.log('test')
	getBtn.addEventListener("click", function(e) {
		e.preventDefault()

		const colorPicker = document.getElementById('color-picker').value
		const colorMode = document.getElementById('color-mode').value.toLowerCase()

		fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.slice(1)}&mode=${colorMode}`)
			.then(res => res.json())
			.then(data => {

				firstColorName.innerText = data.colors[0].hex.value
				secondColorName.innerText = data.colors[1].hex.value
				thirdColorName.innerText = data.colors[2].hex.value
				fourthColorName.innerText = data.colors[3].hex.value
				fifthColorName.innerText = data.colors[4].hex.value

				document.getElementById("first-color").style.backgroundColor = data.colors[0].hex.value
				document.getElementById("second-color").style.backgroundColor = data.colors[1].hex.value
				document.getElementById("third-color").style.backgroundColor = data.colors[2].hex.value
				document.getElementById("fourth-color").style.backgroundColor = data.colors[3].hex.value
				document.getElementById("fifth-color").style.backgroundColor = data.colors[4].hex.value

				firstColorName.addEventListener('click', function(){
					colorCopy(data.colors[0].hex.value)
				})
				secondColorName.addEventListener('click', function(){
					colorCopy(data.colors[1].hex.value)
				})
				thirdColorName.addEventListener('click', function(){
					colorCopy(data.colors[2].hex.value)
				})
				fourthColorName.addEventListener('click', function(){
					colorCopy(data.colors[3].hex.value)
				})
				fifthColorName.addEventListener('click', function(){
					colorCopy(data.colors[4].hex.value)
				})

			})
	})

	function colorCopy(value){
	navigator.clipboard.writeText(value).then(() => {
		console.log('Content copied to clipboard')
		},() => {
		console.error('Failed to copy')
		})
	}
