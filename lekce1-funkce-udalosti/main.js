
let ctverecek = document.querySelector(".ctverecek");
let gratulace = "Gratulace, právě jsi spustila tuto funkci!";

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
  let c = a + b;
  return c;
}

function upozorni() {
  alert(gratulace);
    ctverecek.innerHTML = gratulace;
    console.log (gratulace);
}

function priKliknuti() {
    ctverecek.style.backgroundColor = 'green';
}

function zobrazVysledek() {
  let vysledek = document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

