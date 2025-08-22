// Envio via WhatsApp
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !assunto || !mensagem) {
    alert("⚠️ Preencha todos os campos antes de enviar.");
    return;
  }

  const texto = `Olá, meu nome é ${nome}.\nGostaria de informações sobre: ${assunto}.\nEmail para contato: ${email}.\nMensagem: ${mensagem}`;
  const numero = "244930139090";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");

  mostrarMensagemSucesso();
});

// Envio via Email (FormSubmit)
document.getElementById("btnEmail").addEventListener("click", function () {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !assunto || !mensagem) {
    alert("⚠️ Preencha todos os campos antes de enviar.");
    return;
  }

  const formData = new FormData();
  formData.append("Nome", nome);
  formData.append("Email", email);
  formData.append("Assunto", assunto);
  formData.append("Mensagem", mensagem);

  // campos extras do FormSubmit
  formData.append("_subject", "Nova mensagem de contato do site");
  formData.append("_autoresponse", "Recebemos sua mensagem! Em breve entraremos em contato.");
  formData.append("_template", "table");

  fetch("https://formsubmit.co/informatico400@gmail.com", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      mostrarMensagemSucesso();
    } else {
      alert("❌ Ocorreu um erro ao enviar. Tente novamente.");
    }
  })
  .catch(() => {
    alert("⚠️ Erro de conexão. Verifique sua internet.");
  });
});

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso() {
  const msgSucesso = document.getElementById("sucessoMsg");
  msgSucesso.classList.remove("d-none");

  setTimeout(() => {
    msgSucesso.classList.add("d-none");
  }, 4000);

  document.getElementById("formContato").reset();
}
