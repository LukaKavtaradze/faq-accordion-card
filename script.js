













var QA = document.getElementsByClassName("QA")
const questionsArray = [...QA]


var arrows = document.getElementsByClassName("arrows")
// // console.log(arrows);

let openQuestion = null;


questionsArray.forEach((question) => {
  question.addEventListener("click", function () {


 if(question == openQuestion) {

  question.nextElementSibling.style.display = "none"
  question.parentElement.parentElement.lastElementChild.style.transform = "rotate(0deg)"
 
  openQuestion = null
 }


 else{
  if(openQuestion != null) {
    openQuestion.nextElementSibling.style.display  =  "none"
    openQuestion.parentElement.parentElement.lastElementChild.style.transform = "rotate(0deg)"




    
  }
  question.nextElementSibling.style.display = "block"
  question.parentElement.parentElement.lastElementChild.style.transform = "rotate(180deg)"
  
  question.style.color = "#1E1F36"
  openQuestion = question
 }

 




    


    
    


    
  });


})
 










