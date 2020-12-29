function listenForClicks() {
  document.getElementById('add-js').addEventListener('click', (e) => {
    // ADD INPUT ELEMENT TO THE PAGE
    e.preventDefault();
    document.getElementById('bag-list').innerHTML += `<input class="bolsa" type="text">`
  })
  document.getElementById('find-js').addEventListener('click', (e) => {
    // SEARCH FOR ALL MISSING ITEMS IN THE LIST
    e.preventDefault();

    document.getElementsByClassName('bolsa')
  })
}

listenForClicks();
