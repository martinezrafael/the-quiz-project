//Busca o elemento body
const bodyElement = document.getElementsByTagName("body")[0];

//cria uma section com a class questions que vai ser a seção de perguntas do site
const sectionElement = document.createElement("section");
sectionElement.className = "questions";

//coloca o título e a descrição inicial antes das perguntas
sectionElement.innerHTML = `<h2 class="title">Bem vindo ao the quiz</h2>
<p class="initialDescription">Esse é um jogo baseado na newsletter do site <a href="https://thenewscc.com.br/" target="_blank">https://thenewscc.com.br/</a> onde você pode se divertir e se manter atualizado ao mesmo tempo! Boa sorte!</p>`

//cria uma div onde ficarão todas as perguntas listadas
const questionsContainer = document.createElement("div");
questionsContainer.className = "questionsContainer";

//coloca a section de perguntas dentro do body
bodyElement.appendChild(sectionElement);

//coloca o container de perguntas dentro da section de perguntas
sectionElement.appendChild(questionsContainer);

//cria array de perguntas
const questions = [
    {
        questionDescription: "Pergunta número 1",
        answers: ["resposta 1", "resposta 2", "resposta 3"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 'alternative-2'
    },
    {
        questionDescription: "Pergunta número 2",
        answers: ["resposta 21", "resposta 22", "resposta 23"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 'alternative-1'
    },
    {
        questionDescription: "Pergunta número 3",
        answers: ["resposta 31", "resposta 32", "resposta 33"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 'alternative-2'
    }
];

//renderiza as perguntas na tela
const renderAnswers = (answerArray, indexQuestion) => {
    let alternativeAnswer = ''
    answerArray.forEach((element, index) =>  alternativeAnswer += `<li class='alternative-${index} indexQuestion-${indexQuestion}' onclick ='checkAnswer(event)'>${element}</li>`)
    return alternativeAnswer;
}

questions.forEach((question, index) => {
    questionsContainer.innerHTML += `<div class='question'>
        <h3 class='questionDescription'>${question.questionDescription}</h3>

        <ul class='alternativeList'>
            ${renderAnswers(question.answers, index)}
        </ul>

    </div>`

});


let score = 0;

//checa se a resposta clicada é a correta
function checkAnswer(event) {
    let targetAnswer = event.target;

    let answerClick = targetAnswer.className.split(' ')[0]; //alternative-indice
    console.log(answerClick);

    let questionClick = targetAnswer.className.split(' ')[1].split('-')[1]; //indice pergunta
    console.log(questionClick);

    if (questions[0].answerCorrect === answerClick && questionClick === '0') {
        score += 10;
    }

    if (questions[1].answerCorrect === answerClick && questionClick === '1') {
        score += 10;
    }

    if (questions[2].answerCorrect === answerClick && questionClick === '2') {
        score += 10;
    }
    
   
}




