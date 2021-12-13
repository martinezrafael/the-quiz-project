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
        answerCorrect: 1 // Resposta 2
    },
    {
        questionDescription: "Pergunta número 2",
        answers: ["resposta 1", "resposta 2", "resposta 3"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 0 //Resposta 1
    },
    {
        questionDescription: "Pergunta número 3",
        answers: ["resposta 1", "resposta 2", "resposta 3"],
        //aqui indica qual é o índice da reposta correta
        answerCorrect: 2 //Resposta 3
    }
];

//renderiza as perguntas na tela
questions.forEach((question) => {
    questionsContainer.innerHTML += `<div class='question'>
        <h3 class='questionDescription'>
        ${question.questionDescription}
        </h3>
        <div class='questionAlternatives'>
            <ul class='alternativeList'>
                <li class='alternative' onclick = 'checkAnswer()'>${question.answers[0]}</li>
                <li class='alternative' onclick = 'checkAnswer()'>${question.answers[1]}</li>
                <li class='alternative' onclick = 'checkAnswer()'>${question.answers[2]}</li>
            </ul>
        </div>
    </div>`;
});



//checa se a resposta clicada é a correta
function checkAnswer() {
   
}


let score = 50;

//isso deve ser disparado quando clicar na ultima pergunta
function showScore () {
    if (score > 0 && score < 70) {

        let resultContainer = document.createElement('div');
        resultContainer.innerHTML += `<h3>Você fez ${score} pontos, não foi o suficiente! Tente mais uma vez.</h3>`
        sectionElement.appendChild(resultContainer);
    
    } else if (score <= 100) {
    
        let resultContainer = document.createElement('div');
        resultContainer.innerHTML += `<h3>Parabéns! Você fez ${score} pontos e venceu!!</h3>`
        sectionElement.appendChild(resultContainer);
    
    } else {
    
        let resultContainer = document.createElement('div');
        resultContainer.innerHTML += `<h3>Ocorreu um erro!</h3>`
        sectionElement.appendChild(resultContainer);
    
    }
}

showScore();

