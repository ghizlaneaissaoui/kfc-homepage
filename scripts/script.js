const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

let votremessage = document.getElementById('votremessage');
let submit = document.getElementById('submit');
function sendmsg(){
	
	if(getComputedStyle(votremessage).display == "none"){
		
	  votremessage.style.display = "block";
	}
	setTimeout (function() {
		window.location = window.location;}, 1500);
	
};

