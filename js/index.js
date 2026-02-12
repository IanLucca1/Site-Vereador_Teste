// Dados de exemplo (textos resumidos: 3–4 linhas)
const Noticias = [
  {
    data: "Fev 06, 2026",
    titulo: "Cuidar da saúde é cuidar de pessoas 🏥💙",
    text: "Investir em saúde pública é cuidar de pessoas, fortalecer comunidades e garantir dignidade para todos. Seguimos trabalhando por mais acesso, mais estrutura e mais cuidado com quem mais precisa.",
    link: "https://www.instagram.com/p/DUl7HzYCR6y/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 07, 2026",
    titulo: "Obras do Novo Centro de Saúde 🏥🚧",
    text: "Uma conquista que começa a sair do papel e vira cuidado de verdade. O novo Centro de Saúde está ganhando uma estrutura mais moderna e avançada, garantindo mais conforto, comodidade e dignidade para a população e colaboradores, além de mais qualidade no atendimento para quem mais precisa.",
    link: "https://www.instagram.com/p/DUbjCywguVW/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 05, 2026",
    titulo: "Entrevista no Café com Política ☕🎙️",
    text: "José Ferreira participou de um bate-papo especial no programa Café com Política, onde falou sobre sua trajetória, os desafios do caminho e o propósito que guia seu trabalho diário em defesa da cidade e da população. O momento reforça a importância do diálogo, da escuta e da construção coletiva.",
    link: "https://www.instagram.com/p/DUWaz7KFRB6/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 02, 2026",
    titulo: "Nova Unidade de Saúde Elza Martins 🏥",
    text: "Após indicações do mandato e mobilização da comunidade, teve início a obra da nova Unidade de Saúde Elza Martins, um avanço importante para o atendimento em Belo Horizonte.",
    link: "https://www.instagram.com/p/DUQnDulgt-e/",
    linkname: "@Instagram",
  },
  {
    data: "Jan 22, 2026",
    titulo:
      "Revitalização da Praça Maria Helena da Fonseca, em Belo Horizonte 🏗️🧹",
    text: "A revitalização da Praça Maria Helena da Fonseca, no bairro São João Batista, vai transformar o espaço em um local mais agradável e seguro. As melhorias incluem infraestrutura, paisagismo e áreas de lazer, fortalecendo a convivência e o bem-estar da comunidade.",
    link: "https://www.instagram.com/p/DT01nyUlW74/",
    linkname: "@insta",
  },
  {
    data: "Jan 11, 2026",
    titulo: "Trabalho que não para, nem durante o recesso. 🧹🏙️",
    text: "Mesmo durante o recesso, seguimos acompanhando as demandas da população. O gabinete continua em funcionamento, recebendo pedidos e encaminhando à Prefeitura de Belo Horizonte, com o compromisso de trabalhar por uma cidade melhor.",
    link: "https://www.instagram.com/joseferreira.projetoajudai/reel/DTWDoPYgrBY/",
    linkname: "@insta",
  },
  {
    data: "Dez 22, 2025",
    titulo: "Parque aterro pra um parque de lazer. 🌳",
    text: "Onde antes não havia nada, agora nasce um novo espaço para a cidade. Um projeto que transforma uma área degradada em oportunidade, sustentabilidade e mais qualidade de vida para Belo Horizonte.",
    link: "https://www.instagram.com/p/DSlH5SQDhMF/",
    linkname: "@insta",
  },
  {
    data: "Dez 10, 2025",
    titulo: "Projeto Ajudai recebe o Grande Colar na Câmara Municipal. 🎖️",
    text: "O Projeto Ajudai foi homenageado com o Grande Colar na Câmara Municipal de BH, concedido ao vereador José Ferreira. Reconhecimento pelo impacto social na vida de tantas famílias, com propósito e compromisso com o próximo.",
    link: "https://www.instagram.com/p/DSEGwswEeRu/",
    linkname: "@insta",
  },
  {
    data: "Nov 20, 2025",
    titulo:
      "Sancionada a Carteira de Identificação da Pessoa Acometida pela Fibromialgia. 💙",
    text: "Foi publicada no Diário Oficial do Município a Lei 11.924, de 18 de novembro de 2025. Resultado do nosso PL nº 422/2025, a lei institui a Carteira de Identificação da Pessoa Acometida pela Fibromialgia em BH.",
    link: "https://www.instagram.com/p/DRR5hNvjTFy/",
    linkname: "@insta",
  },
  {
    data: "Nov 18, 2025",
    titulo: "Visitas aos Centros de Saúde da Pampulha. 🏥💙",
    text: "Visitei centros de saúde da Região Pampulha, conversando com profissionais e usuários e observando a rotina das equipes. Identificamos necessidades de manutenção e modernização, guiando novos encaminhamentos e ações para fortalecer o SUS.",
    link: "https://www.instagram.com/p/DRNm1nvgUJq/",
    linkname: "@insta",
  },
];

// Função para popular o carrossel com os dados
function popularCarrosselNovidades(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`,
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

  autoplay: {
    delay: 5000, // 5 segundos é o tempo ideal para leitura desses textos
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pausa o movimento quando o mouse estiver em cima
  },

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
