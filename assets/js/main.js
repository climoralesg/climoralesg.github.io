function showForm(event){
	event.preventDefault();
	var contactInfo = document.getElementById("contact-info");
	var contactForm = document.getElementById("contact-form");
	contactForm.style.display = "block";
	contactInfo.style.display = "none";
}
function showUserInfo(event){
	event.preventDefault();
	var contactInfo = document.getElementById("contact-info");
	var contactForm = document.getElementById("contact-form");
	contactForm.style.display = "none";
	contactInfo.style.display = "block";
}




const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	
	document.body.classList.toggle('dark');

	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode','true');
		console.log("Modo Oscuro");

	}else{
		console.log("Modo Dia");

		localStorage.setItem('dark-mode','false');
	}
});

if(localStorage.getItem('dark-mode')=="true"){
	document.getElementById('chk').checked = 1;
	console.log("Esta en modo noche")
	document.body.classList.toggle('dark');
}



