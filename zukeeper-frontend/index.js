// const ApiService = new ApiService

/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)


/**************** Event Handlers ****************/
function handleLightSwitchClick() {
  document.body.classList.toggle("dark-mode")
}

function handleFormSubmit(event) {
  // always prevent the default action for submit events!
  event.preventDefault()

  // get the form input
  const newAnimal = {
    name: event.target["name"].value,
    species_name: event.target["species_name"].value,
    image_url: event.target["image_url"].value,
    diet: event.target["diet"].value,
    description: event.target["description"].value,
    donations: 0
  }

  // make a fetch request to save the animal on the sever
  // POST /animals
    ApiService.addAnimal(newAnimal)
    .then(actualNewAnimal => {
      new Animal(actualNewAnimal)
    })
    .catch(error => alert(error))

}

/**************** Render Helpers ****************/
function renderOneAnimal(animalObj) {
  const animal = new Animal(animalObj)
}

function renderAllAnimals(animals) {
  animals.forEach(renderOneAnimal)
}

/**************** Initial Render ****************/

  ApiService.getAllAnimals().then(actualAnimalData => {
    renderAllAnimals(actualAnimalData)
  })

// When X event happens
// Do Y fetch request
// And slap Z on/off the DOM
