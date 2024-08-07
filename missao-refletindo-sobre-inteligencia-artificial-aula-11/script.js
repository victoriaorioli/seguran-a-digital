const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos dias de hoje, no Brasil, Saúde Pública é o nome dado às práticas e medidas de responsabilidade do Estado para garantir que todo cidadão tenha acesso à saúde física, mental e social. Essas ações são também olhadas de perto e, muitas vezes, coordenadas pela OMS (Organização Mundial da Saúde)",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Qual o principal objetivo da saúde pública? "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Saúde Pública: prática social de natureza interdisciplinar, enquanto ação coletiva tanto do Estado como da sociedade civil, destinada a proteger e melhorar a saúde das pessoas. Caracterizam-se por tarefas de condução, regulação, modulação do financiamento, vigilância do acesso e harmonização da provisão.."
            }
        ]
    },
    {
        enunciado: "Como está a saúde pública atualmente no Brasil?",
        alternativas: [
            {
                texto: "A saúde no Brasil tem avanços históricos como a descentralização, a municipalização de ações e serviços, a melhoria e a ampliação da atenção à saúde.",
                afirmacao: "A saúde no Brasil tem avanços históricos como a descentralização, a municipalização de ações e serviços, a melhoria e a ampliação da atenção à saúde.."
            },
            {
                texto: "A Constituição brasileira de 1988 diz que a saúde é direito de todos e dever do Estado.",
                afirmacao: "A saúde no Brasil tem avanços históricos como a descentralização, a municipalização de ações e serviços, a melhoria e a ampliação da atenção à saúde, o fomento à vigilância em saúde e sanitária e o controle social com a atuação dos conselhos de saúde"
            }
        ]
    },
    {
        enunciado: "O sistema de atendimento funciona de modo descentralizado e hierarquizado.",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Outro problema de saúde que que deve ser analisado com cautela é a obesidade, que cresce a níveis alarmantes"
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
