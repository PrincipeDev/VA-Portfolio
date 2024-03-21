const containerProjeto = document.querySelector(".container-projet")
const prevBtn = document.querySelector(".voltar")
const nextBtn = document.querySelector(".proximo")
const cards = document.getElementById("cards")
const contador = document.querySelector(".count")

let slide = [
  {
    "titulo": "Escritorio",
    "image": "../img/1-Escritorio2.png"
  },
  {
    "titulo": "Escritorio 2",
    "image": "../img/2-Escritorio2.png"
  },
  {
    "titulo": "Suite",
    "image": "../img/3-Suite.png"
  },
  {
    "titulo": "Suite 1",
    "image": "../img/4-Suite.png"
  },
  {
    "titulo": "Suite 2",
    "image": "../img/5-Suite.png"
  }
]

function updateProjetos() {
  cards.innerHTML = ""

  slide.forEach(item => {
    const card = document.createElement("div")
    card.classList.add("card")
    
    card.innerHTML = `
      <div>
        <img src:"${item.image}"/>
        <h2>${item.titulo}</h2>
      </div>
    `

    cards.appendChild(card)
  })
}

updateProjetos()