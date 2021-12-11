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
  },
];




//Buscar o elemento body
const bodyElement = document.getElementsByTagName("body")[0];

//criar uma section com a class questions que vai ser a seção de perguntas do site
const sectionElement = document.createElement("section");
sectionElement.className = "questions";
// console.log(sectionElement);

//criar uma div com a class questionsContainer onde ficaram todas as perguntas listadas
const questionsContainerElement = document.createElement('div');
questionsContainerElement.className = 'questionsContainer';

//criar uma div com a clas question onde vai ficar armazenada a pergunta individualmente
const question = document.createElement('div');
question.className = 'question';

