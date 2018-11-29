document.addEventListener('DOMContentLoaded', function () {

    //TITLE
    const title = document.querySelector('.slogan h1');
    const texts = Array('La sportivité à l\'état pur','Le design au service de la performance',"La perfection dans les détails");
    const textsLength = texts.length;
    var currentText = 0;

    function changeText() {

        setTimeout(function () {
            title.classList.remove('leave');
            title.innerHTML = texts[currentText];
            title.classList.add('enter');

            setTimeout(function () {
                title.classList.remove('enter');
                title.classList.add('leave');
                currentText++;

                if(currentText > textsLength-1) {
                    currentText = 0;
                }

                changeText();

            }, 7000)

        }, 1000)
    }
    changeText();
});