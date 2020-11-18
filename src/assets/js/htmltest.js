function namehtml()
{
  alert("Are you ready to take test?");
  

  var countDownDate = new Date("Nov 19, 2020 15:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      //document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Time expired";
        setInterval(function(){alert("Time is over")},2000);
      }
    }, 1000);

    var myQuestions = [
        {
        question: "1. HTML stands for?",
        answers: {
        a: 'High Text Machine Language'+"<br>",
        b: 'Hyper Text Machine Language '+"<br>" ,
        c: 'Hyper Text and Links Markup Language'+"<br>",
        d: 'Hyper Text Markup Language',
    
        },
        correctAnswer: 'd'
        },
        {
        question: "2. Which of the following attribute i used to provde a unique name to an element?",
        answers: {
        a: "Class"+"<br>",
        b: "Id"+"<br>",
        c: "Type"+"<br>",
        d: "None of the above"+"<br>",
        },
        correctAnswer: 'b'  
        },
        {
          question: "3. What are the types of unordered or bulleted list in html?",
          answers: {
          a: 'disc,square,triangle'+"<br>",
          b: 'polygon,triangle,circle'+"<br>",
          c: 'disc,circle,square'+"<br>",
          d: 'all of the above'+"<br>"
          },
          correctAnswer: 'c'
          },
          {
            question: "4. Which of the Following html attribute is used to define inline styles?",
            answers: {
            a: 'Style'+"<br>",
            b: 'Type'+"<br>",
            c: 'Class'+"<br>",
            d: 'None of the above'+"<br>"
            },
            correctAnswer: 'a'
            },

            {
                question: "5. A program in html can be rendered and read by -",
                answers: {
                a: 'Web Browser'+"<br>",
                b: 'Server'+"<br>",
                c: 'Interpreter'+"<br>",
                d: 'None of the above'+"<br>"
                },
                correctAnswer: 'a'
                }, 
      
                {
                  question: "6. The tagsin HTML are-",
                  answers: {
                  a: 'Case-Sensitve'+"<br>",
                  b: 'In Upper Case'+"<br>",
                  c: 'Not Case-Sensitive'+"<br>",
                  d: 'In Lower Case'+"<br>"
                  },
                  correctAnswer: 'c'
                  }, 
      
                  {
                    question: "7. Which of the following are the attributes of the tag? ",
                    answers: {
                    a: 'Method'+"<br>",
                    b: 'Action'+"<br>",
                    c: 'Both a and b'+"<br>",
                    d: 'None of these'+"<br>"
                    },
                    correctAnswer: 'c'
                    },
      
                    {
                      question: "8. The input tag is -",
                      answers: {
                      a: 'a format tag'+"<br>",
                      b: 'an empty tag'+"<br>",
                      c: 'all of the above'+"<br>",
                      d: 'none of these'+"<br>"
                      },
                      correctAnswer: 'b'
                      },
                      {
                        question: "9. Markup tags tell the web browser? ",
                        answers: {
                        a: 'How to organise the page'+"<br>",
                        b: 'How to display the page'+"<br>",
                        c: 'How to display message box on the page'+"<br>",
                        d: 'None of these'+"<br>"
                        },
                        correctAnswer: 'b'
                        },
      
                        
                      {
                        question: "10. WWW is based on which model?",
                        answers: {
                        a: 'Local-Server'+"<br>",
                        b: 'client-Server'+"<br>",
                        c: '3-Tier'+"<br>",
                        d: 'None of these'+"<br>"
                        },
                        correctAnswer: 'b'
                        },
      
          ];
          var quizContainer = document.getElementById('quiz');
          var scoreContainer = document.getElementById('score');
          var submitButton = document.getElementById('submit');
          generateQuiz(myQuestions, quizContainer, scoreContainer, submitButton);

          function generateQuiz(questions, quizContainer, scoreContainer, submitButton){
            function showQuestions(questions, quizContainer){
            // we'll need a place to store the output and the answer choices
            var output = [];
            var answers;
            // for each question...
            for(var i=0; i<questions.length; i++){
            // first reset the list of answers
            answers = [];
            // for each available answer...
            for(letter in questions[i].answers){
            // ...add an html radio button
            answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
            + '</label>'
            );
            }
            // add this question and its answers to the output
            output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
            }

            // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, scoreContainer){
// gather answer containers from our quiz
var answerContainers = quizContainer.querySelectorAll('.answers');
// keep track of user's answers
var userAnswer = '';
var numCorrect = 0;
// for each question...
for(var i=0; i<questions.length; i++){
// find selected answer
userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
// if answer is correct
if(userAnswer===questions[i].correctAnswer){
// add to the number of correct answers
numCorrect++;
// color the answers green
answerContainers[i].style.color = 'green';
}
// if answer is wrong or blank
else{
// color the answers red
answerContainers[i].style.color = 'red';
}
}
// show number of correct answers out of total
scoreContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
// show questions right away
showQuestions(questions, quizContainer);
// on submit, show results
submitButton.onclick = function(){
showResults(questions, quizContainer, scoreContainer);
}

}

}