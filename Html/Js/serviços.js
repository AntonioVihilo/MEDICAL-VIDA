// Navbar: marcar link ativo
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  carregarConsultas(); // Gera cards de consultas
  carregarExames();    // Gera cards de exames
  carregarRaioX(); // Gera Cards de raiox
  carregarEstomatologia(); // Gera Cards de Estomatologia
  carregarOutros(); // Gera outros serviços
});

// 🔍 Filtro de texto (busca)
document.getElementById('searchInput').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  const todasCategorias = document.querySelectorAll('.tab-pane');

  todasCategorias.forEach(categoria => {
    const cards = categoria.querySelectorAll('.card');
    cards.forEach(card => {
      const titulo = card.querySelector('.card-title').textContent.toLowerCase();
      card.style.display = titulo.includes(termo) ? 'block' : 'none';
    });
  });
});

// 🧩 Filtrar por categoria (abas)
document.querySelectorAll('.nav-link.category-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const categoria = tab.getAttribute('data-category');
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('show', pane.id === categoria);
      pane.classList.toggle('active', pane.id === categoria);
    });
  });
});

// 🔄 Modal de "Ver Mais"
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-ver-mais')) {
    const nome = event.target.getAttribute('data-nome');
    const descricao = event.target.getAttribute('data-descricao');

    document.getElementById('modalServicoLabel').textContent = nome;
    document.querySelector('#modalServico .modal-body').innerHTML = descricao;
  }
});


// Função para criar um card de serviço com classe de categoria e animação AOS
function criarCard(servico, categoria) {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card h-100 shadow-sm categoria-${categoria.toLowerCase()}" data-aos="fade-up" data-aos-delay="100">
      <div class="card-body text-center">
        <i class="bi ${servico.icone} fs-2 mb-3 d-block"></i>
        <h5 class="card-title">${servico.nome}</h5>
        <p class="card-text text-muted">${servico.descricao}</p>
        <a href="https://wa.me/244930139090" class="btn btn-outline-primary btn-sm">Agendar</a>
      </div>
    </div>
  `;

  return col;
}

// Dados de exemplo para cada categoria
const consultas = [
   {
  nome: "Consulta de Cardiologia",
  descricao: "Avaliação e acompanhamento da saúde do coração.",
  icone: "bi-chat-square-text"
},
{
    "nome": "CONSULTA DE URGÊNCIA",
    "descricao": "Procedimento clínico realizado com segurança e cuidado especializado.",
    "icone": "bi-chat-square-text"
  },
{
  nome: "Consulta de Ginecologia",
  descricao: "Atendimento à saúde da mulher, com foco no sistema reprodutor.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Urologia",
  descricao: "Prevenção, diagnóstico e tratamento do trato urinário e reprodutor masculino.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Psicologia",
  descricao: "Apoio psicológico e acompanhamento de questões emocionais e comportamentais.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Medicina Interna",
  descricao: "Avaliação global de doenças em adultos e gestão de patologias crónicas.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Dermatologia",
  descricao: "Diagnóstico e tratamento de doenças da pele, cabelo e unhas.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Endocrinologia",
  descricao: "Acompanhamento de distúrbios hormonais e metabólicos como diabetes e tiroide.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Ortopedia",
  descricao: "Cuidado das lesões, dores e doenças dos ossos, articulações e músculos.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Oftalmologia",
  descricao: "Avaliação da visão e diagnóstico de doenças oculares.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Estomatologia",
  descricao: "Diagnóstico e tratamento de problemas da boca, dentes e maxilares.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Optometria",
  descricao: "Exame da visão e prescrição de óculos ou lentes de contacto.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Otorrinolaringologia",
  descricao: "Tratamento de doenças do ouvido, nariz e garganta.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Pré-Natal",
  descricao: "Acompanhamento da saúde da gestante e do desenvolvimento do bebé.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta Geral de Consulta",
  descricao: "Atendimento médico abrangente para avaliação de sintomas gerais.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Infertilidade",
  descricao: "Avaliação e tratamento de dificuldades para engravidar.",
  icone: "bi-chat-square-text"
},
{
  nome: "Consulta de Fisioterapia",
  descricao: "Tratamento de lesões e reabilitação motora através de exercícios terapêuticos.",
  icone: "bi-chat-square-text"
}
];

const exames = [
  {
    nome: "Hemograma Completo",
    descricao: "Exame de sangue para avaliação geral da saúde.",
    icone: "bi-droplet"
  },
  {
    nome: "Urina Sumária",
    descricao: "Análise básica da urina para detectar anormalidades.",
    icone: "bi-droplet"
  },
  {
    nome: "Teste de Gravidez",
    descricao: "Verificação da presença de hormônio hCG.",
    icone: "bi-droplet"
  },
  {
    nome: "Teste de COVID-19",
    descricao: "Detecção rápida do vírus SARS-CoV-2.",
    icone: "bi-droplet"
  },{
  "nome": "Tempo de Coagulação",
  "descricao": "Avalia quanto tempo o sangue leva para coagular, ajudando a identificar distúrbios de coagulação.",
  "icone": "bi-droplet"
},
{
  "nome": "Tempo de Hemorragia",
  "descricao": "Verifica o tempo que leva para estancar um pequeno sangramento, avaliando a função das plaquetas.",
  "icone": "bi-droplet"
},
{
  "nome": "Teste de Tuberculose",
  "descricao": "Detecta a presença da bactéria causadora da tuberculose no organismo.",
  "icone": "bi-droplet"
},
{
  "nome": "Teste de Hepatite C",
  "descricao": "Identifica a presença do vírus da hepatite C no sangue.",
  "icone": "bi-droplet"
},
{
  "nome": "Teste de Dengue",
  "descricao": "Detecta a presença do vírus da dengue no sangue ou os anticorpos produzidos contra ele.",
  "icone": "bi-droplet"
},
{
  "nome": "Teste de Leptospirose",
  "descricao": "Identifica a bactéria causadora da leptospirose no organismo.",
  "icone": "bi-droplet"
},
{
  "nome": "Teste de Diagnóstico Imuno",
  "descricao": "Exame imunológico que detecta antígenos ou anticorpos para várias doenças.",
  "icone": "bi-droplet"
},
{
  "nome": "Hepatite B",
  "descricao": "Verifica a presença do vírus da hepatite B no sangue.",
  "icone": "bi-droplet"
},
{
  "nome": "Teste Rápido de Malaria",
  "descricao": "Detecta rapidamente a presença do parasita da malária no sangue.",
  "icone": "bi-droplet"
},
{
  "nome": "Ureia",
  "descricao": "Mede os níveis de ureia no sangue para avaliar a função dos rins.",
  "icone": "bi-droplet"
},
  {
  nome: "Sangue Oculto",
  descricao: "Identifica a presença de sangue não visível nas fezes.",
  icone: "bi-droplet"
},
{
  nome: "Trigliceridos",
  descricao: "Mede os níveis de triglicerídeos no sangue para avaliar o risco cardiovascular.",
  icone: "bi-droplet"
},
{
  nome: "Amilase",
  descricao: "Avalia a função pancreática por meio dos níveis da enzima amilase.",
  icone: "bi-droplet"
},
{
  nome: "Amilase Pancreatica",
  descricao: "Examina especificamente a fração pancreática da amilase no sangue.",
  icone: "bi-droplet"
},
{
  nome: "Creatinina",
  descricao: "Avalia a função renal através dos níveis de creatinina no sangue.",
  icone: "bi-droplet"
},
{
  nome: "Coagulograma",
  descricao: "Analisa a capacidade de coagulação do sangue.",
  icone: "bi-droplet"
},
{
  nome: "Colesterol HDL",
  descricao: "Mede o colesterol bom (HDL) no sangue, essencial para a saúde cardiovascular.",
  icone: "bi-droplet"
},
{
  nome: "Colesterol Total",
  descricao: "Quantifica o nível total de colesterol no sangue.",
  icone: "bi-droplet"
},
{
  nome: "Exame Citológico",
  descricao: "Analisa células para detectar alterações pré-cancerígenas ou infecciosas.",
  icone: "bi-droplet"
},
{
  nome: "Exame de Chincungunha",
  descricao: "Detecta anticorpos ou antígenos do vírus Chikungunya no organismo.",
  icone: "bi-droplet"
},
  {
  "nome": "Exame de Fezes",
  "descricao": "Analisa as fezes para identificar infecções, parasitas, ou problemas digestivos.",
  icone: "bi-droplet"
},
{
  "nome": "Exudade Vaginal",
  "descricao": "Exame de secreção vaginal que detecta infecções, fungos e bactérias.",
  icone: "bi-droplet"
},
{
  "nome": "Factor Reumatoide",
  "descricao": "Detecta a presença de anticorpos relacionados à artrite reumatoide e outras doenças autoimunes.",
  icone: "bi-droplet"
},
{
  "nome": "Falciformação",
  "descricao": "Verifica se há presença do traço falciforme ou anemia falciforme no sangue.",
   icone: "bi-droplet"
},
{
  "nome": "Gama GT",
  "descricao": "Avalia a saúde do fígado e detecta possíveis lesões hepáticas.",
  icone: "bi-droplet"
},
{
  "nome": "Glicemia",
  "descricao": "Mede o nível de glicose (açúcar) no sangue, útil no diagnóstico do diabetes.",
  icone: "bi-droplet"
},
{
  "nome": "HCV Pesquisa do Virus C da Hepatite",
  "descricao": "Verifica a presença do vírus da hepatite C por meio de anticorpos ou material genético.",
  icone: "bi-droplet"
},
{
  "nome": "Hemoglobina",
  "descricao": "Avalia os níveis de hemoglobina no sangue, importante para detectar anemia.",
  icone: "bi-droplet"
},
{
  "nome": "PCR - Proteina C Reativo",
  "descricao": "Mede a presença de inflamações ou infecções no organismo.",
  icone: "bi-droplet"
},
{
  "nome": "Pesquisa de Schistosoma",
  "descricao": "Detecta a presença do parasita causador da esquistossomose (bilharzíase).",
   icone: "bi-droplet"
},
{
  "nome": "PSA Total",
  "descricao": "Mede os níveis do Antígeno Prostático Específico, auxiliando na detecção de problemas na próstata.",
  icone: "bi-droplet"
},
{
  "nome": "PSA Total ANTEGENEO ESPECIFICO DA PROSTATA",
  "descricao": "Avalia a quantidade total do antígeno prostático específico no sangue, para rastrear alterações na próstata.",
  icone: "bi-droplet"
},
{
  "nome": "VDRL",
  "descricao": "Detecta sífilis através da identificação de anticorpos no sangue.",
  icone: "bi-droplet"
},
{
  "nome": "Ácido Úrico",
  "descricao": "Mede o nível de ácido úrico no sangue, ajudando a diagnosticar gota e problemas renais.",
  icone: "bi-droplet"
},
{
  "nome": "Albumina",
  "descricao": "Avalia os níveis de albumina no sangue, importante para verificar a função hepática e estado nutricional.",
  icone: "bi-droplet"
},
{
  "nome": "Reacção de Widal",
  "descricao": "Ajuda a diagnosticar febre tifóide por meio da detecção de anticorpos específicos.",
  icone: "bi-droplet"
},
{
  "nome": "Teste Rápido de HIV",
  "descricao": "Detecta rapidamente anticorpos contra o vírus HIV no sangue.",
  icone: "bi-droplet"
},
{
  "nome": "Teste Rápido de HBSAG",
  "descricao": "Identifica a presença do antígeno do vírus da hepatite B, indicando infecção ativa.",
  icone: "bi-droplet"
},
{
  "nome": "Espermograma",
  "descricao": "Analisa a quantidade e qualidade dos espermatozoides para avaliar a fertilidade masculina.",
  icone: "bi-droplet"
},
{
  "nome": "FR",
  "descricao": "Abreviação de Fator Reumatoide, usado para detectar doenças autoimunes como artrite reumatoide.",
  icone: "bi-droplet"
},{
  "nome": "Helicobacter Pylori",
  "descricao": "Detecta a bactéria Helicobacter pylori, associada a gastrite, úlceras e câncer gástrico.",
  icone: "bi-droplet"
},
{
  "nome": "Teste rápido de HVC",
  "descricao": "Identifica rapidamente a presença do vírus da hepatite C no sangue.",
  icone: "bi-droplet"
},
{
  "nome": "Urina II",
  "descricao": "Exame que analisa a urina para detectar infecções, problemas renais e metabólicos.",
  icone: "bi-droplet"
},
{
  "nome": "Velocida do Sangue (VS)",
  "descricao": "Mede a velocidade de sedimentação das hemácias, usada para identificar inflamações no corpo.",
  icone: "bi-droplet"
},
{
  "nome": "Grupo Sanguineo",
  "descricao": "Identifica o tipo sanguíneo e o fator Rh da pessoa.",
  icone: "bi-droplet"
},
{
  "nome": "Bill Direito",
  "descricao": "Mede a bilirrubina direta no sangue, auxiliando na avaliação da função hepática.",
  icone: "bi-droplet"
},
{
  "nome": "GOT",
  "descricao": "Enzima dosada para avaliar possíveis danos no fígado, coração ou músculos.",
  icone: "bi-droplet"
},
{
  "nome": "GPT",
  "descricao": "Enzima usada para avaliar a função do fígado e detectar lesões hepáticas.",
  icone: "bi-droplet"
},
{
  "nome": "Bill Total",
  "descricao": "Mede a bilirrubina total no sangue, útil para diagnosticar problemas hepáticos e biliares.",
  icone: "bi-droplet"
},
{
  "nome": "Herpes",
  "descricao": "Detecta a presença do vírus Herpes simplex no organismo, causador de lesões na pele e mucosas.",
  icone: "bi-droplet"
},{
  "nome": "Colesterol - VLDL",
  "descricao": "Mede o nível de colesterol VLDL, relacionado ao transporte de triglicerídeos e risco cardiovascular.",
  icone: "bi-droplet"   
},
{
  "nome": "Hemoglobina Glicosilada - HBA1C",
  "descricao": "Avalia a média dos níveis de glicose no sangue nos últimos 2 a 3 meses, importante no controle do diabetes.",
  icone: "bi-droplet"   
},
{
  "nome": "Sódio",
  "descricao": "Mede os níveis de sódio no sangue, essencial para o equilíbrio hídrico e funcionamento dos músculos e nervos.",
  icone: "bi-droplet"   
},
{
  "nome": "Cloro",
  "descricao": "Avalia a concentração de cloro no sangue, importante para manter o equilíbrio ácido-base.",
  icone: "bi-droplet"   
},
{
  "nome": "Potássio",
  "descricao": "Mede os níveis de potássio no sangue, fundamental para a função muscular e cardíaca.",
  icone: "bi-droplet"   
},
{
  "nome": "Proteina Total",
  "descricao": "Verifica a quantidade total de proteínas no sangue, usada para avaliar estado nutricional e função hepática.",
  icone: "bi-droplet"   
},
{
  "nome": "Fosfatase Alcalina ALC",
  "descricao": "Enzima usada para avaliar doenças hepáticas, ósseas e obstrução das vias biliares.",
  icone: "bi-droplet"
},
{
  "nome": "Coloração de ZIEHL - Neelsen (BAAR)",
  "descricao": "Detecta bacilos álcool-ácido resistentes, como o da tuberculose, em amostras clínicas.",
  icone: "bi-droplet"
},
{
  "nome": "Pesquisa de Filaria",
  "descricao": "Identifica a presença de parasitas causadores da filariose no sangue.",
  icone: "bi-droplet"
},
{
  "nome": "Teste de Chlamidia",
  "descricao": "Detecta a bactéria Chlamydia trachomatis, responsável por infecções sexualmente transmissíveis.",
  icone: "bi-droplet"
},{
  "nome": "Papa Nicolau",
  "descricao": "Exame ginecológico que identifica alterações nas células do colo do útero, ajudando a prevenir o câncer.",
  icone: "bi-droplet"
},
{
  "nome": "Pylori nas Fezes",
  "descricao": "Detecta a bactéria Helicobacter pylori diretamente nas fezes.",
  icone: "bi-droplet"
},
{
  "nome": "Heletrforese de Hemoglobina",
  "descricao": "Identifica tipos de hemoglobina e diagnostica doenças como anemia falciforme e talassemias.",
  icone: "bi-droplet"
},
{
  "nome": "Exudade Uretral",
  "descricao": "Exame de secreção uretral usado para detectar infecções sexualmente transmissíveis.",
  icone: "bi-droplet"
},
{
  "nome": "Proteinuria 24H",
  "descricao": "Mede a quantidade de proteína eliminada na urina em 24 horas, útil na avaliação da função renal.",
  icone: "bi-droplet"
},
{
  "nome": "CA - 125",
  "descricao": "Marcador tumoral utilizado principalmente no acompanhamento e diagnóstico do câncer de ovário.",
  icone: "bi-droplet"
},
{
  "nome": "URETOCISTOGRAFIA",
  "descricao": "Exame de imagem que avalia a uretra e a bexiga, útil em casos de infecções urinárias recorrentes.",
  icone: "bi-droplet"
}
];

const RaioX = [  
  
   
  {
    "nome": "E.E.G (ELECTROENCEFALOGRAMA)",
    "descricao": "Exame que registra a atividade elétrica do cérebro para investigar condições neurológicas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA TORÁCICA (AP)",
    "descricao": "Radiografia frontal da parte torácica da coluna para avaliar ossos e articulações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RAIO-X PERIAPICAL",
    "descricao": "Imagem detalhada de dentes e estruturas ao redor para diagnóstico odontológico.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "HISTEROSALPINGOGRAFIA",
    "descricao": "Exame do útero e trompas por contraste para avaliar causas de infertilidade.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "ELECTROCARDIOGRAMA",
    "descricao": "Registra a atividade elétrica do coração, detectando arritmias e outras alterações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA TORÁCICA(LATERAL)",
    "descricao": "Radiografia lateral da coluna torácica para avaliar alinhamento e estrutura óssea.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX BACIA",
    "descricao": "Imagem da região pélvica para análise dos ossos da bacia e quadril.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX DE CRÂNIO (AP)",
    "descricao": "Radiografia frontal do crânio para investigar fraturas ou anomalias ósseas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX DE CRÂNIO (AP + LATERAL)",
    "descricao": "Imagens frontal e lateral do crânio para avaliação abrangente da cabeça.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARCADA ZIGOMÁTICA (OBLÍQUOS)",
    "descricao": "Exame que mostra os ossos zigomáticos (maçãs do rosto) em ângulos oblíquos.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARTICULAÇÃO TEMPOROMANDIBULAR - BILATERAL",
    "descricao": "Avaliação das articulações da mandíbula em ambos os lados para investigar dor ou disfunção.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX OSSOS DA FACE (MN)",
    "descricao": "Imagem frontal dos ossos da face para investigação de fraturas ou infecções.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX OSSOS DA FACE (LATERAL)",
    "descricao": "Radiografia lateral dos ossos da face para diagnóstico facial detalhado.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX DA FACE (hirts)",
    "descricao": "Exame específico para visualização dos ossos faciais em posição hirtz.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX OSSO DA FACE (Mn + LATERAL + hirts)",
    "descricao": "Conjunto de radiografias faciais para avaliação ampla dos ossos da face.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SEIOS DA FACE (Fn)",
    "descricao": "Exame frontal dos seios paranasais para investigar infecções ou inflamações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SEIOS DA FACE (Mn)",
    "descricao": "Imagem mandibular dos seios da face para análise de estruturas inferiores.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SEIOS DA FACE (LATERAL)",
    "descricao": "Visualização lateral dos seios paranasais para detectar congestão ou anomalias.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SEIOS DA FACE (hirts)",
    "descricao": "Imagem em incidência hirtz dos seios paranasais para melhor detalhamento ósseo.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SEIOS DA FACE (Fn+Mn+LATERAL+hirts)",
    "descricao": "Série completa de imagens dos seios da face em diferentes ângulos.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SELA TÚRSICA (AP)",
    "descricao": "Radiografia frontal da sela túrsica para avaliar a glândula hipófise.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SELA TÚRSICA (LATERAL)",
    "descricao": "Imagem lateral da sela túrsica usada em investigação neurológica.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SELA TÚRSICA (TO)",
    "descricao": "Radiografia em posição transorbital para análise da sela túrsica.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX SELA TÚRSICA (FLEXÃO)",
    "descricao": "Exame com flexão do pescoço para estudo funcional da sela túrsica.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA CERVICAL (AP)",
    "descricao": "Imagem frontal da coluna cervical para avaliação de vértebras do pescoço.",
    "icone": "bi bi-prescription"
  }, 
  {
    "nome": "RX COLUNA CERVICAL (PA)",
    "descricao": "Radiografia posterior da região cervical para diagnóstico ortopédico.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA CERVICAL (OBLIQUA)",
    "descricao": "Imagem da coluna cervical em posição oblíqua para detalhes das articulações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA CERVICAL (AP+PA+OBLIQUA)",
    "descricao": "Conjunto de imagens da cervical para análise completa da estrutura óssea.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA TORACO LOMAR (PA)",
    "descricao": "Imagem da região toracolombar da coluna em vista posterior.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA TORACO LOMAR (AP)",
    "descricao": "Radiografia frontal da região toracolombar para estudo vertebral.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA TORACO (P)",
    "descricao": "Imagem posterior da coluna torácica.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA TORACO LOMAR(PA+AP+P)",
    "descricao": "Série completa da coluna toracolombar para avaliação de doenças ósseas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX REGIÃO SACRO -COCCIGEIA (COLUNA VERTICAL)",
    "descricao": "Exame da região sacral e cóccix para investigação de lesões.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX MÃO OU QUIRORODATILO",
    "descricao": "Imagem da mão para verificar fraturas, deformações ou inflamações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX MÃO OU QUIRORODATILO (OBLIQUA)",
    "descricao": "Imagem oblíqua da mão para visualização das articulações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX DEDO DA MÃO (OBLIQUA)",
    "descricao": "Radiografia detalhada do dedo em posição oblíqua.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX DEDO DA MÃO (PA+OBLIQUA)",
    "descricao": "Imagens frontal e oblíqua de dedo para avaliação completa.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX PUNHO (AP+LATERAL+OBLIQUA)",
    "descricao": "Sequência de imagens do punho em várias posições para diagnóstico ortopédico.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX PUNHO (AP)",
    "descricao": "Imagem frontal do punho para avaliar ossos do carpo.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX PUNHO (LATERAL)",
    "descricao": "Imagem lateral do punho para verificar desalinhamentos.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX PUNHO (OBLIQUA)",
    "descricao": "Radiografia oblíqua do punho para análise das articulações.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARTICULAÇÃO COXOFEMURAL (QUADRIL-AP)",
    "descricao": "Imagem frontal do quadril para investigar artrose ou fraturas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARTICULAÇÃO COXOFEMURAL (QUADRIL-P)",
    "descricao": "Radiografia posterior da articulação do quadril.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARTICULAÇÃO COXOFEMURAL (QUADRIL-AP+P)",
    "descricao": "Conjunto de imagens frontais e posteriores do quadril.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARTICULÇÕES SACROILIACAS",
    "descricao": "Avaliação das articulações entre a bacia e a coluna vertebral.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX CALCANEO (AP)",
    "descricao": "Imagem frontal do calcanhar para detectar fraturas ou esporões.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX CALCANO (AP)",
    "descricao": "Radiografia do osso calcâneo frontal.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX CALCANEO (PERFIL)",
    "descricao": "Imagem lateral do calcanhar para estudo do osso do pé.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX CALCANEO (AP E PERFIL)",
    "descricao": "Imagens frontal e lateral do calcanhar para avaliação completa.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COXA (AP)",
    "descricao": "Imagem da coxa em vista frontal para avaliação de fraturas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COXA (P)",
    "descricao": "Radiografia posterior da coxa para avaliação óssea.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COXA (AP+P)",
    "descricao": "Vistas frontal e posterior da coxa em um só exame.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX JOELHO (AP)",
    "descricao": "Imagem frontal do joelho para análise de articulações e cartilagens.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX JOELHO (AP+LATEAL)",
    "descricao": "Imagens do joelho em dois ângulos para diagnóstico ortopédico.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX PÉ (EDODACTILO)",
    "descricao": "Radiografia do pé para identificar lesões ou alterações ósseas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX PERNA",
    "descricao": "Imagem da perna para avaliar ossos da tíbia e fíbula.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX TORAX (PA E PERFIL)",
    "descricao": "Imagens do tórax para avaliar pulmões, costelas e coração.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX EXTERNO (TORAX MEDIASTIMO)",
    "descricao": "Radiografia específica da região do mediastino no tórax.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX CAVUM (LATERAL+hirtz)",
    "descricao": "Imagens laterais e incidência hirtz da cavidade nasal e faringe.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ANTEBRAÇO",
    "descricao": "Exame dos ossos do antebraço para investigação de fraturas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ARTICULAÇÃO ESCAMULOUMERAL (OMBRO)",
    "descricao": "Radiografia do ombro para detectar lesões ósseas ou deslocamentos.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX BRAÇO",
    "descricao": "Imagem do braço para avaliação de estruturas ósseas e articulações.",
    "icone": "bi bi-prescription"
  },
  
  {
    "nome": "RX CLAVICULA",
    "descricao": "Radiografia da clavícula para investigar fraturas ou deformidades.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX MAXILAR (PA+OBLIQUA)",
    "descricao": "Imagens do maxilar em duas posições para diagnóstico odontológico ou traumático.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX MAXILAR (PA)",
    "descricao": "Imagem frontal do maxilar superior para análise óssea.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX MAXILAR (OBLIQUO)",
    "descricao": "Radiografia oblíqua do maxilar para maior detalhamento anatômico.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COTUVELO",
    "descricao": "Imagem do cotovelo para detectar lesões articulares ou ósseas.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ABDOME AGUDO (AP)",
    "descricao": "Radiografia abdominal para investigação de dor aguda ou distensão.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ABDOME AGUDO (DECULITO)",
    "descricao": "Imagem abdominal com paciente deitado para identificar líquidos ou gases livres.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ABDOME AGUDO (PA+AP+DECULITO)",
    "descricao": "Sequência de imagens abdominais para diagnóstico completo de emergência.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX ABDOME SIMPLES (AP)",
    "descricao": "Imagem única do abdome para avaliação geral dos órgãos internos.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX COLUNA LOMBO SACR",
    "descricao": "Radiografia da região lombar e sacral para investigar dores ou lesões.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX TORAX PERFIL",
    "descricao": "Imagem lateral do tórax para avaliação complementar dos pulmões e coração.",
    "icone": "bi bi-prescription"
  },
  {
    "nome": "RX TORNUZELO (AP+PERFIL)",
    "descricao": "Radiografias do tornozelo em vista frontal e lateral para diagnóstico de fraturas.",
    "icone": "bi bi-prescription"
  }

];

const Estomatologia =  [
  { 
    nome: "RESTAURAÇÃO COMPLEXA COM RESINA",
    descricao: "Reconstrução de dentes danificados com resina composta em casos de grande perda de estrutura dental.",
    icone: "bi-virus"
  },
    {
    nome: "APLICAÇÃO DE APARELHO ORDONTICO DUAS ARCA",
    descricao: "Instalação de aparelho ortodôntico em ambas as arcadas dentárias para correção do alinhamento dos dentes.",
    icone: "bi-virus"
  },
  {
    nome: "EXODONTIA DO ULTIMO DENTE (SISO)",
    descricao: "Extração do dente do siso, geralmente realizada por motivos de espaço ou inflamação.",
    icone: "bi-virus"
  },
  {
    nome: "RESTAURAÇÃO COM IONOMERO DE VIDRO",
    descricao: "Tratamento restaurador com ionômero de vidro, indicado para dentes com cáries em áreas de baixa pressão mastigatória.",
    icone: "bi-virus"
  },
  {
    nome: "EXODONTIA COM RAI-X 1 RAIZ",
    descricao: "Extração de dente com uma raiz, acompanhada por radiografia para melhor avaliação.",
    icone: "bi-virus"
  },
  {
    nome: "PROFILAXIA",
    descricao: "Limpeza profissional dos dentes para remoção de placa bacteriana, tártaros e manchas superficiais.",
    icone: "bi-virus"
  },
  {
    nome: "EXODONTIA COMPLEXA COM RAIO-X",
    descricao: "Extração de dente com maior grau de dificuldade, acompanhada de radiografia para planejamento.",
    icone: "bi-virus"
  },
  {
    nome: "EXTRA PIRAMIDAIS",
    descricao: "Procedimento relacionado à remoção de dentes em regiões posteriores e de difícil acesso.",
    icone: "bi-virus"
  },
  {
    nome: "Restauração Simples Com Resina Composta",
    descricao: "Tratamento de cáries ou fraturas pequenas com material estético (resina).",
    icone: "bi-virus"
  },
  {
    nome: "EXODONTIA COMPLEXA SEM RAIOX-X",
    descricao: "Extração de dente com alto grau de complexidade, sem uso de radiografia.",
    icone: "bi-virus"
  },{
  nome: "LAVAGEM BUCAL TOTAL",
  descricao: "Higienização completa da cavidade bucal, removendo resíduos, placas e bactérias.",
  icone: "bi-virus"
},
{
  nome: "BRANQUEAMENTO",
  descricao: "Clareamento dental realizado com produtos específicos para melhorar a estética do sorriso.",
  icone: "bi-virus"
},
{
  nome: "APLICAÇÃO DE UMA ARCADA",
  descricao: "Colocação de aparelho ortodôntico em apenas uma das arcadas dentárias (superior ou inferior).",
  icone: "bi-virus"
},
{
  nome: "REVISÃO DOS APARELHOS",
  descricao: "Avaliação e manutenção periódica de aparelhos ortodônticos para garantir sua eficácia.",
  icone: "bi-virus"
},
{
  nome: "UTRATAMENTOS DO CANAL COM 2 OU 3 RAIZ COM RX",
  descricao: "Tratamento de canal em dentes com 2 ou 3 raízes, com uso de radiografias para controle e planejamento.",
  icone: "bi-virus"
},
{
  nome: "TRATAMENTO COM PINO",
  descricao: "Colocação de pino dentro do canal do dente para suporte de restauração ou coroa.",
  icone: "bi-virus"
},
{
  nome: "APLICAÇÃO DE PIVO",
  descricao: "Procedimento semelhante ao uso de pino, utilizado para reforçar a estrutura de dentes tratados endodonticamente.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (1) DENTE",
  descricao: "Prótese parcial removível feita em acrílico para substituição de 1 dente perdido.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (2) DENTES",
  descricao: "Prótese parcial removível feita em acrílico para substituição de 2 dentes perdidos.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (3) DENTES",
  descricao: "Prótese parcial removível feita em acrílico para substituição de 3 dentes perdidos.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (4) DENTES",
  descricao: "Prótese parcial removível em acrílico, feita para repor 4 dentes ausentes na arcada.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (5) DENTES",
  descricao: "Prótese em acrílico destinada à substituição de 5 dentes, devolvendo função e estética.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (6) DENTES",
  descricao: "Prótese removível feita em acrílico para repor 6 dentes perdidos.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (7) DENTES",
  descricao: "Dispositivo em acrílico que substitui 7 dentes, ajudando na mastigação e estética facial.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (8) DENTES",
  descricao: "Prótese acrílica projetada para repor 8 dentes, usada em tratamentos parciais removíveis.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (9) DENTES",
  descricao: "Prótese removível de acrílico que substitui 9 dentes, proporcionando melhora funcional e estética.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (10) DENTES",
  descricao: "Aparelho removível feito em acrílico para substituição de 10 dentes perdidos.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (11) DENTES",
  descricao: "Prótese parcial em acrílico para substituição de 11 dentes ausentes na arcada.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (12) DENTES",
  descricao: "Prótese acrílica removível usada para substituir até 12 dentes perdidos.",
  icone: "bi-virus"
},
{
  nome: "PROTESE ACRILICA (13) DENTES",
  descricao: "Prótese removível em acrílico que substitui 13 dentes, utilizada em reabilitações extensas.",
  icone: "bi-virus"
},
{
  nome: "CONSERTO SEM MOLDE",
  descricao: "Reparo de prótese danificada sem necessidade de moldagem da boca do paciente.",
  icone: "bi-virus"
},
{
  nome: "CONSERTO COM MOLDE",
  descricao: "Reparo de prótese danificada com moldagem da boca para garantir melhor adaptação.",
  icone: "bi-virus"
},
{
  nome: "ACRESCIMO DE DENTES SEM MOLDE",
  descricao: "Adição de dentes em prótese existente sem necessidade de moldagem da boca.",
  icone: "bi-virus"
},
{
  nome: "ACRESCIMO DE DENTE COM MOLDE",
  descricao: "Adição de dente em prótese existente com moldagem para ajuste preciso.",
  icone: "bi-virus"
},
{
  nome: "COLAGEM DE (1) DENTE",
  descricao: "Fixação de um dente artificial na prótese ou diretamente na arcada do paciente.",
  icone: "bi-virus"
},
{
  nome: "CADA DENTE MAIS REBASAMENTO",
  descricao: "Adição de um dente à prótese com rebasamento para melhorar a adaptação e estabilidade.",
  icone: "bi-virus"
},
{
  nome: "ACRESCIMO DE GANCHO",
  descricao: "Inclusão de gancho metálico em prótese para melhorar sua fixação aos dentes naturais.",
  icone: "bi-virus"
},
{
  nome: "GANCHO EM PROTESES NOVA",
  descricao: "Instalação de gancho metálico durante a confecção de nova prótese para maior retenção.",
  icone: "bi-virus"
},
{
  nome: "REDE INOX EM PROTESE NOVA",
  descricao: "Adição de malha de aço inoxidável na prótese nova para reforço estrutural.",
  icone: "bi-virus"
},
  {
  nome: "MOLDEIRA INDIVIDUAL",
  descricao: "Dispositivo personalizado usado para moldar com precisão a arcada do paciente, essencial em próteses e tratamentos complexos.",
  icone: "bi-virus"
},
{
  nome: "MODELO DE ESTUDO",
  descricao: "Modelo em gesso das arcadas dentárias utilizado para planejamento de tratamentos odontológicos.",
  icone: "bi-virus"
},
{
  nome: "CERA DE ARTICULAÇÃO",
  descricao: "Material utilizado para registrar a posição dos dentes superiores e inferiores durante a mordida.",
  icone: "bi-virus"
},
{
  nome: "PLACA DE BASE ESTABLIDADE COM CERA",
  descricao: "Base provisória com cera usada em prótese para verificar estabilidade, mordida e estética antes da finalização.",
  icone: "bi-virus"
},
{
  nome: "PLACA VACUO",
  descricao: "Placa transparente feita por molde a vácuo, usada como contenção, clareamento ou protetor bucal.",
  icone: "bi-virus"
},
{
  nome: "COROA ACRILICA PROVISORIA",
  descricao: "Coroa temporária em acrílico colocada sobre o dente preparado até que a definitiva esteja pronta.",
  icone: "bi-virus"
},
{
  nome: "SESSÃO DE BRANQUEAMENTO - 3º Sessão",
  descricao: "Terceira sessão do tratamento de clareamento dental para uniformizar e intensificar os resultados.",
  icone: "bi-virus"
},
{
  nome: "PROTESE FIXAS - 1 DENTE",
  descricao: "Prótese fixa utilizada para substituir um único dente, normalmente feita em cerâmica ou metalocerâmica.",
  icone: "bi-virus"
},
{
  nome: "PROTESE FIXAS - 2 DENTES",
  descricao: "Prótese fixa que substitui dois dentes ausentes, sendo cimentada ou colada aos dentes vizinhos ou implantes.",
  icone: "bi-virus"
},
{
  nome: "PROTESE FIXAS - 3 DENTES",
  descricao: "Prótese fixa projetada para substituir três dentes consecutivos ausentes com estética e função restauradas.",
  icone: "bi-virus"
},{
  nome: "PROTESE FIXAS - 4 DENTES",
  descricao: "Prótese fixa que repõe quatro dentes ausentes, restaurando a estética e a mastigação de forma permanente.",
  icone: "bi-virus"
},
{
  nome: "ACRESCIMENTO DE 1 DENTE",
  descricao: "Inclusão de um novo dente em uma prótese existente para substituir um elemento dental perdido.",
  icone: "bi-virus"
},
{
  nome: "REPARAÇÃO DE PROTESE",
  descricao: "Conserto de prótese danificada, corrigindo fraturas, trincas ou desgastes para restaurar sua funcionalidade.",
  icone: "bi-virus"
},
{
  nome: "MANUTENÇÃO DE APARELHO ODONTOLOGICO",
  descricao: "Consulta para ajustes, controle e conservação de aparelhos ortodônticos ou ortopédicos.",
  icone: "bi-virus"
},
{
  nome: "EXODONTIA DO ULTIMO DENTE COM RX",
  descricao: "Extração do dente do siso com auxílio de radiografia para planejamento e maior segurança do procedimento.",
  icone: "bi-virus"
},
{
  nome: "tratamento do canal com pino + Restauração",
  descricao: "Tratamento de canal com colocação de pino intra-radicular e posterior restauração do dente, devolvendo sua função e estética.",
  icone: "bi-virus"
},
{
  nome: "SESSÃO DE BRANQUEAMENTO - 1º Sessão",
  descricao: "Primeira sessão do clareamento dental, que utiliza agentes químicos para remover manchas e deixar os dentes mais brancos.",
  icone: "bi-virus"
},
{
  nome: "SESSÃO DE BRANQUEAMENTO - 2º Sessão",
  descricao: "Segunda sessão do processo de branqueamento, intensificando os resultados obtidos na primeira aplicação.",
  icone: "bi-virus"
}
];

const outros = [
  
  {
    "nome": "NEBULIZAÇÃO",
    "descricao": "Administração de medicamentos por meio de vapor inalado, utilizado em casos de asma, bronquite e outras doenças respiratórias.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SUTURA DE FERIDA",
    "descricao": "Fechamento de cortes ou lacerações na pele com pontos, promovendo cicatrização adequada.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "TRATAMENTO AMBULATORIO (5 DIAS) SEGURADORA",
    "descricao": "Tratamento clínico realizado em ambiente ambulatorial, com cobertura da seguradora, durante cinco dias.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PENSO PEQUENO",
    "descricao": "Curativo simples para pequenas feridas, com cobertura estéril para proteção e cicatrização.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PENSO MÉDIO",
    "descricao": "Curativo de tamanho médio, usado em feridas moderadas para promover proteção e recuperação.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PENSO GRANDE",
    "descricao": "Curativo de grande porte, indicado para lesões extensas que exigem maior cobertura e absorção.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SUTURA DE FERIDA AVULSIVA",
    "descricao": "Sutura de feridas que envolvem perda parcial de tecido, requerendo fechamento cuidadoso e avaliação médica.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INTERNAMENTO PEDIÁTRICO (24 HORAS) COM ALIMENTAÇÃO",
    "descricao": "Internamento infantil por 24 horas, com acompanhamento médico contínuo e alimentação adequada à idade.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SUTURA DE FERIDA CUTÂNEA ATÉ 5CM (ADULTOS)",
    "descricao": "Sutura de feridas pequenas em adultos com até 5 cm de extensão, para promover cicatrização e evitar infecção.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PEQUENA CIRURGIA",
    "descricao": "Procedimentos cirúrgicos simples e de curta duração realizados com anestesia local, como retirada de cistos ou lipomas.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "GRANDE CIRURGIA",
    "descricao": "Procedimentos cirúrgicos complexos, geralmente realizados em bloco operatório, com anestesia geral e maior tempo de recuperação.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "CURETAGEM",
    "descricao": "Procedimento ginecológico para remoção do tecido do útero, geralmente indicado após abortos ou para investigação de sangramentos.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PARTO",
    "descricao": "Atendimento completo ao nascimento do bebê, podendo ser parto normal ou cesariana, com suporte médico e neonatal.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "APLICAÇÃO/REMOÇÃO DE DIU",
    "descricao": "Procedimento ginecológico para colocar ou retirar o dispositivo intrauterino (DIU), utilizado para contracepção.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "APLICAÇÃO/REMOÇÃO DE CHIP",
    "descricao": "Implantação ou remoção de chip hormonal contraceptivo sob a pele, feito com anestesia local.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "UNHA ENCRAVADA",
    "descricao": "Tratamento de unha encravada, com remoção parcial da unha e cuidados para aliviar dor e inflamação.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ATESTADO MÉDICO",
    "descricao": "Documento oficial emitido por médico, confirmando o estado de saúde do paciente e necessidade de afastamento.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "RELATÓRIO OU DECLARAÇÃO MÉDICA",
    "descricao": "Documento detalhado sobre diagnóstico, tratamento ou acompanhamento do paciente, para fins legais ou institucionais.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "MEDIÇÃO DE TENSÃO ARTERIAL",
    "descricao": "Verificação da pressão arterial para avaliação da saúde cardiovascular e controle de hipertensão.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INJEÇÃO (IM)",
    "descricao": "Aplicação de medicamento diretamente no músculo (intramuscular), para absorção rápida.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INJEÇÃO (EV)",
    "descricao": "Administração de medicamento por via endovenosa (EV), diretamente na corrente sanguínea.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "APLICAÇÃO DE SORO",
    "descricao": "Administração de solução intravenosa (soro) para hidratação, reposição de eletrólitos ou medicação.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INCISÃO DE ABCESSO",
    "descricao": "Abertura cirúrgica de abcesso para drenar pus e tratar infecção localizada.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SUTURA (POR CADA PONTO)",
    "descricao": "Fechamento de ferida por pontos cirúrgicos, com contagem individual por ponto aplicado.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ANTI-C ANTI HBS",
    "descricao": "Exames laboratoriais para detectar anticorpos relacionados ao vírus da hepatite B.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ANTÍGENO HBE",
    "descricao": "Exame que detecta a presença do antígeno HBeAg, relacionado à replicação ativa do vírus da hepatite B.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INTERNAMENTO (24 HORAS) COM ALIMENTAÇÃO",
    "descricao": "Estadia hospitalar completa por 24 horas com cuidados médicos e alimentação incluída.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "OBSERVAÇÃO (4H)",
    "descricao": "Permanência em ambiente clínico por 4 horas para monitoramento e avaliação do quadro clínico.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "TRATAMENTO DE INFERTILIDADE",
    "descricao": "Acompanhamento e procedimentos médicos voltados à investigação e tratamento da infertilidade.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA ANTI-TETÂNICO",
    "descricao": "Imunização contra o tétano, doença causada por bactérias presentes no solo e ferrugem.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA ANTI-RÁBICA",
    "descricao": "Vacina aplicada para prevenir a raiva após mordidas ou arranhões de animais suspeitos.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA DE HEPATITE B (PEDIÁTRICA) IMUNOGLOBULINA",
    "descricao": "Vacinação infantil contra hepatite B, combinada com imunoglobulina para maior proteção.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "LOMBOCIATALGIA",
    "descricao": "Tratamento da dor na região lombar irradiada para as pernas, geralmente causada por ciática.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "TRAUMAS POR ACIDENTES",
    "descricao": "Atendimento médico de lesões decorrentes de acidentes, como cortes, fraturas ou contusões.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "AVC",
    "descricao": "Atendimento de urgência a pacientes com Acidente Vascular Cerebral, popularmente conhecido como derrame.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PCI",
    "descricao": "Acompanhamento de pacientes com Paralisia Cerebral Infantil, com foco na reabilitação e cuidados clínicos.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "LESÃO DO PLEXO",
    "descricao": "Avaliação e tratamento de lesões nos nervos do plexo braquial, que afetam o movimento do braço e ombro.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ECOGRAFIA OBSTÉTRICA",
    "descricao": "Exame de imagem usado para acompanhar o desenvolvimento do feto durante a gestação.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA BCG",
    "descricao": "Vacina obrigatória contra formas graves de tuberculose, aplicada geralmente ao nascer.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "EXODONTIA SIMPLES (COM 1 E 2 DENTES)",
    "descricao": "Extração de até dois dentes de forma simples, sem necessidade de cirurgia.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ECOCARDIOGRAMA",
    "descricao": "Exame de ultrassom que avalia o funcionamento do coração, suas válvulas e cavidades.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "HOLTER",
    "descricao": "Monitoramento contínuo da atividade elétrica do coração durante 24 horas.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "MAPA",
    "descricao": "Monitorização da pressão arterial ao longo de 24 horas para diagnóstico de hipertensão.",
    "icone": "bi bi-hospital"
  },
    {
    "nome": "REFRACÇÃO",
    "descricao": "Exame que avalia a necessidade de óculos ou lentes de contato, identificando erros de refração como miopia, hipermetropia e astigmatismo.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "MEDICAÇÃO DA TENSÃO OCULAR",
    "descricao": "Aplicação de colírios ou medicamentos específicos para controlar a pressão intraocular, principalmente em casos de glaucoma.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "GONIOSCOPIO",
    "descricao": "Exame realizado com lente especial para avaliar o ângulo entre a íris e a córnea, importante no diagnóstico do glaucoma.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "CIRURGIA DE PERIGRON",
    "descricao": "Procedimento cirúrgico para tratar inflamações ou alterações na região que envolve a córnea.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SUTURA E REPARAÇÃO DA FERIDA DA PÁLPEBRA",
    "descricao": "Procedimento cirúrgico para fechar e reparar lesões na pálpebra, restaurando a estrutura e função.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "CIRURGIA DE CALAZIO",
    "descricao": "Remoção cirúrgica de calázio, uma inflamação crônica de uma glândula da pálpebra que forma um nódulo.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "RESUME OU INFORME MÉDICO",
    "descricao": "Documento elaborado por um profissional de saúde contendo o histórico clínico e os tratamentos realizados pelo paciente.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INTERNAMENTO VIP(24 HORAS) COM ALIMENTAÇÃO",
    "descricao": "Serviço de internamento com quarto privativo, cuidados médicos contínuos e alimentação incluída por 24 horas.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "TRATAMENTO AMBULATÓRIO (5 DIAS)",
    "descricao": "Acompanhamento e administração de tratamento médico fora do ambiente de internamento durante 5 dias consecutivos.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INCUBADORA (DIARIO)",
    "descricao": "Acomodação em incubadora para recém-nascidos que necessitam de controle térmico, oxigênio ou monitorização constante.",
    "icone": "bi bi-hospital"
  },
  {
  nome: "SERVIÇO DE AMBULANCIA EXTERNA",
  descricao: "Transporte médico de pacientes com suporte especializado fora da unidade hospitalar.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA TRANSVAGINAL",
  descricao: "Exame de imagem por ultrassom realizado via vaginal para avaliação dos órgãos reprodutivos femininos.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA PÉLVICA GINECOLÓGICA",
  descricao: "Exame de ultrassom usado para avaliar útero, ovários e outras estruturas da pelve feminina.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA RENAL",
  descricao: "Ultrassom usado para examinar os rins e vias urinárias, detectando alterações como cálculos ou infecções.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA MORFOLÓGICA 1º TRIMESTRE",
  descricao: "Avaliação detalhada do desenvolvimento do feto no primeiro trimestre da gestação.",
  icone: "bi bi-hospital"
},
{
  nome: "Curativos",
  descricao: "Limpeza, tratamento e proteção de feridas com materiais estéreis.",
  icone: "bi bi-hospital"
},
{
  nome: "Curativos",
  descricao: "Limpeza, tratamento e proteção de feridas com materiais estéreis.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA MAMÁRIA (CADA LADO)",
  descricao: "Ultrassom realizado em cada mama para avaliação de nódulos, cistos ou outras alterações.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA PROSTÁTICA OU PÉLVICA MASCULINA",
  descricao: "Exame de ultrassom para avaliação da próstata ou estruturas da pelve em homens.",
  icone: "bi bi-hospital"
},
{
  nome: "PUNÇÃO BIOPSIA (ENDOMETRIAL, MAMA, VULVA/VAGINAL)",
  descricao: "Coleta de amostras de tecido para análise laboratorial em regiões específicas como útero, mama ou genitais externos.",
  icone: "bi bi-hospital"
},
{
  nome: "HIDROTUBAÇÃO (POR SESSÃO)",
  descricao: "Procedimento para avaliar e tratar obstruções nas trompas uterinas usando soro fisiológico.",
  icone: "bi bi-hospital"
},
{
  nome: "CITOLOGIA MAMILAR",
  descricao: "Coleta de secreção mamilar para análise microscópica de células.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA ABDOMINAL TOTAL",
  descricao: "Ultrassom que avalia diversos órgãos abdominais como fígado, rins, baço, vesícula e pâncreas.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA MORFOLÓGICA 2º TRIMESTRE",
  descricao: "Exame detalhado do feto no segundo trimestre, avaliando o desenvolvimento de órgãos e estruturas.",
  icone: "bi bi-hospital"
},
{
  nome: "ECOGRAFIA DA TIREOIDE",
  descricao: "Ultrassom utilizado para analisar a glândula tireoide e detectar nódulos ou inflamações.",
  icone: "bi bi-hospital"
},
{
  nome: "RELATÓRIO IMAGIOLÓGICO",
  descricao: "Documento com interpretação médica de exames de imagem realizados.",
  icone: "bi bi-hospital"
},
{
  nome: "LOMBALGIA MÍNIMA",
  descricao: "Atendimento para dor leve na região lombar, com avaliação e orientações de tratamento.",
  icone: "bi bi-hospital"
},
{
  nome: "LUXAÇÃO",
  descricao: "Redução de articulação deslocada por trauma ou esforço, com avaliação médica.",
  icone: "bi bi-hospital"
},
{
  nome: "PESO",
  descricao: "Verificação do peso corporal como parte do acompanhamento clínico.",
  icone: "bi bi-hospital"
},
{
  nome: "PRIMEIROS SOCORROS",
  descricao: "Atendimento imediato a emergências para estabilizar o paciente antes de cuidados definitivos.",
  icone: "bi bi-hospital"
},
  {
    "nome": "LIMPEZA DE OUVIDO (1)",
    "descricao": "Procedimento simples para remover excesso de cera ou impurezas do ouvido, aliviando desconfortos e melhorando a audição.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "LIMPEZA DE OUVIDO (2)",
    "descricao": "Repetição do procedimento de limpeza do ouvido, caso seja necessário em ambos os ouvidos ou em sessões distintas.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "TRATAMENTO AMBULATORIO (5DIAS) COM A MEDICAÇÃO DO PACIENTE",
    "descricao": "Cuidados médicos diários realizados em ambulatório durante cinco dias, utilizando os medicamentos fornecidos pelo próprio paciente.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ECOGRAFIA TESTICULAR",
    "descricao": "Exame de imagem que avalia os testículos e estruturas próximas, útil para investigar dor, nódulos ou infertilidade.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA POLIOMIELITE (VO)",
    "descricao": "Vacina oral contra poliomielite, importante para prevenir paralisia infantil.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA POLIOMIELITE (IM)",
    "descricao": "Vacina intramuscular contra poliomielite, parte do calendário nacional de imunização.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "FEBRE AMERELA (DOSE ÚNICA)",
    "descricao": "Vacina aplicada uma única vez na vida para prevenir a febre amarela.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "HEPATITE B (PEDIATRIA)",
    "descricao": "Vacinação infantil para proteção contra o vírus da hepatite B, que ataca o fígado.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA RUBEOLA",
    "descricao": "Imunização contra rubéola, essencial especialmente em idade fértil para evitar complicações na gravidez.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "1º DOSE - PENTAVALENTE",
    "descricao": "Primeira dose da vacina pentavalente, que protege contra cinco doenças: difteria, tétano, coqueluche, hepatite B e Haemophilus influenzae tipo b.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA BECG",
    "descricao": "Vacina BCG aplicada para prevenir formas graves de tuberculose em crianças.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA ROTA VIRUS(VO)",
    "descricao": "Vacina oral que protege contra infecções por rotavírus, causa comum de diarreia grave em bebês.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INJEÇÃO( IM) COM A MEDICAÇÃO DO PACIENTE",
    "descricao": "Administração de medicamento via intramuscular, utilizando fármaco fornecido pelo próprio paciente.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INJEÇÃO (EV) COM A MEDICAÇÃO DO PACIENTE",
    "descricao": "Administração intravenosa de medicamento trazido pelo paciente, feita com supervisão profissional.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "ESPONDILORTOSE",
    "descricao": "Condição da coluna vertebral tratada com métodos clínicos ou fisioterapêuticos para corrigir alterações posturais.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "OXIGÊNIO",
    "descricao": "Suplementação de oxigênio para pacientes com dificuldades respiratórias ou em situações de emergência.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INJECÇAO DE DIPIRONA IV",
    "descricao": "Administração intravenosa de dipirona para alívio rápido de dor ou febre.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "INJECÇAO VITAMINA C IV",
    "descricao": "Aplicação de vitamina C diretamente na veia, usada como complemento terapêutico em algumas condições.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VACINA AOS 9 MESES",
    "descricao": "Vacina aplicada aos 9 meses de idade, geralmente contra sarampo, conforme calendário vacinal.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PÓLIO (1º DOSE) - AOS 2 MESES",
    "descricao": "Primeira dose da vacina contra pólio, aplicada aos 2 meses de vida.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PÓLIO (2º DOSE) - AOS 4 MESES",
    "descricao": "Segunda dose da vacina contra pólio, aplicada aos 4 meses de idade.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PNEUMOCEO (1 - DOSE)",
    "descricao": "Primeira dose da vacina pneumocócica, que protege contra doenças como pneumonia e meningite.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PÓLIO (3º DOSE) - AOS 6 MESES",
    "descricao": "Terceira dose da vacina contra poliomielite, aplicada aos 6 meses.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SARAMPO (AOS 9 MESES) - 1º DOSE",
    "descricao": "Primeira dose da vacina contra sarampo, administrada aos 9 meses.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "SARAMPO (AOS 15 MESES) - 2º DOSE",
    "descricao": "Segunda dose da vacina contra sarampo, administrada aos 15 meses de idade.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VITAMINA A ( 1 Á 4 ANOS)",
    "descricao": "Suplementação de vitamina A para crianças de 1 a 4 anos, ajudando no desenvolvimento e prevenção da cegueira noturna.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "VITAMINA TETANO (10 ANOS PARA CIMA)",
    "descricao": "Vacina antitetânica indicada para adolescentes e adultos, especialmente após cortes ou ferimentos.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PESO (AO NASCER)",
    "descricao": "Registro do peso do recém-nascido, fundamental para avaliar o estado de saúde ao nascer.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "2º DOSE - PENTAVALENTE",
    "descricao": "Segunda dose da vacina pentavalente, reforçando a proteção contra cinco doenças.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "3º DOSE - PENTAVALENTE",
    "descricao": "Terceira dose da vacina pentavalente, finalizando o esquema básico de imunização.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "HEPATITE B (AO NASCER)",
    "descricao": "Vacinação neonatal contra hepatite B, aplicada logo após o nascimento.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PÓLIO (ZERO)",
    "descricao": "Dose inicial da vacina contra poliomielite, administrada ao nascer ou nas primeiras semanas.",
    "icone": "bi bi-hospital"
  },
  {
    "nome": "PNEUMOCEO (2 - DOSE)",
    "descricao": "Segunda dose da vacina pneumocócica para proteção contínua contra infecções graves.",
    "icone": "bi bi-hospital"
  },
  {
  nome: "2º DOSE - PENTAVALENTE",
  descricao: "Aplicação da segunda dose da vacina pentavalente, que protege contra difteria, tétano, coqueluche, hepatite B e Haemophilus influenzae tipo B.",
  icone: "bi bi-hospital"
},
{
  nome: "3º DOSE - PENTAVALENTE",
  descricao: "Aplicação da terceira dose da vacina pentavalente, fundamental para completar a imunização contra cinco doenças graves.",
  icone: "bi bi-hospital"
},
{
  nome: "HEPATITE B (AO NASCER)",
  descricao: "Vacina aplicada nas primeiras 24 horas de vida para prevenir a hepatite B, uma infecção grave do fígado.",
  icone: "bi bi-hospital"
},
{
  nome: "PÓLIO (ZERO)",
  descricao: "Dose inicial da vacina contra poliomielite, administrada por via oral, essencial para prevenir a paralisia infantil.",
  icone: "bi bi-hospital"
},
{
  nome: "PNEUMOCEO (2 - DOSE)",
  descricao: "Aplicação da segunda dose da vacina pneumocócica, que protege contra infecções como pneumonia, meningite e otite.",
  icone: "bi bi-hospital"
}

];

// Função para renderizar todos os cards em seu container
function renderizarCards(lista, containerId, categoria) {
  const container = document.getElementById(containerId);
  lista.forEach(servico => {
    const card = criarCard(servico, categoria);
    container.appendChild(card);
  });
}

// Inicialização após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  renderizarCards(consultas, "consultasContainer", "consultas");
  renderizarCards(exames, "examesContainer", "exames");
  renderizarCards(RaioX, "RaioXContainer", "RaioX");
  renderizarCards(Estomatologia, "EstomatologiaContainer", "Estomatologia");
  renderizarCards(outros, "outrosContainer", "outros");

  AOS.init(); // Inicializa animações AOS
});


// Enviar o serviço personalizado para o WhatsApp
document.getElementById("form-servico-personalizado").addEventListener("submit", function (e) {
  e.preventDefault();
  const servico = document.getElementById("servicoDesejado").value.trim();

  if (servico !== "") {
    const mensagem = `Olá, gostaria de saber se é possível realizar o seguinte serviço personalizado:\n\n"${servico}"`;
    const link = `https://wa.me/244930139090?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");

    // Mostrar confirmação
    const alerta = document.getElementById("mensagemEnviada");
    alerta.style.display = "block";
    setTimeout(() => {
      alerta.style.display = "none";
    }, 4000);
  }
});
