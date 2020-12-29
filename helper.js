function listenForClicks() {

  document.getElementById('add-js').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('bag-list').innerHTML += `<input class="bolsa" type="text">`
    const elements = document.getElementsByClassName('bolsa')
    elements[elements.length - 1].focus()
  })
  document.getElementById('find-js').addEventListener('click', (e) => {
    let bags = []

    function collectMissingItems(bag) {
      let viewInput = 'changethis'
      let css_selector = 'changethis'
      let baseUrl = 'changethis'
      const regexpLink = /\/inventory\/view_inventory_at\?location_name=.+[0|1]/

      // input bag into viewInput value
      content.document.getElementsByName(viewInput).value = bag
      // run seach in a new tab
      content.document.getElementsByName(viewInput).form.submit
      // get item links with yellow backgrounds
      const itemRow = content.document.querySelectorAll(css_selector)
      const itemText = itemRow.map(item => item.innerHTML)
      const itemLink = itemText.map(text => text.match(regexpLink))
      // get all locations from inventory
      for (let link in itemLink) {
        let itemUrl = baseUrl + link
        browser.tabs.create({active: true, url: itemUrl})
        //get urls from page
        const trElements = content.document.getElementsByTagName('tr')
        const trText = trElements.map(element => element.innerHTML)

        const trLinks = trText.map(text => text.match(regexpLink))
        const locationNames = trLinks.map(link => {
          return link.substring(link.indexOf('='), link.length - 1)
        })
        for (let locationName in locationNames) {
          const newNameElement = document.createElement('p')
          newNameElement.innerHTML = locationName
          document.getElementById('results').appendChild(newNameElement)
        }
        //TODO: close open tabs
      }
    }

    e.preventDefault()

    const bagElements = document.getElementsByClassName('bolsa')
    for (let bagElement in bagElements) {
      const value = bagElement.value.trim()
      bags.push(value)
    }

    for (let bag in bags) {
      collectMissingItems(bag)
    }
  })
}

listenForClicks()
