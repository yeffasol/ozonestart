export default function getData() {
	const goods = document.querySelector(".goods");
	return fetch("../../db/db.json")
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Данные не были получены. Ошибка: ${response.status}`);
			}
		})
		.then(data => {
			return data;
		})
		.catch(err => goods.textContent = err);
}
