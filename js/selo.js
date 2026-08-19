const fotoInput = document.getElementById("fotoInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const selo = new Image();
selo.src = "/img/selo.png";

const foto = new Image();

let fotoCarregada = false;
let seloCarregado = false;

// CONFIGURAÇÕES

const TAMANHO_CANVAS = 1080;

let posX = 0;
let posY = 0;

let escala = 1;

const ESCALA_MINIMA = 0.1;
const ESCALA_MAXIMA = 5;

let arrastando = false;

let ultimoX = 0;
let ultimoY = 0;

// TOUCH / POINTER

const ponteiros = new Map();

let distanciaInicial = null;
let escalaInicial = 1;

// CANVAS

canvas.width = TAMANHO_CANVAS;
canvas.height = TAMANHO_CANVAS;

// CARREGAMENTO DO SELO

selo.onload = function () {
  seloCarregado = true;

  desenhar();
};

// ESCOLHER FOTO

fotoInput.addEventListener("change", function () {
  const arquivo = fotoInput.files[0];

  if (!arquivo) {
    return;
  }

  const url = URL.createObjectURL(arquivo);

  foto.onload = function () {
    fotoCarregada = true;

    // Centraliza e calcula zoom inicial
    calcularEscalaInicial();

    centralizarFoto();

    desenhar();

    URL.revokeObjectURL(url);
  };

  foto.src = url;
});

// CALCULAR ESCALA INICIAL

function calcularEscalaInicial() {
  const escalaX = TAMANHO_CANVAS / foto.width;
  const escalaY = TAMANHO_CANVAS / foto.height;

  // Usa a maior para garantir que
  // o canvas fique completamente preenchido
  escala = Math.max(escalaX, escalaY);
}

// CENTRALIZAR FOTO

function centralizarFoto() {
  const largura = foto.width * escala;
  const altura = foto.height * escala;

  posX = (TAMANHO_CANVAS - largura) / 2;
  posY = (TAMANHO_CANVAS - altura) / 2;
}

// DESENHAR

function desenhar() {
  if (!fotoCarregada || !seloCarregado) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // FOTO

  const largura = foto.width * escala;
  const altura = foto.height * escala;

  ctx.drawImage(foto, posX, posY, largura, altura);

  // SELO

  ctx.drawImage(selo, 0, 0, TAMANHO_CANVAS, TAMANHO_CANVAS);
}

// LIMITAR POSIÇÃO DA FOTO

function limitarPosicao() {
  const largura = foto.width * escala;
  const altura = foto.height * escala;

  // Limite horizontal

  if (largura <= TAMANHO_CANVAS) {
    posX = (TAMANHO_CANVAS - largura) / 2;
  } else {
    const limiteEsquerdo = TAMANHO_CANVAS - largura;

    const limiteDireito = 0;

    if (posX < limiteEsquerdo) {
      posX = limiteEsquerdo;
    }

    if (posX > limiteDireito) {
      posX = limiteDireito;
    }
  }

  // Limite vertical

  if (altura <= TAMANHO_CANVAS) {
    posY = (TAMANHO_CANVAS - altura) / 2;
  } else {
    const limiteSuperior = TAMANHO_CANVAS - altura;

    const limiteInferior = 0;

    if (posY < limiteSuperior) {
      posY = limiteSuperior;
    }

    if (posY > limiteInferior) {
      posY = limiteInferior;
    }
  }
}

// MOUSE / TOUCH

canvas.addEventListener("pointerdown", function (evento) {
  ponteiros.set(evento.pointerId, evento);

  canvas.setPointerCapture(evento.pointerId);

  if (ponteiros.size === 1) {
    arrastando = true;

    ultimoX = evento.clientX;
    ultimoY = evento.clientY;
  }

  if (ponteiros.size === 2) {
    arrastando = false;

    const pontos = Array.from(ponteiros.values());

    distanciaInicial = calcularDistancia(pontos[0], pontos[1]);

    escalaInicial = escala;
  }
});

// MOVIMENTO

canvas.addEventListener("pointermove", function (evento) {
  if (!ponteiros.has(evento.pointerId)) {
    return;
  }

  ponteiros.set(evento.pointerId, evento);

  // DOIS DEDOS = ZOOM

  if (ponteiros.size === 2) {
    const pontos = Array.from(ponteiros.values());

    const distanciaAtual = calcularDistancia(pontos[0], pontos[1]);

    if (distanciaInicial) {
      const fator = distanciaAtual / distanciaInicial;

      escala = escalaInicial * fator;

      limitarEscala();

      limitarPosicao();

      desenhar();
    }

    return;
  }

  // UM DEDO / MOUSE

  if (ponteiros.size === 1 && arrastando) {
    const deltaX = evento.clientX - ultimoX;

    const deltaY = evento.clientY - ultimoY;

    // Converte movimento da tela
    // para o sistema do Canvas

    const fatorCanvas = TAMANHO_CANVAS / canvas.getBoundingClientRect().width;

    posX += deltaX * fatorCanvas;

    posY += deltaY * fatorCanvas;

    ultimoX = evento.clientX;
    ultimoY = evento.clientY;

    limitarPosicao();

    desenhar();
  }
});

// SOLTAR POINTER

canvas.addEventListener("pointerup", finalizarPointer);

canvas.addEventListener("pointercancel", finalizarPointer);

function finalizarPointer(evento) {
  ponteiros.delete(evento.pointerId);

  if (ponteiros.size === 0) {
    arrastando = false;

    distanciaInicial = null;
  }

  if (ponteiros.size === 1) {
    const restante = Array.from(ponteiros.values())[0];

    ultimoX = restante.clientX;
    ultimoY = restante.clientY;

    arrastando = true;
  }
}

// CALCULAR DISTÂNCIA

function calcularDistancia(ponto1, ponto2) {
  const x = ponto2.clientX - ponto1.clientX;

  const y = ponto2.clientY - ponto1.clientY;

  return Math.sqrt(x * x + y * y);
}

// LIMITAR ZOOM

function limitarEscala() {
  if (escala < ESCALA_MINIMA) {
    escala = ESCALA_MINIMA;
  }

  if (escala > ESCALA_MAXIMA) {
    escala = ESCALA_MAXIMA;
  }
}

// RODINHA DO MOUSE

canvas.addEventListener(
  "wheel",
  function (evento) {
    evento.preventDefault();

    const zoom = evento.deltaY < 0 ? 1.1 : 0.9;

    escala *= zoom;

    limitarEscala();

    limitarPosicao();

    desenhar();
  },
  {
    passive: false,
  },
);
