// Dados de exemplo (sem repetição)
const Noticias = [
    {
        data: "Set 06, 2025",
        titulo: "Entrevista no Jornal O Tempo",
        text: "Hoje participei do Café com Política, no Jornal O Tempo. A pauta principal foi a saúde de Belo Horizonte, falando sobre os desafios e o compromisso do nosso mandato em lutar por uma saúde mais justa e de qualidade. 🏥💙",
        link: "https://www.instagram.com/reel/DOPESDagUNu/?igsh=MW9heHE4Zm5laTMzMg==",
        linkname: "@otempo"
    },
    {
        data: "Set 05, 2025",
        titulo: "💧🚧  Mais uma Conquista na Drenagem",
        text: "Nosso pedido de aumento da drenagem pluvial na Rua Guararapes foi atendido! Essa melhoria vai reduzir alagamentos e trazer mais segurança para moradores, comerciantes, pedestres e motoristas da região. Seguimos firmes, trabalhando para que as demandas da população virem realidade. 💙",
        link: "https://www.instagram.com/reel/DOMgHYdgSbN/?igsh=ZXU3YmthdjFnejgz",
        linkname: "@insta"
    },
    {
        data: "Set 03, 2025",
        titulo: "Saída da Guarda Municipal!",
        text: "📢 A saída da Guarda Municipal dos Centros de Saúde traz preocupação para todos nós. ❓Como ficaremos com essas mudanças ? Assista ao vídeo completo na íntegra!",
        link: "https://www.instagram.com/joseferreira.projetoajudai/reel/DOHZBcLgbjO/",
        linkname: "@insta"
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