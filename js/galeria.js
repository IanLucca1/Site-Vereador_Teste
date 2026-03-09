const fotos = [
  // ComissaoEspecial
  { titulo: "Visita ao Comissao Especial", imagem: "../img/ComissaoEspecial/comissaoEspecial.jpg" },
  { titulo: "Visita ao Comissao Especial", imagem: "../img/ComissaoEspecial/teste3.jpg" },

  // CS_BomJesus
  { titulo: "Visita ao CS BomJesus", imagem: "../img/CS_BomJesus/bomJesus1.jpg" },
  { titulo: "Visita ao CS BomJesus", imagem: "../img/CS_BomJesus/bomJesus2.jpg" },
  { titulo: "Visita ao CS BomJesus", imagem: "../img/CS_BomJesus/bomJesus3.jpg" },
  { titulo: "Visita ao CS BomJesus", imagem: "../img/CS_BomJesus/teste1.jpg" },

  // CS_California
  { titulo: "Visita ao CS California", imagem: "../img/CS_California/california1.jpg" },
  { titulo: "Visita ao CS California", imagem: "../img/CS_California/california2.jpg" },
  { titulo: "Visita ao CS California", imagem: "../img/CS_California/california3.jpg" },
  { titulo: "Visita ao CS California", imagem: "../img/CS_California/teste2.jpg" },

  // CS_DomCabral
  { titulo: "Visita ao CS DomCabral", imagem: "../img/CS_DomCabral/domCabral1.jpg" },
  { titulo: "Visita ao CS DomCabral", imagem: "../img/CS_DomCabral/domCabral2.jpg" },
  { titulo: "Visita ao CS DomCabral", imagem: "../img/CS_DomCabral/teste5.jpg" },
  { titulo: "Visita ao CS DomCabral", imagem: "../img/CS_DomCabral/teste6.jpg" },
  { titulo: "Visita ao CS DomCabral", imagem: "../img/CS_DomCabral/domCabral3.jpg" },

  // CS_Ermelinda
  { titulo: "Visita ao CS Ermelinda", imagem: "../img/CS_Ermelinda/Ermelinda1.jpg" },
  { titulo: "Visita ao CS Ermelinda", imagem: "../img/CS_Ermelinda/Ermelinda2.jpg" },
  { titulo: "Visita ao CS Ermelinda", imagem: "../img/CS_Ermelinda/Ermelinda3.jpg" },
  { titulo: "Visita ao CS Ermelinda", imagem: "../img/CS_Ermelinda/teste4.jpg" },
  { titulo: "Visita ao CS Ermelinda", imagem: "../img/CS_Ermelinda/Ermelinda4.jpg" },
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