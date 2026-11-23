/* =========================================================
   JAVASCRIPT - CONTROLE DOS 4 CARDS
   ========================================================= */


/*
  Procuramos TODOS os elementos que possuem
  a classe "card".

  Como temos 4 cards, o JavaScript
  encontrará os 4.
*/
const cards = document.querySelectorAll(".card");


/*
  O forEach passa por cada card.

  Primeiro trabalha com o card 1,
  depois com o card 2,
  depois com o card 3,
  e finalmente com o card 4.

  Assim não precisamos repetir o mesmo código
  quatro vezes.
*/
cards.forEach((card) => {


  /*
    Procura o botão "Ver mais"
    dentro do card atual.
  */
  const flipButton = card.querySelector(".flip-button");


  /*
    Procura o botão "Voltar"
    dentro do card atual.
  */
  const backButton = card.querySelector(".back-button");


  /*
    Procura a parte interna do card.

    É essa parte que vai girar
    quando o usuário clicar.
  */
  const cardInner = card.querySelector(".card-inner");


  /*
    QUANDO O USUÁRIO CLICAR EM "VER MAIS":

    O JavaScript adiciona a classe
    "flipped" ao card.

    O CSS percebe essa classe
    e faz o card girar.
  */
  flipButton.addEventListener("click", () => {

    cardInner.classList.add("flipped");

  });


  /*
    QUANDO O USUÁRIO CLICAR EM "VOLTAR":

    O JavaScript remove a classe
    "flipped".

    O CSS então faz o card
    voltar para a frente.
  */
  backButton.addEventListener("click", () => {

    cardInner.classList.remove("flipped");

  });

});