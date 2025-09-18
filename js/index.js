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




  const slides = document.querySelectorAll(".slide");
      const prevBtn = document.getElementById("prev");
      const nextBtn = document.getElementById("next");
      const carousel = document.querySelector(".carousel");

      let currentIndex = 0;
      const AUTO_INTERVAL = 5000;
      let autoTimer = null;

      function showSlide(index) {
        if (!slides || slides.length === 0) return;
        slides.forEach((slide, i) =>
          slide.classList.toggle("active", i === index)
        );
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