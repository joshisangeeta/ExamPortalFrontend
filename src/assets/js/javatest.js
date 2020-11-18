function name()
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
      document.getElementById("demo").innerHTML ="Time left :"+ days + "d " + hours + "h "
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
        question: " 1. Which of the following attribute is used to provide a unique name to an element?",
        answers: {
        a: 'class' +"<br>",
        b: 'id' +"<br>",
        c: 'type' +"<br>",
        d: 'None of the above'
        },
        correctAnswer: 'b'
        },
        {
        question: "2. Hyper Text Markup Language Stand For?",
        answers: {
        a: 'javascript'+"<br>",
        b: 'CSS'+"<br>",
        c: 'HTML' +"<br>",
        d: 'XHTML'
        },
        correctAnswer: 'c'
        },
        {
        question: "3. Which of the following is not a Java features?",
        answers: {
          a: 'Dynamic' +"<br>",
          b: 'Architecture Neutral' +"<br>",
          c: 'Use of pointers' +"<br>",
          d: 'Object-oriented'
        },
        correctAnswer: 'c'
        },
        {
          question: "4.  Which of the following option leads to the portability and security of Java?",
          answers: {
            a: 'Bytecode is executed by JVM' +"<br>",
            b: 'The applet makes the Java code secure and portable' +"<br>",
            c: 'Use of exception handling' +"<br>",
            d: 'Dynamic binding between objects'
          },
        correctAnswer: 'a'
        },
        {
          question: "5. _____ is used to find and fix bugs in the Java programs.",
          answers: {
            a: 'JVM' +"<br>",
            b: 'JRE' +"<br>",
            c: 'JDK' +"<br>",
            d: 'JDB'
            },
          correctAnswer: 'd'
          },
          {
            question: "6.What is the return type of the hashCode() method in the Object class?",
            answers: {
            a: 'Object' +"<br>",
            b: 'int' +"<br>",
            c: 'long' +"<br>",
            d: 'void'
            },
            correctAnswer: 'b'
            },
            {
              question: "7.Which of the following creates a List of 3 visible items and multiple selections abled?",
              answers: {
              a: 'new List(false, 3)' +"<br>",
              b: 'new List(3, true)' +"<br>",
              c: 'new List(true, 3)' +"<br>",
              d: 'new List(3, false)'
              },
              correctAnswer: 'b'
              },
              {
              question: "8. In which process, a local variable has the same name as one of the instance variables?",
              answers: {
              a: 'Serialization' +"<br>",
              b: 'Variable Shadowing' +"<br>",
              c: 'Abstraction' +"<br>",
              d: 'Multi-threading'
              },
              correctAnswer: 'b'
              },
              {
               question: "9. Which package contains the Random class?",
               answers: {
                a: 'java.util package' +"<br>",
                b: 'java.lang package' +"<br>",
                c: 'java.awt package' +"<br>",
                d: 'java.io package'
                
                },
                correctAnswer: 'a'
                },
                
                
                {
                  question: "10.Which of the following is an immediate subclass of the Panel class?",
                  answers: {
                   a: 'Applet class' +"<br>",
                   b: 'Window class' +"<br>",
                   c: 'Frame class' +"<br>",
                   d: 'Dialog class'
                   },
                   correctAnswer: 'a'
                   }
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
     numCorrect = 0;
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
    return numCorrect;
    }
    // show questions right away
    showQuestions(questions, quizContainer);
    // on submit, show results
    submitButton.onclick = function(){
 
      var num = showResults(questions, quizContainer, scoreContainer);
           
          axios.get('http://localhost:8085/web/scores', {
            params: {
              id: num
            }
          } )
  .then(function (response) {
    alert("success");
  })
  .catch(function (error) {
    alert("error");
  });
  
  //e.preventDefault();
          
      return     showResults(questions, quizContainer, scoreContainer);
      
    }
    }
 
}


