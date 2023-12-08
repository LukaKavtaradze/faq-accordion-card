







var QA = document.getElementsByClassName("QA")
const questionsArray = [...QA]


var arrows = document.getElementsByClassName("arrows")
// // console.log(arrows);

let openQuestion = null


questionsArray.forEach((question) => {
  question.addEventListener("click", function () {

    var parentQuestions = this.closest('.questions');

    // // Find the .scroll and .answers elements within the parent .questions
    var currentArrows = parentQuestions.lastElementChild;
    // var currentAnswers = parentQuestions.querySelector('.answers');

    // // Rotate the arrows
    const degree = 180;



    

 if(question == openQuestion) {
  question.nextElementSibling.style.display = "none"
  openQuestion = null
 }
 else{
  if(openQuestion != null) {
    


    openQuestion.nextElementSibling.style.display  =  "none"
    
    

  }
 
  question.nextElementSibling.style.display = "block"
  openQuestion = question
 }

 



    


  
    

    if(question.nextElementSibling.style.display ==="block") {


      currentArrows.style.transform = 'rotate(180deg)';

      


    }
    if(question.nextElementSibling.style.display === "none") {
      currentArrows.style.transform = `rotate(0deg)`;

    }

    
    


    
  });


})
 










