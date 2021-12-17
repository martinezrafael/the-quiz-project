//Busca o elemento body
const bodyElement = document.getElementsByTagName("body")[0];

//cria uma section com a class questions que vai ser a seção de perguntas do site
const sectionElement = document.createElement("section");
sectionElement.className = "questions";

//coloca o título e a descrição inicial antes das perguntas
sectionElement.innerHTML = `<h2 class="title">Bem vindo ao the quiz</h2>
<p class="initialDescription">Esse é um jogo baseado na newsletter do site <a href="https://thenewscc.com.br/" target="_blank">https://thenewscc.com.br/</a> onde você pode se divertir e se manter atualizado ao mesmo tempo! Boa sorte!</p>`;
//cria uma div onde ficarão todas as perguntas listadas
const questionsContainer = document.createElement("div");
questionsContainer.className = "questionsContainer";

//coloca a section de perguntas dentro do body
bodyElement.appendChild(sectionElement);

//coloca o container de perguntas dentro da section de perguntas
sectionElement.appendChild(questionsContainer);

const btnSendAnswers = document.createElement('button');
btnSendAnswers.className = 'btnSendAnswer';
btnSendAnswers.innerText = 'Enviar Respostas';
btnSendAnswers.setAttribute('onclick', 'sendAnswer()');
btnSendAnswers.style.width = '100%';   
btnSendAnswers.style.padding = '10px';   
btnSendAnswers.style.backgroundColor = '#fccd07';   
btnSendAnswers.style.border = 'none';   

sectionElement.appendChild(btnSendAnswers);

//cria array de perguntas
const questions = [{
        questionDescription: "O Spotify criou uma nova funcionalidade para os usuários avaliarem seus episódios e shows favoritos, qual é o objetivo por traz da estratégia da empresa?",
        answers: ["Otimizar as recomendações de sua plataforma", "Arrumar briga com a Apple", "Bater de frente com o Youtube"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-0",
    },
    {
        questionDescription: "Qual foi a empresa que vendeu U$30 bilhões em tênis no ano de 2021?",
        answers: ["Nike", "Adidas", "Kichute"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-0",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: "alternative-1",
    },
    {
        questionDescription: "Qual é a cidade mais cara do mundo para ser viver em 2021?",
        answers: ["São Paulo (Brasil)", "Tel Aviv (Israel)", "Tokio (Japão)"],
        //aqui indica qual é o índice da reposta correta
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

    let answerClick = targetAnswer.className.split(" ")[0]; //alternative-indice
    console.log(answerClick);

    let questionClick = targetAnswer.className.split(" ")[1].split("-")[1]; //indice pergunta
    console.log(questionClick);

    if (questions[0].answerCorrect === answerClick && questionClick === "0") {
        score += 10;
    }

    if (questions[1].answerCorrect === answerClick && questionClick === "1") {
        score += 10;
    }

    if (questions[2].answerCorrect === answerClick && questionClick === "2") {
        score += 10;
    }

    if (questions[3].answerCorrect === answerClick && questionClick === "3") {
        score += 10;
    }

    if (questions[4].answerCorrect === answerClick && questionClick === "4") {
        score += 10;
    }

    if (questions[5].answerCorrect === answerClick && questionClick === "5") {
        score += 10;
    }

    if (questions[6].answerCorrect === answerClick && questionClick === "6") {
        score += 10;
    }

    if (questions[7].answerCorrect === answerClick && questionClick === "7") {
        score += 10;
    }

    if (questions[8].answerCorrect === answerClick && questionClick === "8") {
        score += 10;
    }

    if (questions[9].answerCorrect === answerClick && questionClick === "9") {
        score += 10;
    }
}

function showScore(score) {
    let scoreElement = document.createElement("h2");
    scoreElement.className = "score";

    if (score < 0 || score > 100) {
        return;
    } else if (score >= 0 && score < 70) {
        scoreElement.innerText += `Você fez ${score} pontos, tente novamente!`;
    } else if (score >= 70) {
        scoreElement.innerText += `Parabéns, você fez ${score} pontos e venceu!`;
    }

    sectionElement.appendChild(scoreElement);

    return scoreElement;
}

function sendAnswer() {
    showScore(score);
}