function askUserNameQuestion(){
  var userName = prompt('Please enter your name');
var greeting = 'Hello ' + userName; 
  document.write(greeting);
      askUserAgePrompt();
}

function askUserAgePrompt(){
  var confirmAnswer = confirm('Press "ok" if over 21');
    if (confirmAnswer){
       alert('Please Visit Our Bar');
   } else {
       alert('Please Visit our family dining area')
   }
}

// var today = new Date();
var hourNow = prompt('What time is it, friend? 0-23'); 
askUserNameQuestion();
var greeting;

if (hourNow > 18 && hourNow < 24) {
  greeting = 'Good evening!  ';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'Good afternoon!  ';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'Good morning!  ';
} else {
  greeting = 'Something went wrong!  ';
}

document.write(greeting);

