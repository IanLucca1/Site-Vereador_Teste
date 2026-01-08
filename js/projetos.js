const projetosAndamento = [
  {
    data: "03/09/2025",
    titulo: "PL 490/2025 - Criação do Parque Taiobeiras",
    descricao:
      'Projeto para nomear como "Parque Taiobeiras" a nova área verde urbana localizada no antigo Aterro Sanitário da BR-040, promovendo lazer e qualidade de vida.',
    imagem: "https://placehold.co/400x200/28a745/FFFFFF?text=Meio+Ambiente",
    link: "https://www.cmbh.mg.gov.br/atividade-legislativa/pesquisar-proposicoes/projeto-de-lei/494/2025",
  },
  {
    data: "28/07/2025",
    titulo: "PL 422/2025 - Carteira da Fibromialgia",
    descricao:
      "Institui a Carteira de Identificação para Pessoas com Fibromialgia, garantindo prioridade de atendimento em serviços públicos e privados em Belo Horizonte.",
    imagem: "https://placehold.co/400x200/007bff/FFFFFF?text=Saúde+e+Inclusão",
    link: "https://www.cmbh.mg.gov.br/atividade-legislativa/pesquisar-proposicoes/projeto-de-lei/422/2025",
  },
  {
    data: "25/08/2025",
    titulo: "PL 454/2025 - Nova Lei da Represa da Pampulha",
    descricao:
      "Propõe alterações na legislação que regula o uso da Represa da Pampulha, visando a preservação do patrimônio e o uso consciente pela população.",
    imagem: "https://placehold.co/400x200/6f42c1/FFFFFF?text=Patrimônio+BH",
    link: "https://www.cmbh.mg.gov.br/atividade-legislativa/pesquisar-proposicoes/projeto-de-lei/454/2025",
  },
  {
    data: "18/06/2025",
    titulo: "PL 326/2025 - Organização do Cadastro da Saúde de BH",
    descricao:
      "Dispõe sobre a exclusão de usuário munícipe no cadastro do SISREDE (SUS-BH) na cidade de Belo Horizonte.",
    imagem:
      "https://placehold.co/400x200/ffc107/000000?text=Legislação+e+Direitos",
    link: "https://www.cmbh.mg.gov.br/atividade-legislativa/pesquisar-proposicoes/projeto-de-lei/326/2025",
  },
  {
    data: "22/08/2025",
    titulo: "PL 494/2025 Novas Linhas de Ônibus",
    descricao:
      "Projeto para a criação de duas novas linhas de ônibus para atender aos bairros mais afastados.",
    imagem: "https://placehold.co/400x200/fd7e14/FFFFFF?text=Transporte",
    link: "#",
  },
  // Adicione mais projetos aqui...
];

const projetosAprovados = [
  {
    data: "13/08/2025",
    titulo: "Lei da Corrida de Rolimã (PL 76/2025)",
    descricao:
      "Reconhece a Corrida de Rolimã como prática esportiva oficial na cidade de Belo Horizonte. Sancionada como Lei Nº 11.886/2025.",
    imagem: "https://placehold.co/400x200/e83e8c/FFFFFF?text=Esporte+e+Lazer",
    link: "#",
  },
  {
    data: "18/01/2025",
    titulo: "Lei do Dia dos Profissionais da Beleza (PL 1008/2024)",
    descricao:
      'Altera a legislação municipal para instituir o "Dia dos Profissionais da Beleza" a ser comemorado em 18 de junho. Sancionada como Lei Nº 11.824/2025.',
    imagem: "https://placehold.co/400x200/6f42c1/FFFFFF?text=Cultura+e+Eventos",
    link: "#",
  },
  {
    data: "07/03/2024",
    titulo: "Lei de Denominação da Rua Montaltino (PL 755/2023)",
    descricao:
      "Dá o nome de Rua Montaltino à antiga Rua Quatro Mil e Cinco, localizada no Bairro Pindorama. Sancionada como Lei Nº 11.662/2024.",
    imagem: "https://placehold.co/400x200/6c757d/FFFFFF?text=Urbanismo",
    link: "#",
  },
];

function popularCarrossel(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`
  );
  if (!swiperWrapper) return; // Se não encontrar o elemento, para a execução

  let slidesHTML = "";

  dados.forEach((projeto) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="slide-imagem">
          <img src="${projeto.imagem}" alt="${projeto.titulo}">
        </div>
        <div class="slide-conteudo">
          <small>${projeto.data}</small>
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <a href="${projeto.link}" target="_blank">Ver Detalhes</a>
        </div>
      </div>
    `;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

popularCarrossel(".projetos-andamento-swiper", projetosAndamento);
popularCarrossel(".projetos-aprovados-swiper", projetosAprovados);

const swiperAndamento = new Swiper(".projetos-andamento-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
  pagination: {
    el: ".projetos-andamento-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".projetos-andamento-swiper .swiper-button-next",
    prevEl: ".projetos-andamento-swiper .swiper-button-prev",
  },
});

const swiperAprovados = new Swiper(".projetos-aprovados-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
  pagination: {
    el: ".projetos-aprovados-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".projetos-aprovados-swiper .swiper-button-next",
    prevEl: ".projetos-aprovados-swiper .swiper-button-prev",
  },
});

function voltarPagina(event) {

  if (window.history.length > 1) {
    event.preventDefault();
    window.history.back(); 
  }

}
