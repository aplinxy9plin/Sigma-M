var arr = [
	[{"id":36,"photo":"https://unsplash.it/500/300?image=778","first_name":"Brett","last_name":"Cecil","age":21,"gender":"Female","live":{"country":"Greenland","city":"Patan"}},{"id":37,"photo":"https://unsplash.it/500/300?image=557","first_name":"Katti","last_name":"Tavy","age":21,"gender":"Female","live":{"country":"United Kingdom","city":"Syare"}},{"id":38,"photo":"https://unsplash.it/500/300?image=272","first_name":"Rozanne","last_name":"Sanger","age":17,"gender":"Male","live":{"country":"Guatemala","city":"Djibouti"}},{"id":39,"photo":"https://unsplash.it/500/300?image=530","first_name":"Fayina","last_name":"Kone","age":15,"gender":"Male","live":{"country":"South Africa","city":"Ambanja"}},{"id":40,"photo":"https://unsplash.it/500/300?image=48","first_name":"Stevena","last_name":"Freud","age":33,"gender":"Male","live":{"country":"Maldives","city":"Kedougou"}}],
	[{"id":41,"photo":"https://unsplash.it/500/300?image=576","first_name":"Beverlie","last_name":"Castara","age":42,"gender":"Male","live":{"country":"Moldova, Republic of","city":"Cerveny Kamen"}},{"id":42,"photo":"https://unsplash.it/500/300?image=928","first_name":"Evvie","last_name":"Ledeen","age":38,"gender":"Male","live":{"country":"Ghana","city":"Kanokupolu"}},{"id":43,"photo":"https://unsplash.it/500/300?image=290","first_name":"Dacy","last_name":"Earvin","age":17,"gender":"Female","live":{"country":"Svalbard and Jan Mayen","city":"Lajas"}},{"id":44,"photo":"https://unsplash.it/500/300?image=744","first_name":"Lorelei","last_name":"Adel","age":27,"gender":"Male","live":{"country":"Falkland Islands (Malvinas)","city":"Cotonou"}},{"id":45,"photo":"https://unsplash.it/500/300?image=935","first_name":"Catherine","last_name":"Berton","age":37,"gender":"Female","live":{"country":"United Kingdom","city":"Mufakose"}}]
]

function start(){
	var div = document.getElementById('pages'),
		table = document.getElementById('table');
	for (var i = 0; i < arr.length; i++) {
		var btn = document.createElement('button')
		btn.id = i
		btn.innerHTML = i
		btn.onclick = function () { updateTable(this.id) }
		div.appendChild(btn)
	}
	for (var i = 0; i < 5; i++) {
		var tr = document.createElement('tr')

			var id = document.createElement('td')
			id.className = "id"
			tr.appendChild(id)

			var photo = document.createElement('td')
			photo.className = "photo"
			tr.appendChild(photo)

			var first_name = document.createElement('td')
			first_name.className = "first_name"
			tr.appendChild(first_name)

			var last_name = document.createElement('td')
			last_name.className = "last_name"
			tr.appendChild(last_name)

			var age = document.createElement('td')
			age.className = "age"
			tr.appendChild(age)

			var country = document.createElement('td')
			country.className = "country"
			tr.appendChild(country)

			var city = document.createElement('td')
			city.className = "city"
			tr.appendChild(city)

			var gender = document.createElement('td')
			gender.className = "gender"
			tr.appendChild(gender)
		table.appendChild(tr)
	}
	updateTable(0)
}
function updateTable(id){
	for (var i = 0; i < 5; i++) { // строки
		document.getElementsByClassName('id')[i].innerHTML = arr[id][i].id
		document.getElementsByClassName('photo')[i].innerHTML = arr[id][i].photo
		document.getElementsByClassName('first_name')[i].innerHTML = arr[id][i].first_name
		document.getElementsByClassName('last_name')[i].innerHTML = arr[id][i].last_name
		document.getElementsByClassName('age')[i].innerHTML = arr[id][i].age
		document.getElementsByClassName('gender')[i].innerHTML = arr[id][i].gender
		document.getElementsByClassName('city')[i].innerHTML = arr[id][i].live.city
		document.getElementsByClassName('country')[i].innerHTML = arr[id][i].live.country
	}
}