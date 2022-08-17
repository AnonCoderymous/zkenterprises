//JavaScript for front-end operations

const igicons = document.querySelectorAll(".fa-instagram"),
mailicons = document.querySelectorAll(".fa-envelope");

for( let igicon of igicons ) {
	igicon.addEventListener('click', function(e) {
		if(e.type == 'click') {
			window.open("https://www.instagram.com/zkenterprises19/");
		}
		return true;
	});
}

for( let mailicon of mailicons ) {
	mailicon.addEventListener('click', function(e){
		if(e.type == 'click') {
			window.open("mailto: zkenterprises19@gmail.com");
		}
	});
}