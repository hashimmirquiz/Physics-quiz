let questions=[
{question:"SI unit of Force?",answers:["Newton","Joule","Watt","Pascal"],correct:0},
{question:"Speed formula?",answers:["Distance/Time","Time/Distance","Mass×Velocity","Force×Area"],correct:0}
];

let currentQuestion=0;
let score=0;

function showQuestion(){
let q=questions[currentQuestion];
document.getElementById("question").innerHTML=q.question;

let html="";
q.answers.forEach((ans,i)=>{
html+=`<button onclick="checkAnswer(${i})">${ans}</button>`;
});
document.getElementById("answers").innerHTML=html;
}

function checkAnswer(i){
if(i==questions[currentQuestion].correct){
alert("Correct 🎉");
score++;
}else{
alert("Wrong ❌");
}
}

function nextQuestion(){
currentQuestion++;
if(currentQuestion<questions.length){
showQuestion();
}else{
document.getElementById("question").innerHTML="Quiz Finished 🎉";
document.getElementById("answers").innerHTML="";
document.getElementById("score").innerHTML="Score: "+score+"/"+questions.length;
}
}

let AI=[
{q:"SI unit of acceleration?",a:"m/s²"},
{q:"SI unit of power?",a:"Watt"},
{q:"SI unit of pressure?",a:"Pascal"},
{q:"Unit of current?",a:"Ampere"},
{q:"Unit of resistance?",a:"Ohm"}
];

function generateAIQuestion(){
let rand=AI[Math.floor(Math.random()*AI.length)];
let options=[rand.a,"Newton","Joule","Volt"];
options.sort(()=>Math.random()-0.5);
let correctIndex=options.indexOf(rand.a);

questions.push({
question:"AI: "+rand.q,
answers:options,
correct:correctIndex
});

currentQuestion=questions.length-1;
showQuestion();
}

showQuestion();
