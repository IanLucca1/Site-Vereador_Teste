const EmendasParlamentares = [
  {
    imagem: "https://placehold.co/600x400/007bff/white?text=Saúde",
    titulo: "Reforma do Posto de Saúde Vida Nova",
    descricao:
      "R$ 350.000,00 para a modernização da estrutura e compra de novos equipamentos, garantindo um atendimento mais digno para a comunidade.",
    data: "15/07/2025",
  },
  {
    imagem: "https://placehold.co/600x400/28a745/white?text=Educação",
    titulo: "Kit de Robótica para Escolas Municipais",
    descricao:
      "R$ 120.000,00 investidos na aquisição de kits de robótica para 5 escolas, incentivando o aprendizado de tecnologia para os jovens.",
    data: "22/05/2025",
  },
  {
    imagem: "https://placehold.co/600x400/ffc107/white?text=Infraestrutura",
    titulo: "Pavimentação da Rua das Flores",
    descricao:
      "R$ 500.000,00 destinados ao asfaltamento e instalação de drenagem na Rua das Flores, um pedido antigo dos moradores do Bairro Esperança.",
    data: "10/02/2025",
  },
  {
    imagem: "https://placehold.co/600x400/fd7e14/white?text=Esporte",
    titulo: "Revitalização da Quadra do Bairro Industrial",
    descricao:
      "R$ 95.000,00 para a reforma completa da quadra poliesportiva, incluindo nova pintura, alambrados e iluminação de LED para uso noturno.",
    data: "30/11/2024",
  },
  {
    imagem: "https://placehold.co/600x400/6f42c1/white?text=Cultura",
    titulo: "Apoio ao Festival de Arte de Rua",
    descricao:
      "R$ 50.000,00 de incentivo para a realização do festival anual de arte e cultura, apoiando artistas locais e promovendo o lazer na cidade.",
    data: "05/09/2025",
  },
  {
    imagem: "https://placehold.co/600x400/dc3545/white?text=Ação+Social",
    titulo: "Campanha do Agasalho Comunitária",
    descricao:
      "R$ 30.000,00 para a compra de cobertores e agasalhos distribuídos para a população em situação de rua durante o período de inverno.",
    data: "28/04/2025",
  },
];

// Função para popular o carrossel de emendas parlamentares
function popularCarrosselEmendas(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`
  );
  // Se não encontrar o elemento, para a execução
  if (!swiperWrapper) return;

  let slidesHTML = "";
  dados.forEach((emenda) => {

    slidesHTML += `
      <div class="swiper-slide">
        <div class="emenda-card">
            <img
              src="${emenda.imagem}"
              alt="${emenda.titulo}"
            />
            <div class="card-content">
              <h4>${emenda.titulo}</h4>
              <small>${emenda.data}</small>
              <p>
                ${emenda.descricao}
              </p>
            </div>
        </div>
      </div>`;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

// Chamar a função para criar os cards
popularCarrosselEmendas(".swiper-emendas", EmendasParlamentares);


const emendasSwiper = new Swiper(".swiper-emendas", { // Corrigido para "Swiper"
  loop: true,
  slidesPerView: 1, // Começa com 1 slide em telas pequenas
  spaceBetween: 20,

  // Pontos de quebra para telas maiores (efeito de grid)
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 slides para tablets
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3, // 3 slides para desktops
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-emendas .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-emendas .swiper-button-next",
    prevEl: ".swiper-emendas .swiper-button-prev",
  },
});