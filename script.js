





var scroll = document.getElementsByClassName("scroll")

var QA = [...document.getElementsByClassName("QA")];


var arrows = document.getElementsByClassName("arrows")
// console.log(arrows);



QA.forEach((item) => {
  item.addEventListener("click", function () {




    

    // Find the parent .questions element
    var parentQuestions = this.closest('.questions');

    // Find the .scroll and .answers elements within the parent .questions
    var currentArrows = parentQuestions.lastElementChild;
    var currentAnswers = parentQuestions.querySelector('.answers');

    // Rotate the arrows
    const degree = 180;
    
    if(currentAnswers.style.display ==="block") {
      currentArrows.style.transform = 'rotate(0deg)';

      


    }
    if(currentAnswers.style.display === "none") {
      currentArrows.style.transform = `rotate(${degree}deg)`;
      currentAnswers.style.font_weight = 18

    }

    
    


    // Toggle the display property of the answers element

    currentAnswers.style.display = (currentAnswers.style.display === "none") ? "block" : "none";
  });


})
 












