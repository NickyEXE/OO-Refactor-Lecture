class App {

  constructor(){
    this.init()
  }

  init(){
    this.initialPageRender()
    this.setEventListeners()
    Adapter.getAllAnimals().then(animals => {
      animals.forEach(animal => new Animal(animal))
    })
  }

  setEventListeners(){
    const lightSwitch = document.querySelector("#toggle-dark-mode")
    const animalForm = document.querySelector("#animal-form")
    lightSwitch.addEventListener("click", this.handleLightSwitchClick)
    animalForm.addEventListener("submit", this.handleFormSubmit)
  }

  handleLightSwitchClick(){
    document.body.classList.toggle("dark-mode")
  }

  handleFormSubmit(event){
    event.preventDefault()
    const newAnimal = {
      name: event.target["name"].value,
      species_name: event.target["species_name"].value,
      image_url: event.target["image_url"].value,
      diet: event.target["diet"].value,
      description: event.target["description"].value,
      donations: 0
    }
    Adapter.postAnimal(newAnimal)
      .then(actualNewAnimal => {
        new Animal (actualNewAnimal)
      })
      .catch(error => alert(error))
    event.target.reset()
  }

  initialPageRender(){
    document.body.innerHTML = `
        <header id="menu">
        <h1>welcome to Zûkeeper</h1>
        <div class="toggle-switch">
          <input type="checkbox" id="toggle-dark-mode">
          <label for="toggle-dark-mode"></label>
        </div>
      </header>
      <main>
        <section class="container another-class">
          <form id="animal-form" class="form">
            <input type="text" name="name" placeholder="Enter animal name..." autocomplete="off">
            <input type="text" name="species_name" placeholder="Enter species name..." autocomplete="off">
            <input type="text" name="image_url" placeholder="Enter image url..." autocomplete="off">
            <select name="diet">
              <option value="">Select diet type...</option>
              <option value="carnivore">carnivore</option>
              <option value="herbivore">herbivore</option>
              <option value="omnivore">omnivore</option>
            </select>
            <textarea name="description" placeholder="Enter description..."></textarea>
            <input type="submit" value="Adopt Animal" class="button">
          </form>
          <ul id="animal-list" class="cards">
            <!-- Animals here -->
          </ul>
        </section>
      </main>`
  }




}
