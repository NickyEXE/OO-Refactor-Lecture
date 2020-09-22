class Animal {

  constructor(animalObj){
    this.animal = animalObj
    this.card = this.createCard()
    this.card.addEventListener("click", this.handleClick)
  }

  createCard = () => {
    const card = document.createElement('li')
    card.className = "card"
    card.dataset.id = this.animal.id
    card.innerHTML = this.renderInnerHTML()
    animalList.append(card)
    return card
  }

  handleClick = (e) => {
    if (e.target.dataset.action === "freeToTheWild"){
      ApiService.releaseAnimal(this.animal.id).then(this.card.remove())
    }

    else if (e.target.dataset.action === "donate"){
      ApiService.donate(this.animal.id, this.animal.donations + 10)
      .then(fetchedAnimal => {
        this.animal = fetchedAnimal
        this.card.innerHTML = this.renderInnerHTML()
      })
    }
  }

  renderInnerHTML(){
    const {image_url, name, donations, description, species_name, diet} = this.animal
    return `
      <div class="image">
        <img src="${image_url}" alt="${name}">
        <button data-action="freeToTheWild" class="delete button">X</button>
      </div>
      <div class="content">
        <div class="name">${name}</div>
        <div class="donations">
          $<span class="donation-count">${donations}</span> Donated
        </div>
        <div class="description">${description}</div>
        <div class="tags">
          <span>${species_name}</span>
          <span class="${diet}">${diet}</span>
        </div>
      </div>
      <button data-action="donate" class="donate button">
        Donate $10
      </button>
    `
  }


}
