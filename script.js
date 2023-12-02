let question1 = document.getElementById("question1")
let question2 = document.getElementById("question2")
let question3 = document.getElementById("question3")
let question4 = document.getElementById("question4")
let question5 = document.getElementById("question5")



let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
let answer5 = document.getElementById("answer5")



question1.style.cursor = "pointer"
question1.addEventListener("click",change1)

function change1(){
    question1.style.fontWeight = 700;
    question1.style.color = " black"
    answer1.textContent = "There is no limit on team members for the Premium plan."
    answer1.style.color = "red"
}





question2.style.cursor = "pointer"
question2.addEventListener("click",change2)

function change2(){
    question2.style.fontWeight = 700;
    question2.style.color = " black"
    answer2.textContent = "No more than 2GB. All files in your account  must fit your allotted storage space."
    answer2.style.color = "#787887"
}

question3.style.cursor = "pointer"
question3.addEventListener("click",change3)

function change3(){
    question3.style.fontWeight = 700;
    question3.style.color = " black"
    answer3.textContent = "Sign in with your ID. Then click Password & Security, Change Password, and follow the onscreen instructions."
    answer3.style.color = "#787887"
}


question4.style.cursor = "pointer"
question4.addEventListener("click",change4)

function change4(){
    question4.style.fontWeight = 700;
    question4.style.color = " black"
    answer4.textContent = "Yes! Send us a message and we’ll process your request no questions asked."
    answer4.style.color = "#787887"
}


question5.style.cursor = "pointer"
question5.addEventListener("click",change5)

function change5(){
    question5.style.fontWeight = 700;
    question5.style.color = " black"
    answer5.textContent = "24/7 Live Phone & Chat Support"
    answer5.style.color = "#787887"
}




















