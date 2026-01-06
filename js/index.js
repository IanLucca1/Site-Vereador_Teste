// Dados de exemplo (sem repetição)
const Noticias = [
   {
  data: "Dez 10, 2025",
  titulo: "Projeto Ajudai recebe o Grande Colar na Câmara Municipal. 🎖️",
  text: "O Projeto Ajudai foi homenageado com o Grande Colar na Câmara Municipal de Belo Horizonte, concedido ao vereador José Ferreira, em reconhecimento ao impacto social do projeto na vida de tantas famílias. Uma iniciativa guiada por propósito, compromisso e cuidado com o próximo.",
  link: "https://www.instagram.com/joseferreira.projetoajudai/",
  linkname: "@insta"
},
  {
    data: "Nov 20, 2025",
    titulo:
      "Sancionada a Carteira de Identificação da Pessoa Acometida pela Fibromialgia. 💙",
    text: "Ontem foi um dia muito importante para Belo Horizonte. Foi publicado no Diário Oficial do Município a Lei 11.924, de 18 de novembro de 2025 — resultado do nosso Projeto de Lei nº 422/2025 — que institui a Carteira de Identificação da Pessoa Acometida pela Fibromialgia.",
    link: "https://www.instagram.com/p/DRR5hNvjTFy/",
    linkname: "@insta",
  },
  {
    data: "Nov 18, 2025",
    titulo: "Visitas aos Centros de Saúde da Pampulha. 🏥💙",
    text: "Durante minhas visitas aos centros de saúde da Região Pampulha, conversei com profissionais e usuários, observei a rotina das equipes e identifiquei necessidades de manutenção e modernização das unidades. Essas observações estão guiando novos encaminhamentos e reforçando meu compromisso em buscar melhorias reais para o SUS.",
    link: "https://www.instagram.com/p/DRNm1nvgUJq/",
    linkname: "@insta",
  },
  {
    data: "Dez 22, 2025",
    titulo: "Parque aterro pra um parque de lazer. 🌳",
    text: "Onde antes não havia nada, agora nasce um novo espaço para a cidade.\n\n Um projeto que transforma uma área degradada em oportunidade, sustentabilidade e qualidade de vida para Belo Horizonte. ",
    link: "https://www.instagram.com/p/DSlH5SQDhMF/",
    linkname: "@insta",
  }
  
 
];

// Função para popular o carrossel com os dados
function popularCarrosselNovidades(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`
  );
  if (!swiperWrapper) return;

  let slidesHTML = "";
  dados.forEach((noticia) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="novidade-card">  <small>${noticia.data}</small>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.text}</p>
            <br/>
            <a href="${noticia.link}" target="_blank" class="links-noticias">${noticia.linkname}</a>
        </div>
      </div>`;
  });

  swiperWrapper.innerHTML = slidesHTML;
}


// Chamar a função para criar os cards
popularCarrosselNovidades(".swiper-novidade", Noticias);

// Inicializar o Swiper
const novidadesSwiper = new Swiper(".swiper-novidade", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-novidade .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-novidade .swiper-button-next",
    prevEl: ".swiper-novidade .swiper-button-prev",
  },
});


// Carrossel automático simples
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carousel = document.querySelector(".carousel");

let currentIndex = 0;
const AUTO_INTERVAL = 5000;
let autoTimer = null;

function showSlide(index) {
  if (!slides || slides.length === 0) return;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  currentIndex = index;
}

function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function startAutoPlay() {
  stopAutoPlay();
  autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
}

function stopAutoPlay() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

function resetAutoPlay() {
  startAutoPlay();
}

// adiciona listeners com checagem
if (prevBtn)
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });
if (nextBtn)
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

// pausar ao hover/focus
if (carousel) {
  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);
  carousel.addEventListener("focusin", stopAutoPlay);
  carousel.addEventListener("focusout", startAutoPlay);
}

// teclas
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    resetAutoPlay();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
    resetAutoPlay();
  }
});

// suporte touch (swipe)
(function addTouchSwipe() {
  if (!carousel) return;
  let startX = 0,
    endX = 0;
  carousel.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
    stopAutoPlay();
  });
  carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
    startAutoPlay();
  });
})();

// inicializa
showSlide(currentIndex);
startAutoPlay();
