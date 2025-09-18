//    document.addEventListener("DOMContentLoaded", function () {
//         const heroText = document.querySelector(".hero-text");
//         const heroImage = document.querySelector(".hero-image");

//         // Adiciona a classe 'is-visible' para ativar a animação do CSS
//         // O setTimeout garante que a animação comece após a renderização inicial
//         setTimeout(() => {
//           heroText.classList.add("is-visible");
//           heroImage.classList.add("is-visible");
//         }, 100); // 100ms de delay
//       });

// --- BANCO DE DADOS DAS EMENDAS ---
const todasAsEmendas = [
  // Emendas de 2025
  {
    ano: 2025,
    beneficiario: "Rua Dido - entre as Ruas Libia e Virgilio",
    objeto: "Reforço para a execução de serviços para realizar a pavimentação da via publica",
    valor: 611000,
    status: "Em Preparação",
  },
  {
      ano: 2025,
      beneficiario: "Rua Rio Petropolis, no Bairro Pindorama",
      objeto: "Reforço orçamentario para realizar a pavimentação da rua. ",
      valor: 300000,
      status: "Em Preparação",
  },
  {
    ano: 2025,
    beneficiario: "Rua João Gomide Leite, no Bairro Pindorama",
    objeto: "Reforço para a execução de serviços para realizar a pavimentação da via publica",
    valor: 398000,
    status: "Em Preparação",

  },
  {
    ano: 2025,
    beneficiario: "Conjunto Jardim Filadelfia",
    objeto:"Manutenção e reconstrução dos becos.",
    valor: 150000,
    status: "Em Preparação",

  },
  {
    ano: 2025,
    beneficiario: "Programa Campos de Várzea",
    objeto: "Reforço orçamentario para a execução do programa Campos de Várzea",
    valor: 391000,
    status: "Em Preparação",
  },
  {
      ano: 2025,
      beneficiario: "Quadra situada na Rua Beco Flor de Prímula, 220 - Pindorama",
      objeto: "Reforço de dotação orçamentária para a manutenção da quadra",
      valor: 400000,
      status: "Em Preparação",
  },
  {
    ano: 2025,
    beneficiario: "Aglomerado da Serra - ONG Associação Origem Centro Sociocultural e Esportivo",
    objeto: "Reforço de dotação orçamentária para o custeio de oficinas culturais",
    valor: 50000,
    status: "Em Preparação",
  },


  // Emendas de 2024
  {
    ano: 2024,
    beneficiario: "UPA Nordeste",
    objeto: "Manutenções necessárias na UPA Nordeste",
    valor: 50000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "UPA Venda Nova",
    objeto: "Manutenções necessárias na UPA Venda Nova",
    valor: 50000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Centro de Saúde Padre Fernando de Melo",
    objeto: "Manutenções necessárias no Centro de Saúde Padre Fernando de Melo",
    valor: 30000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Centro de Saúde Waldomiro Lobo",
    objeto: "Manutenções necessárias no Centro de Saúde Waldomiro Lobo",
    valor: 300000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Unidadde de Pronto Atendimento Pampulha",
    objeto: "Manutenções necessárias na Unidade de Pronto Atendimento Pampulha",
    valor: 200000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Unidade de Pronto Atendimento Leste",
    objeto: "Manutenções necessárias na Unidade de Pronto Atendimento Leste",
    valor: 100000,
    status: "Em execução",
  },
  {
    ano: 2024,
    beneficiario: "Hospital Metropolitano Odilon Behrens",
    objeto: "Manutenções necessárias no Hospital Metropolitano Odilon Behrens",
    valor: 178000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Hospital Evangelico de Belo Horizonte",
    objeto: "Manutenções necessárias no Hospital Evangelico de Belo Horizonte",
    valor: 150000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Hospital Doutor Célio de Castro",
    objeto: "Manutenções necessárias no Hospital Doutor Célio de Castro",
    valor: 150000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Santa Casa de Belo Horizonte",
    objeto: "Manutenções necessárias na Santa Casa de Belo Horizonte",
    valor: 150000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Hospital São Francisco",
    objeto: "Manutenções necessárias no Hospital São Francisco",
    valor: 150000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Hospital Risolte Tolentino Neves",
    objeto: "Manutenções necessárias no Hospital Risolte Tolentino Neves",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Hospital Sofia Feldman",
    objeto: "Manutenções necessárias no Hospital Sofia Feldman",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Hospital da Baleia",
    objeto: "Manutenções necessárias no Hospital da Baleia",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Parque Cevae Coqueiros",
    objeto: "Melhorias na Infraestrutura do Parque Cevae Coqueiros",
    valor: 150000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Rua Macarena, nº 400, Pindorama",
    objeto:
      "Criação de hortas comunitárias é a pratica de compostagem de resíduos orgânicos.",
    valor: 100000,
    status: "Em Execução",
  },
  {
    ano: 2024,
    beneficiario: "Programa a Rua é Nossa",
    objeto: "A realização do projeto é a revitalização das Ruas",
    valor: 400000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Programa Ruas de Lazer",
    objeto:
      "A realização do projeto para aumentar o lazer e a convivência social",
    valor: 50000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario: "Praça Maria Helena Fonseca, nº 387, Pindorama",
    objeto:
      "Implantação/Manutenção dos equipamentos de infraestrutura esportiva e de lazer",
    valor: 150000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Evento Jornada Pascoal",
    objeto: "Reforço da dotação orçamentária para realização do evento Pascoal",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2024,
    beneficiario:
      "Rua Ribeirão das Neves entre a Av. Mendes Sá e Rua Santa Rita, no Bairro Paraíso",
    objeto: "Instalação do piso ecológico intertravado",
    valor: 300000,
    status: "Em Preparação",
  },
  {
    ano: 2024,
    beneficiario: "Rua João Gomide Leite, Pindorama",
    objeto: "Recapeamento da Rua em toda sua extensão",
    valor: 300000,
    status: "Em execução",
  },
  {
    ano: 2024,
    beneficiario: "Creche Comunitária Eunice Lanza, Pindorama",
    objeto: "Contrução de playground  no Ciame Pindorama",
    valor: 100000,
    status: "Em Execução",
  },

  // Emendas de 2023
  {
    ano: 2023,
    beneficiario:
      "Praça Adlmo Passos Lopes, Praça Hermano Donker (Pindorama) e Beco São José 20 (Califórnia)",
    objeto:
      "Implantação de equipamento de infraestrutura esportiva e de lazer (playground).",
    valor: 50000,
    status: "Em Preparação",
  },
  {
    ano: 2023,
    beneficiario:
      "Rua Antônio Carlos Coutinho (entre Macarena e Praça Adlmo Passos Lopes) e Rua Amariles (entre Rua Avelar e Rua Assumar), Pindorama",
    objeto: "Recapeamento asfáltico.",
    valor: 350000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario:
      "Vila Coqueiral (Becos Dona Antonia, Beco Entrada do Lar, Beco Maria Nazareth, Beco Nelci e Beco Delso Renout)",
    objeto: "Manutenção, revitalização de becos e implantação de guarda-corpo.",
    valor: 150000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario:
      "Diversas ruas nos bairros Pindorama, Coqueiros, Dom Bosco, Paraíso e Padre Eustáquio",
    objeto: "Implantação de redutores de velocidade (quebra-molas).",
    valor: 140000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "CEVAE Coqueiros",
    objeto: "Implantação de pista de caminhada.",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "Rua Aline, 783 A, Pindorama",
    objeto:
      "Reforma do alambrado, cercamento do terreno e construção de vestiários em campo de futebol.",
    valor: 322000,
    status: "Em Preparação",
  },
  {
    ano: 2023,
    beneficiario: "Unidades de Atendimento à Saúde",
    objeto: "Manutenção de unidades de atendimento à saúde.",
    valor: 500000,
    status: "Em Preparação",
  },
  {
    ano: 2023,
    beneficiario: "Hospital da Baleia",
    objeto: "Reforço de dotação orçamentária para atendimento.",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "CERSAM Noroeste",
    objeto: "Manutenção de unidade de atendimento à saúde.",
    valor: 152000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "Complexo Hospitalar São Francisco",
    objeto: "Reforço de dotação orçamentária para atendimento.",
    valor: 100000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario:
      "Centro de Referência em Saúde Mental Infanto-Juvenil Noroeste",
    objeto: "Reforço de dotação orçamentária para atendimento.",
    valor: 110000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "Hospital Metropolitano Odilon Behrens",
    objeto: "Reforço de dotação orçamentária para atendimento.",
    valor: 150000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "UBS Dom Bosco",
    objeto: "Reforma da unidade.",
    valor: 250000,
    status: "Concluída",
  },
  {
    ano: 2023,
    beneficiario: "UBS Pindorama",
    objeto: "Compra e ampliação do parque tecnológico.",
    valor: 100000,
    status: "Em Execução",
  },
];

// --- FUNÇÃO PARA POPULAR UMA TABELA ---
function popularTabela(ano, dados) {
  const tbody = document.getElementById(`tbody-${ano}`);
  if (!tbody) return; // Se não encontrar o corpo da tabela, para a execução

  let linhasHTML = "";

  dados.forEach((emenda) => {
    // Formata o valor para o padrão de moeda brasileiro (R$)
    const valorFormatado = emenda.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    // Cria uma classe CSS a partir do status (ex: "Em Execução" -> "em-execucao")
    const statusClass = emenda.status.toLowerCase().replace(/\s+/g, "-");

    linhasHTML += `
            <tr>
                <td>${emenda.beneficiario}</td>
                <td>${emenda.objeto}</td>
                <td>${valorFormatado}</td>
                <td>
                    <span class="status ${statusClass}">${emenda.status}</span>
                </td>
            </tr>
        `;
  });

  tbody.innerHTML = linhasHTML;
}

// --- LÓGICA PRINCIPAL ---

// 1. Filtra as emendas por ano

const emendas2025 = todasAsEmendas.filter((emenda) => emenda.ano === 2025);
const emendas2024 = todasAsEmendas.filter((emenda) => emenda.ano === 2024);
const emendas2023 = todasAsEmendas.filter((emenda) => emenda.ano === 2023);

// 2. Chama a função para popular cada tabela com os dados filtrados
popularTabela(2025, emendas2025);
popularTabela(2024, emendas2024);
popularTabela(2023, emendas2023);
