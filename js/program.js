// charge le DOM

document.addEventListener('DOMContentLoaded', function () {
	const title = document.querySelector(".slogan h1");
	const texts = title.getAttribute("data-text").split("/");
	const textLength = texts.length;
	var currentText =0;


	function changeText(){

		setTimeout(function(){

			title.classList.remove('leave');
			title.innerHTML = texts[currentText];
			title.classList.add('enter');


		setTimeout(function(){

			title.classList.remove('enter');
			title.classList.add('leave');
			currentText++;
			if(currentText > textsLength -1) {

				currentText = 0;
			}

			changeText();
		}, 7000)

		}, 1000)

	}


	changeText();

});