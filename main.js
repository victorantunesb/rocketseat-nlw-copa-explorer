function createGame(player1, hour, player2){
    return `<li>
            <img src="./assets/icon-${player1}.svg" alt="icon-${player1}">
                <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="icon-${player2}">
        </li>
        `
};


function createCard(date,day,game) {
  return `
     <div class="card">
                <h2>${date} <span>${day}</span> </h2>
                <ul>
                    ${game}
                </ul>
            </div>
            `
};

document.querySelector("#app").innerHTML = `
    <header>
            <img src="./assets/logo.svg" alt="logo.nlw">
    </header>
        <main id="cards">
        ${createCard(
          "24/11",
          "Quinta-feira",
          createGame("switzerland", "07:00", "cameroon") +
            createGame("portugal", "13:00", "gana") +
            createGame("brazil", "16:00", "serbia")
        )} 
        ${createCard(
          "28/11",
          "Segunda-feira",
          createGame("southkorea", "10:00", "gana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguai")
        )}
        ${createCard(
          "02/12",
          "Sexta-feira",
          createGame("southkorea", "12:00", "portugal") +
            createGame("gana", "12:00", "uruguai") +
            createGame("brazil", "16:00", "cameroon")
        )}
        </main>
`


