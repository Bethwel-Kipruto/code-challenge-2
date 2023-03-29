document.querySelector('#ourform').addEventListener('submit', submitting);

//submitting in case of adding animals to our database 
function submitting(e){
    e.preventDefault();
    let characters={
        name:e.target.name.value,
        image:e.target.url.value,
        description:e.target.description.value,
        votes:0
    }
    displayProducts(characters);
    addAnimals(characters);


}

// fetching data
const url ="http://localhost:3000/characters"
fetch(url)
.then(res => res.json())
.then(characters => characters.forEach(characters=> displayProducts(characters)))

// Displaying  in html
function displayAnimals(animals){
    const animal = document.createElement("p")
    animal.className = "card"
    animal.innerHTML =`
    <img src=${cars.image}><br>
    <p>${animals.name}</p><br>
    <p>${animals.description}</p><br>
    <p>${animals.votes}</p>
    `
    document.querySelector("#displayAnimals").appendChild(animals)
}

function addAnimals (characters) {
    fetch('http://localhost:3000/characters',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(characters)
    })
    .then (res => res. json())
    .then (cars => console. log(animals))
}

 