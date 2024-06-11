const prevBtn = document.querySelector(".voltar");
const nextBtn = document.querySelector(".proximo");
const cards = document.getElementById("cards");
const btnWhats = document.getElementById("btn-whats");
let contador = 0; // Inicie o contador em 0
let resizeTimer;

let slide = [
  {
    "titulo": "Escritorio",
    "image": "/src/img/Escritorio.png",
    "index": 0
  },
  {
    "titulo": "Lavabo",
    "image": "/src/img/Lavabo.png",
    "index": 1
  },
  {
    "titulo": "Suite Casal White",
    "image": "/src/img/Suite.png",
    "index": 2
  },
  {
    "titulo": "Suite Casal Black",
    "image": "/src/img/Suite2.png",
    "index": 3
  },
  {
    "titulo": "Quarto Casal",
    "image": "/src/img/Quarto1.png",
    "index": 4
  },
  {
    "titulo": "Sala",
    "image": "/src/img/sala.jpg",
    "index": 5
  },
  {
    "titulo": "Escritorio Madeira",
    "image": "/src/img/Escritorio2.png",
    "index": 6
  },
  {
    "titulo": "Modern Suite",
    "image": "/src/img/Suite3.png",
    "index": 7
  },
  {
    "titulo": "Quarto Black",
    "image": "/src/img/Quarto.png",
    "index": 8
  }
];

function atualizarTamanhoDaTela() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    const larguraDaTela = window.innerWidth;

    if (larguraDaTela > 800) {
      paraLarguraMaiorQue800();
    } else {
      paraLarguraMenorIgualA800();
    }
  }, 250);
}

atualizarTamanhoDaTela();
window.addEventListener('resize', atualizarTamanhoDaTela);

function paraLarguraMaiorQue800() {
  function updateProjetos() {
    cards.innerHTML = "";

    if (slide.length % 2 === 0 || contador < slide.length - 1) {
      for (let i = contador; i < contador + 2 && i < slide.length; i++) {
        const item = slide[i];
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
          <img src="${item.image}"/>
          <h2>${item.titulo}</h2>
        `;
        cards.appendChild(cardElement);
      }
    } else {
      const item = slide[contador];
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      cardElement.innerHTML = `
        <img src="${item.image}"/>
        <h2>${item.titulo}</h2>
      `;
      cards.appendChild(cardElement);
    }
  }

  updateProjetos();
}

function paraLarguraMenorIgualA800() {
  function updateProjetos() {
    cards.innerHTML = "";

    slide.forEach(item => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      if (item.index === slide[contador].index) {
        cardElement.innerHTML = `
          <img src="${item.image}"/>
          <h2>${item.titulo}</h2>
        `;
        cards.appendChild(cardElement);
      }
    });
  }

  updateProjetos();
}

function nextSlide() {
  const larguraDaTela = window.innerWidth;
  if (larguraDaTela > 800) {
    contador += 2;
    if (contador >= slide.length) {
      contador = 0;
    }
  } else {
    contador = (contador + 1) % slide.length;
  }
  atualizarTamanhoDaTela();
}

function prevSlide() {
  const larguraDaTela = window.innerWidth;
  if (larguraDaTela > 800) {
    if (contador > 0) {
      contador -= 2;
    } else {
      contador = slide.length - 2;
    }
  } else {
    contador = (contador - 1 + slide.length) % slide.length;
  }
  atualizarTamanhoDaTela();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

btnWhats.addEventListener("click", function() {
  const message = "Olá, Estou precisando conversar com você!";
  const phone = "63992850579";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});
