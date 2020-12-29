function listenForClicks() {

  document.getElementById('add-js').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('bag-list').innerHTML += `<input class="bolsa" type="text">`
    const elements = document.getElementsByClassName('bolsa')
    elements[elements.length - 1].focus()
  })
  document.getElementById('find-js').addEventListener('click', (e) => {
    let bags = []

    function collectMissingItems(bag) {
      let viewInput = 'test'
      let css_selector = ''
      let baseUrl = ''

      // input bag into viewInput value
      content.document.getElementsByName(viewInput).value = bag
      // run seach in a new tab
      content.document.getElementsByName(viewInput).form.submit
      // get item links with yellow backgrounds
      const itemRow = content.document.querySelectorAll(css_selector)
      const itemText = itemRow.map(item => {
        return item.innerHTML
      })
      const itemLink = itemText.map(text => {
        const regexp = /\/inventory\/view_inventory_at\?location_name=.+[0|1]/
        return text.match(regexp)

      })
      // get all locations from inventory
      for (let link in itemLink) {
        let itemUrl = baseUrl + link
        browser.tabs.create({
          active: true,
          url: itemUrl
        });
        //get urls from page
        //close open tabs
      }
    }

    e.preventDefault()

    const bagElements = document.getElementsByClassName('bolsa')
    for (let bagElement in bagElements) {
      const value = bagElement.value
      bags.push(value)
    }

    for (let bag in bags) {
      collectMissingItems(bag)
    }
  })
}

listenForClicks()
