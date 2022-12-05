//  Находим на странице "действующие" элементы (с которыми будет происходить взаимодействие)
const img = document.querySelector('#img');
const buttons = document.querySelectorAll('.colorItem');

//  Отслеживаем пользовательские события
buttons.forEach(function (item) {
	item.addEventListener('click', function (event) {

		img.src = 'https://webcademy.ru/files/js2020/solaris/' + event.target.dataset.file;



		const prevActivBtn = document.querySelector('.colorItem--active');
		prevActivBtn.classList.remove('colorItem--active');
		event.target.classList.add('colorItem--active');


	})
})