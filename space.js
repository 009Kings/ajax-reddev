// http://api.open-notify.org/astros.json

let makeFetchHappen = () => {
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    // add astronauts to the ul
    listAstros(data.people)
  })
}

let listAstros = (astroList) => {
  // for each astronaut
  astroList.forEach((astronaut) => {
    // add a li tag 
    let listAstro = document.createElement('li')
    listAstro.innerText = astronaut.name

    // to the preexisting ul
    document.getElementById("astropeeps").appendChild(listAstro)
  })
}

// fetch here

document.getElementById('ajax').addEventListener('click', makeFetchHappen)