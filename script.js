const eventos = [
  {
    ano: "Antes de 1988",
    titulo: "Funai e Saúde Indígena",
    eventoChave:
      "Atuação da Fundação Nacional do Índio (Funai) na promoção de cuidados de saúde para os povos indígenas.",
    importancia:
      "Antes da Constituição de 1988, a Funai era a principal responsável pela assistência à saúde das populações indígenas, desenvolvendo ações pontuais, com enfoque limitado e sem uma política estruturada ou específica que integrasse os saberes tradicionais dos povos indígenas.",
  },
  {
    ano: "1988",
    titulo: "Promulgação da Constituição Federal",
    eventoChave:
      "Reconhecimento dos direitos originários e consuetudinários dos povos indígenas aos seus territórios e à preservação de suas culturas, línguas e tradições.",
    importancia:
      "Primeira vez na história brasileira que os direitos dos povos indígenas são amplamente reconhecidos na legislação máxima do país, estabelecendo uma base sólida para políticas futuras que respeitam a diversidade cultural e a autodeterminação desses povos.",
  },
  {
    ano: "1990",
    titulo: "Lei nº 8.080/1990 - Criação do SUS",
    eventoChave: "Estabelecimento do Sistema Único de Saúde (SUS).",
    importancia:
      "Embora a lei não fosse específica para a saúde indígena, ela criou a estrutura e os princípios para a organização de um sistema de saúde universal e descentralizado, que mais tarde facilitaria a inclusão de políticas específicas voltadas para os povos indígenas.",
  },
  {
    ano: "1991",
    titulo: "Transferência das atribuições da Funai para a Funasa",
    eventoChave:
      "Transferência das responsabilidades de saúde indígena da Funai para a Fundação Nacional de Saúde (Funasa).",
    importancia:
      "Esse marco visava a profissionalizar e estruturar mais o atendimento à saúde indígena, integrando-o a uma rede mais ampla de serviços do SUS, embora ainda sem atender plenamente às demandas culturais e sociais dos povos indígenas.",
  },
  {
    ano: "1999",
    titulo: "Lei nº 9.836/1999 - Criação do SasiSUS",
    eventoChave:
      "Instituição do Subsistema de Atenção à Saúde Indígena como parte do SUS.",
    importancia:
      "Resposta direta à necessidade de um sistema de saúde que respeitasse as especificidades culturais e sociais das comunidades indígenas, garantindo uma atenção diferenciada que levasse em consideração os saberes tradicionais e as práticas culturais indígenas.",
  },
  {
    ano: "2002",
    titulo: "Portaria nº 254/2002 - Implementação da PNASPI",
    eventoChave:
      "Lançamento oficial da Política Nacional de Atenção à Saúde dos Povos Indígenas.",
    importancia:
      "A PNASPI formalizou e consolidou as diretrizes para uma abordagem de saúde que respeitasse a diversidade cultural e as necessidades específicas dos povos indígenas, promovendo a integração dos saberes tradicionais ao sistema de saúde convencional e alinhando-se aos princípios constitucionais de respeito à autodeterminação.",
  },
];

$(".nav").append(
  eventos.map(
    (evento, index) => `
      <button class="nav-link ${
        !index ? "active" : ""
      }" data-bs-slide="${index}">
        <div class="radio"></div>
        <span>
          ${evento.ano}
        </span>
      </button>
    `
  )
);

$(".carousel-inner").append(
  eventos.map(
    (evento, index) => `
      <div class="carousel-item ${!index ? "active" : ""}">
        <div class="carousel-item-title">${evento.ano}: ${evento.titulo}</div>
        <div class="carousel-item-card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content center gap-2 mb-3">
              <div class="key-icon"></div>
              <span>
                <strong>Evento-chave: </strong>${evento.eventoChave}
              </span>
            </div>
            <div class="d-flex align-items-center justify-content center gap-2">
              <div class="warning-icon"></div>
              <span>
                <strong>Importância: </strong>${evento.importancia}
              </span<
            </div>
          </div>
        </div>
      </div>
    `
  )
);

$(document).on("click", ".nav-link", function name() {
  const index = $(this).data("bs-slide");
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
  $("#carouselExampleControls").carousel(index);
});
