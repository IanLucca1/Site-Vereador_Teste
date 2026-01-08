// Dados da Câmara
const NoticiasCamera = [
  {
    data: "Dez 15, 2025",
    titulo: "Programa Municipal de Incentivo à Telessaúde é aprovado em definitivo",
    text: "A Câmara Municipal de Belo Horizonte lançou a campanha “Futuro”, destacando leis aprovadas em 2025 voltadas à inclusão. Entre elas, a Lei 11.924/2025, de autoria do vereador José Ferreira, que cria a Carteira de Identificação das Pessoas com Fibromialgia e garante prioridade de atendimento.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/legislativo-lan%C3%A7a-campanha-institucional-sobre-inclus%C3%A3o-e-futuro",
    linkname: "Conheça o Projeto",
  },
  {
    data: "Dez 10, 2025",
    titulo: "Qualificação da Atenção Primária por meio de PPP em debate nesta quarta (3)",
    text: "A Câmara Municipal de Belo Horizonte promoveu, em 10 de dezembro, audiência pública sobre o Transtorno do Desenvolvimento da Linguagem (TDL), condição que atinge cerca de 7,5% da população e ainda é pouco reconhecida no Brasil. O debate reuniu especialistas da saúde e da educação e reforçou a necessidade de ampliar políticas públicas voltadas ao diagnóstico precoce, tratamento adequado e inclusão social.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/transtorno-do-desenvolvimento-da-linguagem-%C3%A9-desafio-para-fam%C3%ADlias",
    linkname: "Conheça o projeto",
  },
  {
    data: "Dez 09, 2025",
    titulo: "Incentivo à telemedicina pode ser votado em 2º turno nesta quarta (10)",
    text: "O PL 296/2025, que institui o Programa Municipal de Telemedicina em Belo Horizonte, entrou na pauta do Plenário no dia 9 de dezembro. Entre os autores da proposta está o vereador José Ferreira, e o texto prevê consultas remotas gratuitas para usuários do SUS.",
    link: "https://www.cmbh.mg.gov.br/comunicação/notícias/2025/12/incentivo-à-telemedicina...",
    linkname: "Leia a ata da reunião",
  },
  {
    data: "Dez 03, 2025",
    titulo: "Trabalhadores de centros de saúde pedem equipamentos e reforma",
    text: "Em audiência pública realizada no dia 3 de dezembro, a Comissão de Saúde e Saneamento da Câmara Municipal de Belo Horizonte discutiu problemas estruturais dos novos centros de saúde construídos por meio de Parceria Público-Privada (PPP). Solicitante do encontro, o vereador José Ferreira cobrou da Prefeitura melhorias nos consultórios, salas de vacina, farmácias e acessibilidade, com base em visitas realizadas a todas as unidades da capital.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/trabalhadores-de-centros-de-sa%C3%BAde-pedem-equipamentos-e-reforma-em",
    linkname: "Conheça o Projeto",
  },
  {
    data: "Dez 02, 2025",
    titulo: "José Ferreira solicita audiência para debater melhorias na Atenção Primária via PPP",
    text: "A Comissão de Saúde e Saneamento da Câmara Municipal de Belo Horizonte realiza audiência pública para discutir a qualificação da Atenção Primária por meio de Parceria Público-Privada (PPP) e sua ampliação na rede SUS-BH. Solicitante do encontro, o vereador José Ferreira destacou a necessidade de melhorias estruturais, aquisição de equipamentos e reforço no número de profissionais.",
    link: "https://www.cmbh.mg.gov.br/comunica%C3%A7%C3%A3o/not%C3%ADcias/2025/12/qualifica%C3%A7%C3%A3o-da-aten%C3%A7%C3%A3o-prim%C3%A1ria-por-meio-de-ppp-em-debate-nesta-quarta",
    linkname: "Conheça o Projeto",
  },
];

// Popular o carrossel
function popularCarrosselCamera(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`
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
  direction: "vertical",
  mousewheel: true,
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Configuração padrão (Celular)
  slidesPerView: 2,
  spaceBetween: 10,

  // Configuração para Tablet e PC
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});