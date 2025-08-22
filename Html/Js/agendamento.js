
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formAgendamento");

  form.addEventListener("submit", function (e) {
    // Deixa o FormSubmit funcionar normalmente (não usamos e.preventDefault())

    // Captura dos dados
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const servico = document.getElementById("tipo").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto = `Olá! Gostaria de agendar uma consulta.\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Email:* ${email}\n*Serviço:* ${servico}\n*Data:* ${data}\n*Horário:* ${horario}\n*Mensagem:* ${mensagem}`;

    const whatsappURL = `https://wa.me/244930139090?text=${encodeURIComponent(texto)}`;

    // Mostra a confirmação
    const mensagemConfirmacao = document.getElementById("mensagemConfirmacao");
    mensagemConfirmacao.classList.remove("d-none");

    // Oculta depois de 4 segundos
    setTimeout(() => {
      mensagemConfirmacao.classList.add("d-none");
    }, 4000);

    // Abre o WhatsApp depois de 1 segundo
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 1000);
  });
});
