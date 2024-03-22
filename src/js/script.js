const containerProjeto = document.querySelector(".container-projet")
const prevBtn = document.querySelector(".voltar")
const nextBtn = document.querySelector(".proximo")
const cards = document.getElementById("cards")
let contador = document.querySelector(".count")

contador = 0

let slide = [
  {
    "titulo": "Escritorio",
    "image": "../img/1-Escritorio2.png",
    "index": 0
  },
  {
    "titulo": "Escritorio 2",
    "image": "../img/2-Escritorio2.png",
    "index": 0
  },
  {
    "titulo": "Suite",
    "image": "../img/3-Suite.png",
    "index": 1
  },
  {
    "titulo": "Suite 1",
    "image": "../img/4-Suite.png",
    "index": 1
  },
  {
    "titulo": "Suite 2",
    "image": "../img/5-Suite.png",
    "index": 2
  }
]

function updateProjetos() {
  cards.innerHTML = ""

  slide.forEach(item => {
    const card = document.createElement("div")
    card.classList.add("card")
    
    card.innerHTML = `
        <img src:"${item.image}"/>
        <h2>${item.titulo}</h2>
    `
    cards.appendChild(card)
  })
}

updateProjetos()
/*
function nextSlide() {
  if(contador === slide.length -1) {
    contador = 0
  } else {
    contador++
  }
  updateProjetos()
}

function prevSlide() {
  if(contador === 0) {
    contador = slide.length -1
  } else {
    contador--
  }
  updateProjetos()
}

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)
*/