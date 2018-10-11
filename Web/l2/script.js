function action() {
	var Login = document.getElementById('Login').value
	var Password = document.getElementById('Password').value
	if (Login == "abc" && Password == "123") {
		alert("Верно")
	} 
	else {
		alert("Неверно")
	}

}

var count = 0;

function clicker () {
	count +=1;
	document.getElementById("first").innerHTML = count

} 