const questions = [
    {
        'que' : 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct' : 'a'
    },
    {
        'que': "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a"
    },
    {
        'que': "What year was JavaScript launched?",
        'a' : "1996",
        'b' : "1995",
        'c' : "1994",
        'd' : "none of the above",
        'correct': "b"
    },
]

let index = 0;
let total = questions.length;
let right=0, 
wrong=0;
const quesbox = document.getElementById("quesbox")
const optionInputes = document.querySelectorAll('.options')

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
  const data = questions [index]
//   console.log(data)
  quesbox.innerText = `${index+1}) ${data.que}`;
  optionInputes[0].nextElementSibling.innerText = data.a;
  optionInputes[1].nextElementSibling.innerText = data.b;
  optionInputes[2].nextElementSibling.innerText = data.c;
  optionInputes[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions [index]
    const ans = getAnswer()  
    if (ans === data.correct) {
       right++;
    }else {
       wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputes.forEach(
        (input) => {
              if (input.checked) {
                answer = (input.value)
              } 
        }
    )
    return answer;
}

const reset = () => {
    optionInputes.forEach (
        (input) => {
              input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = ` 
    <div style = "text-align:center">
    <h3> Thank You For Playing the Quiz</h3>
    <h2>${right} / ${total} are Correct</h2>
    </div>
    `
}
// initial call
loadQuestion ();