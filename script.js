
function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/${player1}.svg" alt="bandeira do pais" />
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="bandeira do pais" />
        </li> 
    `
}

let delay = -0.3;
function createCard(date, day, games){
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
           ${games}
        </ul>
    </div>
`
}

document.querySelector('.cards').innerHTML = 
    createCard("21/11", "segunda", 
        createGame("brasil", "16:00", "serbia") + 
        createGame("hungary", "13:00", "argentina") +
        createGame("colombia", "20:00", "japan")) +

    createCard("24/11", "quinta", 
        createGame("british columbia", "08:00", "cameroon") +
        createGame("india", "13:00", "armenia") +
        createGame("comoros", "20:00", "jordan"))
        