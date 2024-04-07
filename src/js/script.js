const containerProjeto = document.querySelector(".container-projet")
const prevBtn = document.querySelector(".voltar")
const nextBtn = document.querySelector(".proximo")
const cards = document.getElementById("cards")
let contador = document.querySelector(".count")
const btnWhats = document.getElementById("btn-whats")

contador = 1

let slide = [
  {
    "titulo": "Escritorio",
    "image": "/src/img/Escritorio.png",
    "index": 1
  },
  {
    "titulo": "Escritorio 2",
    "image": "/src/img/Escritorio2.png",
    "index": 1
  },
  {
    "titulo": "Suite",
    "image": "/src/img/Suite.png",
    "index": 2
  },
  {
    "titulo": "Suite 1",
    "image": "/src/img/Suite2.png",
    "index": 2
  },
  {
    "titulo": "Suite 2",
    "image": "/src/img/Suite3.png",
    "index": 3
  },
  {
    "titulo": "Sala",
    "image": "/src/img/sala.jpg",
    "index": 3
  }
]

function updateProjetos() {
  cards.innerHTML = ""

  slide.forEach(item => {
    const cardElement = document.createElement("div")
    cardElement.classList.add("card")
    
    if(item.index === contador) {
      cardElement.innerHTML = `
        <img src="${item.image}"/>
        <h2>${item.titulo}</h2>
      `
      cards.appendChild(cardElement)
    }
  })
}

updateProjetos()

function nextSlide() {
  if(contador == (slide.length / 2)) { 
    contador = 1
  } else {
    contador++
  }
  updateProjetos()
}

function prevSlide() {
  if(contador > 1) {
    contador--
  } else {
    contador = Math.floor(slide.length / 2)
  }
  updateProjetos()
}

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

btnWhats.addEventListener("click", function() {
  const message = "Olá, Estou precisando conversar com você!"
  const phone = "63992850579"
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
})

/*
function updateProjetos() { // Função utilizada para criar o elemento html contendo o carrossel de imagens
  cards.innerHTML = ""

  slide.forEach(item => { // Percorre toda a lista para fazer a renderização correta de cada elemento
    const cardElement = document.createElement("div")
    cardElement.classList.add("card")

    if (item.index === slide[contador].index) {
      cardElement.innerHTML = `
        <img src="${item.image}"/>
        <h2>${item.titulo}</h2>
      `
      cards.appendChild(cardElement)
    }
  })
}

updateProjetos()

function nextSlide() {
  contador = (contador + 1) % slide.length; // Avança o contador de forma circular
  updateProjetos()
}

function prevSlide() {
  contador = (contador - 1 + slide.length) % slide.length; // Retrocede o contador de forma circular
  updateProjetos()
}

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)
*/