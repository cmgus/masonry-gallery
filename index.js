const galleryLayout = (containerElement, itemsElems, columns) => {
  containerElement.classList.add('gallery-layout', `columns-${columns}`)
  let columnsElements = []

  for (let i = 1; i <= columns; i++) {
    let column = document.createElement('div')
    column.classList.add('gallery-column')
    containerElement.appendChild(column)
    columnsElements.push(column)
  }

  for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
    for (let n = 0; n < columns; n++) {
      if (((columns * m) + n) < itemsElems.length){
        console.log(((columns * m) + n))
        columnsElements[n].appendChild(itemsElems[(columns * m) + n])
      }
    }
  }
}

galleryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3)