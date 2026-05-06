/* script.js - FINAL REALISTIC VERSION */

const questions = [

"👤 First, what is your full name?",

"🌍 Which region are you farming from?",

"🌱 What crop are you planning to grow this season?",

"📏 Approximately how large is your farm? (example: 3 acres)",

"💰 What is your estimated farming budget this season?",

"☁️ How do you feel about this farming season so far?",

"🌧️ Have you ever experienced major losses due to weather, pests or crop disease?",

"🛡️ Would you be interested in affordable AI-powered farm protection insurance for your crops?",

"📈 What is your main goal this season? More profit, export market, food security or higher yield?",

"🧠 Are you currently experiencing stress or pressure related to farming?",

"🚜 What farming challenge worries you most right now?"

];

let current = -1;

function nextQuestion(){

const input =
document.getElementById("answer").value;

/* VALIDATION */

if(current >= 0 && input.trim() === ""){

alert("Please answer the question first");

return;

}

/* SAVE DATA STEP BY STEP */

if(current === 0){
localStorage.setItem("farmerName", input);
}

if(current === 1){
localStorage.setItem("region", input);
}

if(current === 2){
localStorage.setItem("crop", input);
}

if(current === 3){
localStorage.setItem("farmSize", input);
}

if(current === 4){
localStorage.setItem("budget", input);
}

if(current === 5){
localStorage.setItem("feeling", input);
}

/* NEXT STEP */

current++;

if(current < questions.length){

document.getElementById("questionBox").innerHTML =
questions[current];

document.getElementById("answer").value = "";

/* UPDATE PROGRESS */

document.getElementById("stepText").innerHTML =
"Question " + (current + 1) + " of " + questions.length;

document.getElementById("progressBar").style.width =
((current + 1) / questions.length) * 100 + "%";

}else{

/* GO TO AI PROCESSING */

window.location.href = "loading.html";

}

}