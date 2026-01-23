// Dados de exemplo (organizados e padronizados)
const Noticias = [
  {
    data: "Jan 22, 2026",
    titulo: "Revitalização da Praça Maria Helena da Fonseca, em Belo Horizonte 🏗️🧹",
    text: "A revitalização da Praça Maria Helena da Fonseca, localizada no bairro São João Batista, em Belo Horizonte, é um projeto que visa transformar esse espaço público em um local mais agradável, seguro e funcional para a comunidade. Com melhorias na infraestrutura, paisagismo e áreas de lazer, a praça se tornará um ponto de encontro para moradores e visitantes, promovendo a convivência social e o bem-estar.",
    link: "https://www.instagram.com/p/DT01nyUlW74/",
    linkname: "@insta",
  },
  {
    data: "Jan 11, 2026",
    titulo: "Trabalho que não para, nem durante o recesso. 🧹🏙️",
    text: "Mesmo durante o período de férias, seguimos acompanhando de perto as demandas da população. O gabinete parlamentar continua em funcionamento, recebendo pedidos da comunidade e encaminhando à Prefeitura de Belo Horizonte, sempre com o compromisso de trabalhar por uma cidade melhor.",
    link: "https://www.instagram.com/joseferreira.projetoajudai/reel/DTWDoPYgrBY/",
    linkname: "@insta",
  },
  {
    data: "Dez 22, 2025",
    titulo: "Parque aterro pra um parque de lazer. 🌳",
    text: "Onde antes não havia nada, agora nasce um novo espaço para a cidade.\n\n Um projeto que transforma uma área degradada em oportunidade, sustentabilidade e qualidade de vida para Belo Horizonte.",
    link: "https://www.instagram.com/p/DSlH5SQDhMF/",
    linkname: "@insta",
  },
  {
    data: "Dez 10, 2025",
    titulo: "Projeto Ajudai recebe o Grande Colar na Câmara Municipal. 🎖️",
    text: "O Projeto Ajudai foi homenageado com o Grande Colar na Câmara Municipal de Belo Horizonte, concedido ao vereador José Ferreira, em reconhecimento ao impacto social do projeto na vida de tantas famílias. Uma iniciativa guiada por propósito, compromisso e cuidado com o próximo.",
    link: "https://www.instagram.com/p/DSEGwswEeRu/",
    linkname: "@insta",
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
    data: "Ago 25, 2025",
    titulo: "Visita Técnica no bairro Santo Antônio 📍🏥",
    text: "Atendendo à solicitação dos moradores, realizamos uma visita técnica (na Rua Deputado Álvaro Sales) para ouvir de perto as demandas da comunidade e buscar soluções para melhorar a qualidade de vida de todos. 💛✨ O diálogo aberto com a população é essencial para construir uma cidade mais justa e eficiente.",
    link: "https://www.instagram.com/p/DNytTDMQt8A/",
    linkname: "@insta",
  },
  {
    data: "Jul 20, 2025",
    titulo: "Visita técnica onde o povo precisa! 💙🏥",
    text: "Passei pelos Centros de Saúde dos bairros Vale do Jatobá, Petrópolis e Independência, acompanhando de perto a realidade de cada unidade. Ouvir a população e fiscalizar as condições de atendimento é meu dever como presidente da Comissão de Saúde da Câmara de BH. Saúde pública se faz com presença, escuta e ação.",
    link: "https://www.instagram.com/p/DL3OAfax_Qt/",
    linkname: "@insta",
  },
  {
    data: "Jul 11, 2025",
    titulo: "Revitalização da Rua Rio Petrópolis em andamento! 🏗️🚧",
    text: "Estamos trabalhando para transformar a mobilidade, segurança e qualidade de vida da comunidade. Acompanhe o progresso, compartilhe essa conquista e continue nos ajudando a construir uma cidade melhor para todos!",
    link: "https://www.instagram.com/p/DL-1fPIxpzT/",
    linkname: "@insta",
  },
  {
    data: "Jul 08, 2025",
    titulo: "Encerramos mais uma etapa importante! 🏥✅",
    text: "As visitas técnicas aos centros de saúde foram finalizadas com responsabilidade e compromisso. Seguimos atentos a cada detalhe para garantir um atendimento de qualidade para a população. ✅ Missão cumprida, mas o trabalho continua!",
    link: "https://www.instagram.com/p/DL3OAfax_Qt/",
    linkname: "@insta",
  },
  {
    data: "Jun 06, 2025",
    titulo: "Visita Técnica da Saúde nos bairros Cinquentenário e Betânia 🩵🏥",
    text: "Realizei visitas técnicas na área da saúde nos bairros Cinquentenário, Betânia e Conjunto Betânia. Como presidente da Comissão de Saúde da Câmara Municipal de BH, acompanho de perto as condições das unidades para garantir uma saúde pública mais digna e eficiente para a população. Seguimos juntos!",
    link: "https://www.instagram.com/p/DKkts7JxF3U/",
    linkname: "@insta",
  },
  {
    data: "Mai 21, 2025",
    titulo:
      "Visita técnica aos centros de saúde nos bairros Vera Cruz, Alto Vera Cruz e Granja de Freitas ❤️🏥",
    text: "Passamos pelos bairros Vera Cruz, Alto Vera Cruz e Granja de Freitas para conferir de perto a situação dos centros de saúde. Ouvir quem está na ponta, ver o que precisa mudar e cobrar soluções é parte do meu trabalho e eu faço questão de estar presente. BH só melhora quando a gente encara os problemas de frente.",
    link: "https://www.instagram.com/p/DJ63u9pAS8t/",
    linkname: "@insta",
  },
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
