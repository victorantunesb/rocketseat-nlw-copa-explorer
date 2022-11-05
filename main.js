function createGame(player1, hour, player2){
    return `<li>
            <img src="./assets/icon-${player1}.svg" alt="icon-${player1}">
                <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="icon-${player2}">
        </li>
        `
};

let delay = -0.4;
function createCard(date,day,game) {
 delay = delay + 0.4;
  return `
     <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span> </h2>
                <ul>
                    ${game}
                </ul>
            </div>
            `
};

document.querySelector("#cards").innerHTML = 
        createCard(
          "24/11",
          "Quinta-feira",
          createGame("switzerland", "07:00", "cameroon") +
            createGame("portugal", "13:00", "gana") +
            createGame("brazil", "16:00", "serbia")
        ) +
        createCard(
          "28/11",
          "Segunda-feira",
          createGame("southkorea", "10:00", "gana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguai")
        ) +
        createCard(
          "02/12",
          "Sexta-feira",
          createGame("southkorea", "12:00", "portugal") +
            createGame("gana", "12:00", "uruguai") +
            createGame("brazil", "16:00", "cameroon")
        )
        
//função do botão de mudança da coloração do Body.
function changeBody(){
  const bodyColor = document.querySelector("body") 
  const curBdColor = bodyColor.getAttribute("class")
  if (curBdColor == 'blue') {
    bodyColor.setAttribute('class', 'green')
  }
  if (curBdColor == 'green') {
    bodyColor.setAttribute('class', '') 
  }
  if (curBdColor == '') {
    bodyColor.setAttribute('class', 'blue')
  }

}
