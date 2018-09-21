// Объявление функции. Оператор function, название функции
function action_yo(){
	// переменные, получающие значение элемента с id login и пароль
	var login = document.getElementById('login').value
	var password = document.getElementById('password').value

	// Присваивание HTML объекту текст из переменных login, password
	document.getElementById('x1').innerHTML = login
	document.getElementById('x2').innerHTML = password
}

// Здесь мог бы быть вызов нашей функции action_yo
// action_yo()
