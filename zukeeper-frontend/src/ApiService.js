class ApiService {

  getAllAnimals(){
    return fetch("http://localhost:3000/animals")
    .then(response => response.json())
  }

  releaseAnimal(id){
    return fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE"
    })
      .then(r => {
        console.log(r)
        return r.json()
      })
  }

  donate(animalId, newDonations){
    return fetch(`http://localhost:3000/animals/${animalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // how we are sending the data in the body
        "Accept": "application/json" // how we want the response formatted
      },
      body: JSON.stringify({ donations: newDonations })
    })
  }

  addAnimal(newAnimal){
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
