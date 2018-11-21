function start(){
	var color = "black", x = 0;
	for (var i = 0; i < 8; i++) {
		var tr = document.createElement('tr')
		for (var j = 0; j < 8; j++) {
			var td = document.createElement('td')
			if(x == 8){
				if(color == "black"){
					color = "white"
				}else{
					color = "black"
				}
				x = 0
			}
			if(color == "black"){
				color = "white"
				td.style.backgroundColor = color
			}else{
				if(i > 4){
					var img = document.createElement('img')
					img.src = "yellow.png"
					img.style.display = "block"
					img.style.margin = "0 auto"
					td.appendChild(img)
				} else if(i < 3){
					var img = document.createElement('img')
					img.src = "green.png"
					img.style.display = "block"
					img.style.margin = "0 auto"
					td.appendChild(img)
				}

				color = "black"
				td.style.backgroundColor = color
			}
			x++
			tr.appendChild(td)
		}
		document.getElementById('board').appendChild(tr)
	}
}