/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)

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
  Adapter.postAnimal(newAnimal)
    .then(actualNewAnimal => {
      new Animal (actualNewAnimal)
    })
    .catch(error => alert(error))
  event.target.reset()
}

function renderAllAnimals(animals) {
  animals.forEach(animal => new Animal(animal))
}

/**************** Initial Render ****************/
Adapter.getAllAnimals().then(renderAllAnimals)
