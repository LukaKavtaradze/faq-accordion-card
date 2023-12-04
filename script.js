// let question1 = document.getElementById("question1")
// let question2 = document.getElementById("question2")
// let question3 = document.getElementById("question3")
// let question4 = document.getElementById("question4")
// let question5 = document.getElementById("question5")

// let answer1 = document.getElementById("answer1")
// let answer2 = document.getElementById("answer2")
// let answer3 = document.getElementById("answer3")
// let answer4 = document.getElementById("answer4")
// let answer5 = document.getElementById("answer5")

// let answers =  document.querySelectorAll("#answers")

// // let arrows = document.getElementsByClassName("arrows")

// const QA = ["login", "pass", "xui", "demon", "ablabla"];

// const scrolls = document.querySelectorAll("#scroll");

// const answers = document.querySelectorAll("#answers")

// scrolls.forEach((scroll) => {
//   scroll.addEventListener("click", () => {
//     scroll.style.background = "black";
//     answers.forEach((answer,index) => {
//          answer.textContent = QA[index];
//     answer.style.color = "red";
//     answer.style.fontSize = "13px";

//     })

//   });
// });

// console.log(scrolls);

const QA = [
  "There is no limit on team members for the Premium plan.",
  "No more than 2GB. All files in your account must fit your allotted storage space.",
  "Sign in with your ID. Then click Password & Security, Change Password, and follow the onscreen instructions.",
  "Yes! Send us a message and we’ll process your request no questions asked.",
  "24/7 Live Phone & Chat Support",
];

const scrolls = document.querySelectorAll("#scroll");
const answers = document.querySelectorAll("#answers");
const questions = document.querySelectorAll("#QA")
const arrows = document.querySelectorAll("#arrows");

scrolls.forEach((scroll, index) => {
  scroll.addEventListener("click", () => {;

    const question = questions[index]
    question.style.color = "#1E1F36"
    question.style.font_size = "20px"
    question.style.font_family = "Kumbh Sans";
    question.style.font_weight=  "700";

    const arrow = arrows[index]
    arrow.style.cursor = "pointer";
    

    // Use index to get the corresponding answer element
    const answer = answers[index];
    answer.textContent = QA[index];
    answer.style.color = "#787887";
    answer.style.font_family = "Kumbh Sans";
    answer.style.font_size = "12px";
    answer.style.font_style= "normal";
    answer.style.font_weight= "400";
        answer.line_height=  "18px";

  });
});

console.log(scrolls);

// function change(){

// }

// scroll.addEventListener("click", () => {
//     question1.style.color = " black"
//     answer1.textContent = "There is no limit on team members for the Premium plan."
//     answer1.style.color = "red"
//     answer1.style.width = "100%"

// })

// question1.style.cursor = "pointer"
// question1.style.color = "red"
// question1.addEventListener("click",change1)

// arrows.style.cursor= "pointer"
// arrows.addEventListener("click", ()=>{

//     question1.style.color = " black"
//     answer1.textContent = "There is no limit on team members for the Premium plan."
//     answer1.style.color = "red"
//     answer1.style.width = "100%"
// }

// )

// function change1(){
//     question1.style.fontWeight = 700;
//     question1.style.color = " black"
//     answer1.textContent = "There is no limit on team members for the Premium plan."
//     answer1.style.color = "red"
//     answer1.style.width = "100%"
// }

// question2.style.cursor = "pointer"
// question2.addEventListener("click",change2)

// function change2(){
//     question2.style.fontWeight = 700;
//     question2.style.color = " black"
//     answer2.textContent = "No more than 2GB. All files in your account  must fit your allotted storage space."
//     answer2.style.color = "#787887"
//     answer2.style.width = "100%"
// }

// question3.style.cursor = "pointer"
// question3.addEventListener("click",change3)

// function change3(){
//     question3.style.fontWeight = 700;
//     question3.style.color = " black"
//     answer3.textContent = "Sign in with your ID. Then click Password & Security, Change Password, and follow the onscreen instructions."
//     answer3.style.color = "#787887"
//     answer3.style.width = "100%"
// }

// question4.style.cursor = "pointer"
// question4.addEventListener("click",change4)

// function change4(){
//     question4.style.fontWeight = 700;
//     question4.style.color = " black"
//     answer4.textContent = "Yes! Send us a message and we’ll process your request no questions asked."
//     answer4.style.color = "#787887"
//     answer4.style.width = "100%"
// }

// question5.style.cursor = "pointer"
// question5.addEventListener("click",change5)

// function change5(){
//     question5.style.fontWeight = 700;
//     question5.style.color = " black"
//     answer5.textContent = "24/7 Live Phone & Chat Support"
//     answer5.style.color = "#787887"
//     answer5.style.width = "100%"
// }

// var acc = document.getElementsByClassName("conteiner");
// var questColor = document.getElementsByClassName("info");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
