 // charge le DOM
    document.addEventListener("DOMContentLoaded", function () {
 
      const title = document.querySelector(".slogan h1"); // selectionne me H1
      const texts = title.getAttribute("data-text").split("/"); // selectionne le texte inscris dans data-text et transforme et le coupe à chaque "/"
      const textsLength = texts.length; // récupère la taille du texte
      var currentText = 0; // indice du premier bout de texte

      // fonction qui va faire défiler le texte
      function changeText() {

        setTimeout(function () { // créer une action infini sur un interval de 1 seconde

          title.classList.remove('leave'); // récupère la class "leave" et la retire
          title.innerHTML = texts[currentText]; // associe le bout de texte à son indice ici => texts[0]
          title.classList.add('enter'); //Ajoute la class "enter"

          setTimeout(function () { // créer une action infini sur un interval de 7 seconde

            title.classList.remove('enter');// retire la class "enter"
            title.classList.add('leave'); // ajoute la class 'leave'
            currentText++; // incrémente l'indice exemple currenText = 0 puis 1 puis 2 puis 3... 
            if (currentText > textsLength - 1) { // condition si currenText devient supérieur à la taille du text entier
              currentText = 0; // Alors on réinitialise currentText à 0
            }

            changeText(); // appelle de la fonction en local

          }, 7000)

        }, 1000)

      }

      changeText(); // appelle de la fonction global
    });