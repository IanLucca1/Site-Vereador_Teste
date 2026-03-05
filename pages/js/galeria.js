const fotos = [
  { titulo: "Visita ao CS Bom Jesus ", imagem: "../img/CS_BomJesus/teste1.jpg" },
  { titulo: "Visita ao CS California", imagem: "../img/CS_California/teste2.jpg" },
  { titulo: "Comissão Especial", imagem: "../img/ComissaoEspecial/teste3.jpg" },
  { titulo: "Visita ao CS Dom Cabral", imagem: "../img/CS_DomCabral/teste5.jpg" },
  { titulo: "Visita ao CS Ermelinda", imagem: "../img/CS_Ermelinda/teste4.jpg" },
  { titulo: "Visita ao CS Dom Cabral", imagem: "../img/CS_DomCabral/teste6.jpg" }
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