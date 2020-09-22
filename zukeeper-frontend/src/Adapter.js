class Adapter {

  static getAllAnimals(){
    return fetch("http://localhost:3000/animals")
      .then(response => response.json())
  }

  static removeAnimal(animalId){
    return fetch(`http://localhost:3000/animals/${animalId}`, {
      method: "DELETE"
    })
      .then(r => r.json())
  }

  static updateAnimal(id, newDonations){
    return fetch(`http://localhost:3000/animals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // how we are sending the data in the body
        "Accept": "application/json" // how we want the response formatted
      },
      body: JSON.stringify({ donations: newDonations })
    })
      .then(res => res.json())
  }

  static postAnimal(newAnimal){
      // make a fetch request to save the animal on the sever
  // POST /animals
    return fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // how we are sending the data in the body
        "Accept": "application/json" // how we want the response formatted
      },
      body: JSON.stringify(newAnimal)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error("Bad request")
        }
      })
    }

}
