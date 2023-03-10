let markAll = document.querySelector('.markAll'),
	noOfNotifications = document.querySelector('header .noOfNotifications'),
	notifications = document.getElementsByClassName('notification')
	circles = document.getElementsByClassName('circle')

markAll.addEventListener('click', function () {
	noOfNotifications.textContent = '0'
	for (let notification of notifications) {
		notification.classList.remove('unread')
	}
	for (let circle of circles) {
		circle.style.display = 'none'
	}
})
