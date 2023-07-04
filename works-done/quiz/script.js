const quiz_details=[
    {
        question:'What is computer organization?',
        a:'Structure and behaviour of a computer system as observed by the user',
        b:'Structure of a computer system as observed by the developer',
        c:'Structure and behaviour of a computer system as observed by the developer',
        d:'All of the above',
        correct:'a',
    },
    {
        question:'Which of the following is a type of computer architecture?',
        a:'Microarchitecture',
        b:'Harvard Architecture',
        c:'Von-Neumann Architecture',
        d:'All of the above',
        correct:'d',
    },
    {
        question:'What is the full form of ISA?',
        a:'Industry Standard Architecture',
        b:'International Standard Architecture',
        c:'International American Standard',
        d:'None of the above',
        correct:'c',
    },
    {
        question:'Which of the following is the fullform of CISC?',
        a:'Complex Instruction Sequential Compilation',
        b:'Complete Instruction Sequential Compilation',
        c:'Computer Integrated Sequential Compiler',
        d:'Complex Instruction Set Computer',
        correct:'d',
    },
    {
        question:'What does a foreign key combined with a primary key create?',
        a:'Network model between the tables that connect them',
        b:'Parent-Child relationship between the tables that connects them',
        c:'One to many relationship between the tables that connects them',
        d:'All of the above',
        correct:'a',
    }
]

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quiz_details[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
    if (answer){
        if (answer===quiz_details[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz<quiz_details.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=` <h2> You got ${score}/${quiz_details.length} correct</h2> 
            <button onclick="location.reload()">Restart Quiz</button> `
        }
    }
})