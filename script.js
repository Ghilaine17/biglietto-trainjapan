let submitButton = document.querySelector('.button-submit')
let resetButton = document.querySelector('.button-reset')
let result = document.querySelector(".result")

submitButton.addEventListener('click', function () {
    let age = document.getElementById('age').value
    let km = document.getElementById('km').value
    let firstName = document.getElementById('firstName').value
    let firstSurname = document.getElementById('firstSurname').value
    const kmP = 0.21
    if (age === "") {
        result.innerHTML = "Seleziona un età"
        return
    } else if (km === "") {
        result.innerHTML = "Immetti i km"
        return
    }

    let price = km * kmP

    if (age === "minorenne") {
        price = (price - (price * 20 / 100))
    } else if (age === "over65") {
        price = (price - (price * 40 / 100))
    }

    let ticketNumber = Math.floor(10000000 + Math.random() * 90000000);
    const seatNumber = Math.floor(1 + Math.random() * 40);
    const seatCharacter = String.fromCharCode(0 | Math.random() * 4 + 97)
    let composedSeat = seatNumber + seatCharacter
    let randomDate = new Date(new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()))
    const yyyy = randomDate.getFullYear();
    let mm = randomDate.getMonth() + 1; // Months start at 0!
    let dd = randomDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDate = dd + '/' + mm + '/' + yyyy;

    let numberTrain = Math.floor(1000 + Math.random() * 9000);
    let trainCharacter1 = String.fromCharCode(0 | Math.random() * 6 + 97)
    let trainCharacter2 = String.fromCharCode(0 | Math.random() * 4 + 97)
    

    let composedTrainNumber = trainCharacter1 + trainCharacter2 + numberTrain

    let printClass = ""

    if( age === "minorenne") {
        printClass = "Economy"
    } else printClass = "First Class"

    // result.innerHTML = "Il prezzo del tuo biglietto è: " + price.toFixed(2) + "€"
    result.innerHTML = `
        <div class="container my-border " id="ticket">
        <div>
            <h3 class="text-uppercase text-center text-white mt-3 mb-0  ">
                il tuo biglietto
            </h3>
        </div>
        <div class="container d-flex justify-content-between align-items-center text-white p-0 mb-2">
            <div>
                <div>
                    <img class="my-station-train" src="img/Logo_of_Tokyo_Metro_Hanzōmon_Line.svg.png" alt="">
                </div>
            </div>
            <div class="ticket-info">
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                            <h5 class="me-2">Nome:</h5>
                            <div class="fs-6">${firstName}</div>
                        </div>
                        <div class="d-flex">
                            <h5 class="me-2">Data:</h5>
                            <div class="fs-6">${formattedDate}</div>
                        </div>
                        <div class=>
                            <h6 class="me-2">Numero Treno:</h6>
                            <div class="fs-6">${composedTrainNumber}</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex">
                            <h5 class="me-2">Cognome:</h5>
                            <div class="fs-6">${firstSurname}</div>
                        </div>
                        <div class="d-flex">
                            <h5 class="me-2">Posto:</h5>
                            <div class="fs-6">${composedSeat}</div>
                        </div>
                        <div class="d-flex">
                            <h5 class="me-2">Classe:</h5>
                            <div class="fs-6">${printClass}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticket-number-price">
                <div class="mb-3">
                    <h3>Numero Biglietto: </h3>
                    <div class="fs-5">${ticketNumber}</div>
                </div>
                <div>
                    <h3>Prezzo:</h3>
                    <div class="fs-4">${price}€</div>
                </div> 
            </div>
        </div>
    </div>
    `
})

resetButton.addEventListener('click', function () {
    let age = document.getElementById('age').value = ""
    let km = document.getElementById('km').value = ""
    let firstName = document.getElementById('firstName').value = ""
    let firstSurname = document.getElementById('firstSurname').value = ""

    result.innerHTML = ""

})
