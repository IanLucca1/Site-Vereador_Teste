const NoticiasCamera = [
  {
    data: "Fev 04, 2026",
    titulo: "Comissão de Saúde avança em exames oftalmológicos nas escolas 👁️📚",
    text: "Parecer favorável ao programa Oftalmologia nas Escolas, com exames preventivos gratuitos. José Ferreira também cobrou explicações sobre atrasos nos repasses a hospitais filantrópicos do SUS-BH.",
    link: "https://www.cmbh.mg.gov.br/",
    linkname: "Leia a matéria completa",
  },
  {
    data: "Jan 21, 2026",
    titulo: "José Ferreira lidera fiscalização da saúde em BH",
    text: "Em 2025, foi o parlamentar com mais visitas técnicas aprovadas (260). As ações incluíram fiscalizações em centros de saúde, unidades especializadas e hospitais, apontando falhas e falta de insumos.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2026/01/vereadores-aprovam-mais-de-duas-mil-visitas-tecnicas-em-2025",
    linkname: "Leia a matéria completa",
  },
  {
    data: "Dez 15, 2025",
    titulo: "Telessaúde: projeto é aprovado em definitivo",
    text: "Campanha “Futuro” destaca leis de inclusão aprovadas em 2025. Entre elas, a Lei 11.924/2025, que cria a carteira de identificação para pessoas com fibromialgia e prioriza atendimento.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/legislativo-lan%C3%A7a-campanha-institucional-sobre-inclus%C3%A3o-e-futuro",
    linkname: "Conheça o Projeto",
  },
  {
    data: "Dez 10, 2025",
    titulo: "Audiência debate TDL e políticas de diagnóstico e inclusão (3)",
    text: "Audiência pública discutiu o Transtorno do Desenvolvimento da Linguagem (TDL) e reforçou a importância de diagnóstico precoce, tratamento adequado e políticas de inclusão.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/transtorno-do-desenvolvimento-da-linguagem-%C3%A9-desafio-para-fam%C3%ADlias",
    linkname: "Conheça o projeto",
  },
  {
    data: "Dez 09, 2025",
    titulo: "Telemedicina pode ser votada em 2º turno nesta quarta (10)",
    text: "PL 296/2025 entrou na pauta do Plenário. A proposta prevê consultas remotas gratuitas para usuários do SUS e tem José Ferreira entre os autores.",
    link: "https://www.cmbh.mg.gov.br/comunicação/notícias/2025/12/incentivo-à-telemedicina...",
    linkname: "Leia a ata da reunião",
  },
  {
    data: "Dez 03, 2025",
    titulo: "Centros de saúde pedem equipamentos e reforma",
    text: "Audiência discutiu problemas estruturais em centros de saúde construídos via PPP. José Ferreira cobrou melhorias em consultórios, salas de vacina, farmácias e acessibilidade.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/trabalhadores-de-centros-de-sa%C3%BAde-pedem-equipamentos-e-reforma-em",
    linkname: "Conheça o Projeto",
  },
  {
    data: "Dez 02, 2025",
    titulo: "Audiência debate melhorias na Atenção Primária via PPP",
    text: "Comissão de Saúde discute qualificação da Atenção Primária por PPP e ampliação na rede SUS-BH. José Ferreira destacou necessidade de estrutura, equipamentos e mais profissionais.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/qualifica%C3%A7%C3%A3o-da-aten%C3%A7%C3%A3o-prim%C3%A1ria-por-meio-de-ppp-em-debate-nesta-quarta",
    linkname: "Conheça o Projeto",
  },
];


// Popular o carrossel
function popularCarrosselCamera(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`,
  );
  if (!swiperWrapper) return;

  let slidesHTML = "";
  dados.forEach((noticia) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="novidade-card">
          <small>${noticia.data}</small>
          <h3>${noticia.titulo}</h3>
          <p>${noticia.text}</p>
          <br/>
          <a href="${noticia.link}" target="_blank" class="links-noticias">
            ${noticia.linkname}
          </a>
        </div>
      </div>`;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

popularCarrosselCamera(".swiper-camera", NoticiasCamera);

// Inicializa o Swiper
const novidadesSwiper = new Swiper(".swiper-camera", {
  // MOBILE (padrão)
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  mousewheel: false,

  pagination: {
    el: ".swiper-camera .swiper-pagination",
    clickable: true,
  },

  // TABLET/PC
  breakpoints: {
  769: {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    mousewheel: {
      enabled: true,
      forceToAxis: true,
      releaseOnEdges: true,
      sensitivity: 1,
    },
  },
},
});


function syncSwiperOnResize(swiper) {
  if (!swiper || swiper.destroyed) return;

  swiper.update();
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  if (swiper.mousewheel) {
    if (isDesktop) {
      swiper.mousewheel.enable();
    } else {
      swiper.mousewheel.disable();
    }
  }
}

// quando mudar tamanho / emulação
window.addEventListener("resize", () => {
  syncSwiperOnResize(novidadesSwiper);
});

window.addEventListener("orientationchange", () => {
  syncSwiperOnResize(novidadesSwiper);
});

// garante estado correto no carregamento
syncSwiperOnResize(novidadesSwiper);