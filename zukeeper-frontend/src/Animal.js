class Animal {

  constructor(animal){
    this.animal = animal
    this.card = this.buildCard()
    this.setEventListeners()
  }

  buildCard(){
    const cardLi = document.createElement('li')
    cardLi.className = "card"
    cardLi.dataset.id = this.animal.id
    cardLi.innerHTML = this.animalInnerHTML()
    document.querySelector("#animal-list").appendChild(cardLi)
    return cardLi
  }

  animalInnerHTML(){
    const {image_url, name, donations, description, species_name, diet } = this.animal
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

  setEventListeners(){
    this.card.querySelector(".delete").addEventListener("click", this.deleteAnimal)
    this.card.querySelector(".donate").addEventListener("click", this.donate)
  }

  donate = () => {
    const {id, donations} = this.animal
    Adapter.updateAnimal(id, donations + 10)
      .then(animal => {
        this.animal = animal
        this.card.innerHTML = this.animalInnerHTML()
        this.setEventListeners()
      })
  }

  deleteAnimal = () => {
    Adapter.removeAnimal(this.animal.id).then(() => this.card.remove())
  }

}
