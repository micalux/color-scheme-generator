	const getBtn = document.getElementById('get-btn')

	firstColorName = document.getElementById('one')
	secondColorName = document.getElementById('two')
	thirdColorName = document.getElementById('three')
	fourthColorName = document.getElementById('four')
	fifthColorName = document.getElementById('five')


	getBtn.addEventListener("click", function(e) {
		e.preventDefault()

		const colorPicker = document.getElementById('color-picker').value
		const colorMode = document.getElementById('color-mode').value.toLowerCase()

		fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.slice(1)}&mode=${colorMode}`)
			.then(res => res.json())
			.then(data => {

				const firstColorValue = data.colors[0].hex.value
				const secondColorValue = data.colors[1].hex.value
				const thirdColorValue = data.colors[2].hex.value
				const fourthColorValue = data.colors[3].hex.value
				const fifthColorValue = data.colors[4].hex.value
			
				firstColorName.innerText = firstColorValue
				secondColorName.innerText = secondColorValue
				thirdColorName.innerText = thirdColorValue
				fourthColorName.innerText = fourthColorValue
				fifthColorName.innerText = fifthColorValue

				document.getElementById("first-color").style.backgroundColor = firstColorValue
				document.getElementById("second-color").style.backgroundColor = secondColorValue
				document.getElementById("third-color").style.backgroundColor = thirdColorValue
				document.getElementById("fourth-color").style.backgroundColor = fourthColorValue
				document.getElementById("fifth-color").style.backgroundColor = fifthColorValue

				firstColorName.addEventListener('click', function(){
					colorCopy(firstColorValue)
				})
				secondColorName.addEventListener('click', function(){
					colorCopy(secondColorValue)
				})
				thirdColorName.addEventListener('click', function(){
					colorCopy(thirdColorValue)
				})
				fourthColorName.addEventListener('click', function(){
					colorCopy(fourthColorValue)
				})
				fifthColorName.addEventListener('click', function(){
					colorCopy(fifthColorValue)
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
