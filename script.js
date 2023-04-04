// Объект, хранящий записи
let records = [];

// Функция добавления записи
function addRecord() {
	const fio = document.getElementById("fio").value;
  document.getElementById("fio").value = "";
	const car = document.getElementById("car").value;
  document.getElementById("car").value = "";
	const date = document.getElementById("date").value;
  document.getElementById("date").value = "";
	const reason = document.getElementById("reason").value;
  document.getElementById("reason").value = "";
	const cost = document.getElementById("cost").value;
  document.getElementById("cost").value = "";
	const delivery = document.getElementById("delivery").value;
  document.getElementById("delivery").value = "";

	records.push({
		fio: fio,
		car: car,
		date: date,
		reason: reason,
		cost: cost,
		delivery: delivery
	});

	showRecords();
}

// Функция отображения записей
function showRecords() {
	let table = document.getElementById("records").getElementsByTagName("tbody")[0];
	table.innerHTML = "";

	for (let i = 0; i < records.length; i++) {
		let row = table.insertRow(i);
		let fioCell = row.insertCell(0);
		let carCell = row.insertCell(1);
		let dateCell = row.insertCell(2);
		let reasonCell = row.insertCell(3);
		let costCell = row.insertCell(4);
		let deliveryCell = row.insertCell(5);
		let actionsCell = row.insertCell(6);

		fioCell.innerHTML = records[i].fio;
		carCell.innerHTML = records[i].car;
		dateCell.innerHTML = records[i].date;
		reasonCell.innerHTML = records[i].reason;
		costCell.innerHTML = records[i].cost;
		deliveryCell.innerHTML = records[i].delivery;

		// Создание кнопок действий
		const editButton = document.createElement("button");
		editButton.innerHTML = "Редактировать";
		editButton.onclick = createEditHandler(i);

		const deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Удалить";
		deleteButton.onclick = createDeleteHandler(i);

		actionsCell.appendChild(editButton);
		actionsCell.appendChild(deleteButton);
	}
}

// Функция создания обработчика для кнопки "Редактировать"
function createEditHandler(index) {
	return function() {
		let fio = prompt("Введите новое Ф.И.О.: ", records[index].fio);
		let car = prompt("Введите новую марку и модель автомобиля: ", records[index].car);
		let date = prompt("Введите новую дату обращения: ", records[index].date);
		let reason = prompt("Введите новую причину обращения: ", records[index].reason);
		let cost = prompt("Введите новую стоимость ремонта: ", records[index].cost);
		let delivery = prompt("Введите новую дату передачи автомобиля: ", records[index].delivery);

		records[index].fio = fio;
		records[index].car = car;
		records[index].date = date;
		records[index].reason = reason;
		records[index].cost = cost;
		records[index].delivery = delivery;

		showRecords();
	};
}

// Функция создания обработчика для кнопки "Удалить"
function createDeleteHandler(index) {
	return function() {
		records.splice(index, 1);
		showRecords();
	};
}
