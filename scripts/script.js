// body
const bodyElement = document.getElementsByTagName("body")[0];

// header

const header = document.createElement("header");
header.className = "header";
header.innerHTML += `
    <div class='headerContainer'>

        <h2>the<span>quiz</span></h2>
        <a href='#'>fale comigo</a>
    
    </div>
`;

bodyElement.appendChild(header);

//seção de perguntas do site
const sectionElement = document.createElement("section");
sectionElement.className = "questions";
sectionElement.innerHTML += `

    <h2 class='title'>Bem vindo ao the quiz</h2>

    <p class='initialDescription'>
        Esse é um jogo baseado na newsletter do site <a href="https://thenewscc.com.br/" target="_blank">https://thenewscc.com.br/</a> onde você pode se divertir e se manter atualizado ao mesmo tempo! Boa sorte!
    </p>

`;

bodyElement.appendChild(sectionElement);

//div perguntas
const questionsContainer = document.createElement("div");
questionsContainer.className = "questionsContainer";
sectionElement.appendChild(questionsContainer);

//cria array de perguntas
const questions = [{
        questionDescription: "O Spotify criou uma nova funcionalidade para os usuários avaliarem seus episódios e shows favoritos, qual é o objetivo por traz da estratégia da empresa?",
        answers: [
            "Otimizar as recomendações de sua plataforma",
            "Arrumar briga com a Apple",
            "Bater de frente com o Youtube",
        ],
        answerCorrect: "alternative-0",
    },
    {
        questionDescription: "Qual foi a empresa que vendeu U$30 bilhões em tênis no ano de 2021?",
        answers: ["Nike", "Adidas", "Kichute"],
        answerCorrect: "alternative-0",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual série da HBO fez a empresa Peloton de esteiras e equipamentos para exercícios físicos, perder U$2 bi em valor de mercado?",
        answers: ["And Just Like That", "Gossip Girl", "Friends"],
        answerCorrect: "alternative-0",
    },
    {
        questionDescription: "Qual é o nome do aplicativo anunciado recentemente por Mark Zuckerberg, que possibilita criar o seu avatar para o Metaverso?",
        answers: ["Spark AR Go", "Spark TO Go", "Meta GO"],
        answerCorrect: "alternative-0",
    },
    {
        questionDescription: "Qual foi o volume de dados sequestrados do ministério da saúde no último ataque hacker que o orgão sofreu?",
        answers: ["100 terabytes", "50 terabytes", "50 gigabytes"],
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Após abrir capital na bolsa de NY e se tornar o banco mais valioso da América Latina, o Nubank foi avaliado em:",
        answers: ["U$1 Bilhão", "U$20 Milhões", "U$41,5 bilhões"],
        answerCorrect: "alternative-2",
    },
    {
        questionDescription: "Estudo sugere relação entre Viagra e prevenção de uma doença muito popular, qual seria essa doença?",
        answers: ["Cancêr", "Alzheimer", "Parkinson"],
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é o percentual de não vacinados mortos por COVID-19 no Brasil?",
        answers: ["50%", "80%", "75%"],
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Na Índia, pessoas poderam usar um app de mensagens para pedir um Uber, qual é o nome desse App?",
        answers: ["Facebook Messenger", "WhatsApp", "Telegram"],
        answerCorrect: "alternative-1",
    },
];

//renderiza as perguntas na tela
const renderAnswers = (answerArray, indexQuestion) => {
    let alternativeAnswer = "";
    answerArray.forEach(
        (element, index) =>
        (alternativeAnswer += `<li class='alternative-${index} indexQuestion-${indexQuestion}' onclick ='checkAnswer(event)'>${element}</li>`)
    );
    return alternativeAnswer;
};

questions.forEach((question, index) => {
    questionsContainer.innerHTML += `<div class='question'>
        <h3 class='questionDescription'>${question.questionDescription}</h3>

        <ul class='alternativeList'>
            ${renderAnswers(question.answers, index)}
        </ul>

    </div>`;
});

let score = 0;

//checa se a resposta clicada é a correta
function checkAnswer(event) {
    let targetAnswer = event.target;
    let answerClick = targetAnswer.className.split(" ")[0]; //indice da resposta clicada
    let questionClick = targetAnswer.className.split(" ")[1].split("-")[1]; //indice pergunta

  
    if (targetAnswer) {
       let answerParent =  targetAnswer.parentElement;
       answerParent.style.pointerEvents = 'none';
       answerParent.style.cursor = 'none';
       targetAnswer.style.backgroundColor = '#FDFF8F'
    }


    // verifica as perguntas
    if (questions[0].answerCorrect === answerClick && questionClick === "0") {
        score += 10;
    } else if (questions[1].answerCorrect === answerClick && questionClick === "1") {
        score += 10;
    } else if (questions[2].answerCorrect === answerClick && questionClick === "2") {
        score += 10;
    } else if (questions[3].answerCorrect === answerClick && questionClick === "3") {
        score += 10;
    } else if (questions[4].answerCorrect === answerClick && questionClick === "4") {
        score += 10;
    } else if (questions[5].answerCorrect === answerClick && questionClick === "5") {
        score += 10;
    } else if (questions[6].answerCorrect === answerClick && questionClick === "6") {
        score += 10;
    } else if (questions[7].answerCorrect === answerClick && questionClick === "7") {
        score += 10;
    } else if (questions[8].answerCorrect === answerClick && questionClick === "8") {
        score += 10;
    } else if (questions[9].answerCorrect === answerClick && questionClick === "9") {
        score += 10;
    }
}

// mostra a pontuação na tela
function showScore(score) {
    let scoreElement = document.createElement("h2");
    scoreElement.className = "score";

    if (score < 0 || score > 100) {
        return;
    } else if (score >= 0 && score < 70) {
        scoreElement.innerText += `Você fez ${score} pontos, tente novamente! 😞`;
    } else if (score >= 70) {
        scoreElement.innerText += `Parabéns, você fez ${score} pontos e venceu! 😀`;
    }

    sectionElement.appendChild(scoreElement);

    return scoreElement;
}

function sendAnswer(event) {
    btnClick = event.target;

    if (btnClick) {
        btnClick.style.pointerEvents = 'none';
        btnClick.style.cursor = 'none';
        btnClick.style.backgroundColor = '#ddd'
        btnClick.style.color = '#fff';
    }
    showScore(score);
}



// botão que dispara a pontuação na tela
sectionElement.innerHTML += `
    <button class='btnSendAnswers' onclick='sendAnswer(event)'>Enviar Respostas</button>
`
