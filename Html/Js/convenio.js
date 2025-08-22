// convenios.js
// Lista fictícia de convênios (substitua os dados depois)
const convenios = [
  {
    nome: "Saúde +",
    categoria: "Empresarial",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Comprehensive coverage for consultations, lab tests, imaging, and minor surgeries.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Alvorada Nobel Plano",
    categoria: "Empresarial",
    descricaoPT: "Convênio empresarial com cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento.",
    descricaoEN: "Corporate health plan with partial coverage and referral requirements.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Complexo Escolar Privado Emília Júlia",
    categoria: "Particular",
    descricaoPT: "Convênio com cobertura parcial em diversos actos.É necessário guia encaminhado para atendimento",
    descricaoEN: "Full coverage for specialties, hospitalizations, and emergency services.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Ensa Seguros",
    categoria: "Seguradoras",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento.",
    descricaoEN: "Covers basic consultations and lab tests through a wide network.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Fortaleza Seguros",
    categoria: "Seguradora",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento.",
    descricaoEN: "Focused on general medicine, gynecology, and pediatrics.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Medicare",
    categoria: "Seguradora",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Full plan with national coverage and priority care.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Met-care",
    categoria: "Empresarial",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Requires authorized referral. Ideal for check-ups and surgeries.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Mundial Seguros",
    categoria: "Seguradora",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Basic coverage for consultations and physiotherapy sessions.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Njinga",
    categoria: "Seguradora",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Basic coverage for consultations and physiotherapy sessions.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Prudencial",
    categoria: "Seguradora",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Basic coverage for consultations and physiotherapy sessions.",
    icone: "bi bi-person-fill-gear"
  },
  {
    nome: "Protteja",
    categoria: "Seguradora",
    descricaoPT: "Cobertura ampla em consultas, exames laboratoriais, imagiologia. É necessário os documentos do benificiário e da seguradora no acto de atendimento",
    descricaoEN: "Basic coverage for consultations and physiotherapy sessions.",
    icone: "bi bi-person-fill-gear"
  }
];

let idioma = "PT";

function aplicarFiltros() {
  const termo = document.getElementById("searchInput").value.toLowerCase();
  const categoria = document.getElementById("categoriaFiltro").value;

  const filtrados = convenios.filter(conv =>
    conv.nome.toLowerCase().includes(termo) &&
    (categoria === "todos" || conv.categoria === categoria)
  );

  renderConvenios(filtrados);
}

function renderConvenios(lista) {
  const container = document.getElementById("convenioContainer");
  container.innerHTML = "";

  lista.forEach((conv, index) => {
    const descricao = idioma === "PT" ? conv.descricaoPT : conv.descricaoEN;

    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
col.innerHTML = `
  <div class="card convenio-card text-center h-100" data-index="${index}" data-bs-toggle="modal" data-bs-target="#convenioModal">
    <div class="card-body">
      <div class="convenio-icon mb-3">
        <i class="${conv.icone}" style="font-size: 2rem;"></i>
      </div>
      <h5 class="card-title">${conv.nome}</h5>
      <p class="card-text">${descricao}</p>
    </div>
  </div>
`;
    container.appendChild(col);
  });

  document.querySelectorAll(".convenio-card").forEach(card => {
    card.addEventListener("click", () => {
      const index = card.getAttribute("data-index");
      const conv = convenios[index];
      document.getElementById("modalTitulo").textContent = conv.nome;
      document.getElementById("modalDescricao").textContent = idioma === "PT" ? conv.descricaoPT : conv.descricaoEN;
    });
  });
}
//

document.getElementById("searchInput").addEventListener("input", aplicarFiltros);
document.getElementById("categoriaFiltro").addEventListener("change", aplicarFiltros);

document.getElementById("toggleIdioma").addEventListener("click", () => {
  idioma = idioma === "PT" ? "EN" : "PT";
  document.getElementById("toggleIdioma").textContent = idioma === "PT" ? "English" : "Português";
  aplicarFiltros();
});

renderConvenios(convenios);

document.getElementById("formConvenio").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeConvenio").value.trim();
  const convenio = document.getElementById("convênioDesejado").value.trim();
  const email = document.getElementById("emailConvenio").value.trim();

  const mensagem = `Olá, meu nome é ${nome}. Gostaria de solicitar o convênio: ${convênio}.` + 
                   (email ? `%0AMeu email é: ${email}` : "");

  const numero = "244930139090"; // WhatsApp da clínica
  const url = `https://wa.me/${numero}?text=${mensagem}`;

  window.open(url, '_blank');

  const msg = document.getElementById("sucessoConvenio");
  msg.classList.remove("d-none");

  setTimeout(() => {
    msg.classList.add("d-none");
  }, 4000);

  this.reset();
});

//
document.getElementById("formParceria").addEventListener("submit", function (e) {
  e.preventDefault();

  const empresa = document.getElementById("nomeEmpresa").value.trim();
  const representante = document.getElementById("nomeRepresentante").value.trim();
  const email = document.getElementById("emailParceria").value.trim();
  const mensagem = document.getElementById("mensagemParceria").value.trim();

  const texto = `Olá! Represento a empresa: ${empresa}. 
Nome do responsável: ${representante}.
Email para contato: ${email}.
Gostaria de propor uma parceria ou convênio com a H.S Medical Vida.
Mensagem: ${mensagem}`;

  const numero = "244930139090";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
  window.open(url, '_blank');

  const alerta = document.getElementById("sucessoParceria");
  alerta.classList.remove("d-none");

  setTimeout(() => {
    alerta.classList.add("d-none");
  }, 5000);

  this.reset();
});
// Convênio Desejado
document.getElementById("formConvenioDesejado").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeDesejo").value.trim();
  const convenio = document.getElementById("convenioDesejado").value.trim();
  const email = document.getElementById("emailDesejo").value.trim();

  const mensagem = `Olá, meu nome é ${nome}. Gostaria de solicitar o convênio: ${convenio}.`
                 + (email ? `\nMeu email é: ${email}` : "");

  const numero = "244930139090"; // WhatsApp da clínica
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // 🔹 Abre diretamente no mesmo separador (mais seguro em telemóveis)
  window.location.href = url;

  // Mensagem de sucesso
  const msg = document.getElementById("msgSucessoConvenio");
  msg.classList.remove("d-none");
  setTimeout(() => msg.classList.add("d-none"), 4000);

  this.reset();
});

// Parceria
document.getElementById("formParceria").addEventListener("submit", function (e) {
  e.preventDefault();

  const empresa = document.getElementById("nomeEmpresa").value.trim();
  const representante = document.getElementById("nomeRepresentante").value.trim();
  const email = document.getElementById("emailParceria").value.trim();
  const mensagem = document.getElementById("mensagemParceria").value.trim();

  const texto = `Olá, sou ${representante} da empresa ${empresa}.`
              + `\nGostaria de propor uma parceria.`
              + `\nEmail para contato: ${email}`
              + `\nMensagem: ${mensagem}`;

  const numero = "244930139090";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.location.href = url;

  const msg = document.getElementById("sucessoParceria");
  msg.classList.remove("d-none");
  setTimeout(() => msg.classList.add("d-none"), 4000);

  this.reset();
});
