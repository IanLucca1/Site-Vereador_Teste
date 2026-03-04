const fotos = [
  { titulo: "Visita ao Hospital", imagem: "../img/img_Jose.jpg" },
  { titulo: "Evento Público", imagem: "../img/img_Jose.jpg" },
  { titulo: "Reunião com Comunidade", imagem: "../img/img_Jose.jpg" },
  { titulo: "Inauguração de Projeto", imagem: "../img/img_Jose.jpg" },
  { titulo: "Ação Social", imagem: "../img/img_Jose.jpg" },
  { titulo: "Entrega de Benefícios", imagem: "../img/img_Jose.jpg" }
];

function renderGaleria() {
  const galeria = document.getElementById("galeria");

  if (!galeria) return;

  galeria.innerHTML = "";

  fotos.forEach(foto => {
    const card = document.createElement("div");
    card.classList.add("galeria-card");

    card.innerHTML = `
      <img src="${foto.imagem}" alt="${foto.titulo}" loading="lazy">
      <div class="galeria-info">
        <h3>${foto.titulo}</h3>
      </div>
    `;

    galeria.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderGaleria);