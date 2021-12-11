//criando array de perguntas
const questions = [
    {
        questionDescription: "Pergunta número 1",
        answers: ["resposta 1", "resposta 2", "resposta 3"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 1,
    },
    {
        questionDescription: "Pergunta número 2",
        answers: ["resposta 1", "resposta 2", "resposta 3"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 0,
    },
    {
        questionDescription: "Pergunta número 3",
        answers: ["resposta 1", "resposta 2", "resposta 3"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 2,
    }
];

//Buscar o elemento body
const bodyElement = document.getElementsByTagName("body")[0];

//criar uma section com a class questions que vai ser a seção de perguntas do site
const sectionElement = document.createElement("section");
sectionElement.className = "questions";

//criar uma div com a class questionsContainer onde ficarão todas as perguntas listadas
const questionsContainer = document.createElement("div");
questionsContainer.className = "questionsContainer";


questions.forEach((question) => {
    questionsContainer.innerHTML += `<div class='question'>
        <h3 class='questionDescription'>
        ${question.questionDescription}
        </h3>
        <div class='questionAlternatives'>
            <ul class='alternativeList'>
                <li class='alternative'>${question.answers[0]}</li>
                <li class='alternative'>${question.answers[1]}</li>
                <li class='alternative'>${question.answers[2]}</li>
            </ul>
        </div>
    </div>`;
});

sectionElement.appendChild(questionsContainer);
bodyElement.appendChild(sectionElement);
// console.log(sectionElement);

const answersList = document.querySelectorAll('.alternative');

console.log(answersList);