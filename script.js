
var scroll = document.getElementsByClassName("scroll")

var QA = document.getElementsByClassName("QA");

for (var i = 0; i < scroll.length; i++) {
  scroll[i].addEventListener("click", function () {
    console.log("Question clicked:", this);

    // Find the parent .questions element

    
    var parentQuestions = this.closest('.questions');

    // Find the .scroll and .answers elements within the parent .questions
    var currentScroll = parentQuestions.querySelector('.scroll');
    var currentAnswers = parentQuestions.querySelector('.answers');

    // Toggle the "active" class on the clicked question
    this.classList.toggle("active");

    

    
    // Toggle the display property of the answers element
    if (currentAnswers.style.display === "block" || currentAnswers.style.display === "") {
      currentAnswers.style.display = "none";
    } else {
      currentAnswers.style.display = "block";
    }
  });
}











