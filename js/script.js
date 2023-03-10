// Generazione del biglietto
// Bottone genera
const nameInput = document.getElementById("nome");
const kmInput = document.getElementById("km");
const ageRangeInput = document.getElementById("fascia-eta");

const passengerNameElem = document.getElementById("nome-passeggero");
const offerElem = document.getElementById("offerta-applicata");
const codeElem = document.getElementById("codice-cp");
const cabinElem = document.getElementById("carrozza");
const priceElem = document.getElementById("costo");

const errorElem = document.getElementById("error-message");

const generateBtn = document.getElementById("bottone");
generateBtn.addEventListener("click", function () {
  // Nascondo il messaggio di errore
  errorElem.classList.add("hidden");
  
  // Prelevo i valori inseriti dall'utente
  const name = nameInput.value;
  const km = parseInt(kmInput.value);
  const ageRange = ageRangeInput.value;

  // nome deve essere non vuoto e almeno di 3 caratteri
  const nameIsValid = name !== "" && name.length > 3;
  // km non nan e deve essere maggiore di 10
  const kmIsValid = !isNaN(km) && km > 10;
  // age Range deve essere selezionato
  const ageRangeIsValid = ageRange !== "";

  // Se tutti i valori sono validi
  //    false          false        false
  if (nameIsValid && kmIsValid && ageRangeIsValid) {
    //  Faccio il calcolo ecc
    // Calcolo offerta e costo del biglietto
    const basePrice = km * 0.21;
    let finalPrice = basePrice;
    let offer = "nessuna offerta";

    if (ageRange === "minorenne") {
      finalPrice = basePrice - (basePrice * 20) / 100;
      offer = "Under 18";
    } else if (ageRange === "over65") {
      finalPrice = basePrice - (basePrice * 40) / 100;
      offer = "Over 65";
    }

    // Genero numero della carrozza tra 1 e 8
    const cabin = Math.floor(Math.random() * 8) + 1;

    // Genero codice CP tra 1000 e 9999
    const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(code);

    // Stampa dei risultati nel biglietto
    const biglietto = document.getElementById("biglietto");
    biglietto.classList.remove("hidden");

    passengerNameElem.innerHTML = name;
    offerElem.innerHTML = offer;
    cabinElem.innerHTML = cabin;
    codeElem.innerHTML = code;
    priceElem.innerHTML = `€ ${finalPrice.toFixed(2)}`;

    // Ripulire i campi
    nameInput.value = "";
    kmInput.value = "";
    ageRange.value = "";
  } else {
    // Altrimenti
    //  Stampo il messaggio di errore
    errorElem.classList.remove("hidden");
  }
});

// Implementazione della funzionalità annulla
const clearBtn = document.getElementById("annulla");
clearBtn.addEventListener("click", function () {
  // Ripulire e nascondere il biglietto
  passengerNameElem.innerHTML = "";
  offerElem.innerHTML = "";
  cabinElem.innerHTML = "";
  codeElem.innerHTML = "";
  priceElem.innerHTML = "";
  document.getElementById("biglietto").classList.add("hidden");

  // Ripulire gli input
  nameInput.value = "";
  kmInput.value = "";
  ageRangeInput.value = "";
});
