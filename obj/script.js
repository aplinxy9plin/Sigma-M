var x = [
  [{"id":21,"photo":"https://unsplash.it/500/300?image=627","first_name":"Marga","last_name":"Kirschner","age":16,"sex":"Female","live":{"country":"Tokelau","city":"Majuro"}},{"id":22,"photo":"https://unsplash.it/500/300?image=164","first_name":"Silvie","last_name":"Harbird","age":44,"sex":"Male","live":{"country":"Seychelles","city":"Bangui"}},{"id":23,"photo":"https://unsplash.it/500/300?image=669","first_name":"Catherina","last_name":"Troth","age":20,"sex":"Female","live":{"country":"Jersey","city":"Tarija"}},{"id":24,"photo":"https://unsplash.it/500/300?image=658","first_name":"Reina","last_name":"Furlani","age":25,"sex":"Male","live":{"country":"Tonga","city":"Atafu Village"}},{"id":25,"photo":"https://unsplash.it/500/300?image=641","first_name":"Caitlin","last_name":"Bunting","age":35,"sex":"Female","live":{"country":"Israel","city":"Brackenfell"}}],
  [{"id":321,"photo":"https://unsplash.it/500/300?image=98","first_name":"Arluene","last_name":"Gibby","age":34,"sex":"Male","live":{"country":"Bahrain","city":"Addis Ababa"}},{"id":322,"photo":"https://unsplash.it/500/300?image=148","first_name":"Felicia","last_name":"Constantia","age":41,"sex":"Female","live":{"country":"Portugal","city":"Abidjan"}},{"id":323,"photo":"https://unsplash.it/500/300?image=304","first_name":"Kaitlynn","last_name":"Annamaria","age":39,"sex":"Female","live":{"country":"Slovenia","city":"Thonex"}},{"id":324,"photo":"https://unsplash.it/500/300?image=163","first_name":"Deborah","last_name":"Servetnick","age":42,"sex":"Female","live":{"country":"Pitcairn","city":"Pristina"}},{"id":325,"photo":"https://unsplash.it/500/300?image=965","first_name":"Helsa","last_name":"Bor","age":16,"sex":"Male","live":{"country":"Ireland","city":"Juba"}}]
]

function start(){
  for (var i = 0; i < x.length; i++) {
    var a = document.createElement('a')
    a.innerHTML = i
    a.id = i
    a.href = "#"
    a.onclick = function() { addElement(this.id)}
    document.body.appendChild(a)
  }
  addElement(0)
}

function addElement(o) {
  var old = document.getElementsByTagName('table');
    if(old.length !== 0){
      old[0].parentNode.removeChild(old[0]);
    }
    var table = document.createElement('table')
    var photo = document.createElement("th");
    photo.innerHTML = "photo"
    var first_name = document.createElement("th");
    first_name.innerHTML = "first_name"
    var last_name = document.createElement("th");
    last_name.innerHTML = "last_name"
    var age = document.createElement("th");
    age.innerHTML = "age"
    var sex = document.createElement("th");
    sex.innerHTML = "sex"
    var country = document.createElement("th");
    country.innerHTML = "country"
    var city = document.createElement("th");
    city.innerHTML = "city"
    for (var i = 0; i < 5; i++) {
      var tr = document.createElement("tr")

      var id = document.createElement("td");
      id.innerHTML = x[o][i].id;
      // create img
      var photo = document.createElement("td");
      photo.innerHTML = x[o][i].photo;
      var first_name = document.createElement("td");
      first_name.innerHTML = x[o][i].first_name;
      var last_name = document.createElement("td");
      last_name.innerHTML = x[o][i].last_name;
      var age = document.createElement("td");
      age.innerHTML = x[o][i].age;
      var sex = document.createElement("td");
      sex.innerHTML = x[o][i].sex;
      var country = document.createElement("td");
      country.innerHTML = x[o][i].live.country;
      var city = document.createElement("td");
      city.innerHTML = x[o][i].live.city;

      tr.appendChild(id);
      tr.appendChild(photo);
      tr.appendChild(first_name);
      tr.appendChild(last_name);
      tr.appendChild(age);
      tr.appendChild(sex);
      tr.appendChild(country);
      tr.appendChild(city);
      table.appendChild(tr)
    }
    document.body.appendChild(table)
}
