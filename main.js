//Generate Random numbers
var nums = [0,1,2,3,4,5,6,7,8],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}


//Questions and answers arrays
var questions = [
  "What is your favorite way to travel?",
  "What's your favorite season of the year?",
  "How do you prefer to dine?",
  "Choose your favorite meal:",
  "Let's get some exercise! Choose an activity:",
  "What are you most likely to eat after a stressful day?",
  "When you have something exciting to share, how do you tell people?",
  "Who is your ideal mentor?",
  "How would you describe your perfect home?"
];
// //
var aAnswers = [
  "airplane",
  "Spring",
  "at a restaurant",
  "steak, rare",
  "skiing",
  "nothing",
  "I jump around",
  "Kermit the Frog",
  "Waterfront property"
];
//
var bAnswers = [
  "boat",
  "Summer",
  "takeout",
  "all greens, please",
  "surfing",
  "vegan grilled cheese",
  "I keep it to myself",
  "Mark Zuckerberg",
  "Very tidy"
];
//
var cAnswers = [
  "car",
  "Autumn",
  "delivery",
  "seafood",
  "boxing",
  "something sweet",
  "I grab everyone's attention",
  "Professor Dumbledore",
  "Cozy and warm"
];
//
var dAnswers = [
  "bicylce or walk",
  "Winter",
  "cook at home",
  "I prefer a balanced meal",
  "trampoline",
  "everything in sight",
  "I spread the news like crop disease",
  "Beyonce",
  "Kind of messy but has a good view"
];


// Insert Quiz Questions
document.getElementById("q1").innerHTML = questions[ranNums[0]];
document.getElementById("oneA").innerHTML = aAnswers[ranNums[0]];
document.getElementById("oneB").innerHTML = bAnswers[ranNums[0]];
document.getElementById("oneC").innerHTML = cAnswers[ranNums[0]];
document.getElementById("oneD").innerHTML = dAnswers[ranNums[0]];
//
document.getElementById("q2").innerHTML = questions[ranNums[1]];
document.getElementById("twoA").innerHTML = aAnswers[ranNums[1]];
document.getElementById("twoB").innerHTML = bAnswers[ranNums[1]];
document.getElementById("twoC").innerHTML = cAnswers[ranNums[1]];
document.getElementById("twoD").innerHTML = dAnswers[ranNums[1]];
//
document.getElementById("q3").innerHTML = questions[ranNums[2]];
document.getElementById("threeA").innerHTML = aAnswers[ranNums[2]];
document.getElementById("threeB").innerHTML = bAnswers[ranNums[2]];
document.getElementById("threeC").innerHTML = cAnswers[ranNums[2]];
document.getElementById("threeD").innerHTML = dAnswers[ranNums[2]];
//
//
document.getElementById("q4").innerHTML = questions[ranNums[3]];
document.getElementById("fourA").innerHTML = aAnswers[ranNums[3]];
document.getElementById("fourB").innerHTML = bAnswers[ranNums[3]];
document.getElementById("fourC").innerHTML = cAnswers[ranNums[3]];
document.getElementById("fourD").innerHTML = dAnswers[ranNums[3]];
//
document.getElementById("q5").innerHTML = questions[ranNums[4]];
document.getElementById("fiveA").innerHTML = aAnswers[ranNums[4]];
document.getElementById("fiveB").innerHTML = bAnswers[ranNums[4]];
document.getElementById("fiveC").innerHTML = cAnswers[ranNums[4]];
document.getElementById("fiveD").innerHTML = dAnswers[ranNums[4]];
//
document.getElementById("q6").innerHTML = questions[ranNums[5]];
document.getElementById("sixA").innerHTML = aAnswers[ranNums[5]];
document.getElementById("sixB").innerHTML = bAnswers[ranNums[5]];
document.getElementById("sixC").innerHTML = cAnswers[ranNums[5]];
document.getElementById("sixD").innerHTML = dAnswers[ranNums[5]];
//
//
document.getElementById("q7").innerHTML = questions[ranNums[6]];
document.getElementById("sevenA").innerHTML = aAnswers[ranNums[6]];
document.getElementById("sevenB").innerHTML = bAnswers[ranNums[6]];
document.getElementById("sevenC").innerHTML = cAnswers[ranNums[6]];
document.getElementById("sevenD").innerHTML = dAnswers[ranNums[6]];
//
document.getElementById("q8").innerHTML = questions[ranNums[7]];
document.getElementById("eightA").innerHTML = aAnswers[ranNums[7]];
document.getElementById("eightB").innerHTML = bAnswers[ranNums[7]];
document.getElementById("eightC").innerHTML = cAnswers[ranNums[7]];
document.getElementById("eightD").innerHTML = dAnswers[ranNums[7]];
//
document.getElementById("q9").innerHTML = questions[ranNums[8]];
document.getElementById("nineA").innerHTML = aAnswers[ranNums[8]];
document.getElementById("nineB").innerHTML = bAnswers[ranNums[8]];
document.getElementById("nineC").innerHTML = cAnswers[ranNums[8]];
document.getElementById("nineD").innerHTML = dAnswers[ranNums[8]];

// Check quiz questions
function check(){

  var question1 = document.slide1.question1.value;
  var question2 = document.slide2.question2.value;
  var question3 = document.slide3.question3.value;
  var question4 = document.slide4.question4.value;
  var question5 = document.slide5.question5.value;
  var question6 = document.slide6.question6.value;
  var question7 = document.slide7.question7.value;
  var question8 = document.slide8.question8.value;
  var question9 = document.slide9.question9.value;

  var aChosen = 0;
  var bChosen = 0;
  var cChosen = 0;
  var dChosen = 0;


  // Question 1
    if (question1 == "a") {
      aChosen++;
    }

    if (question1 == "b") {
      bChosen++;
    }

    if (question1 == "c") {
      cChosen++;
    }

    if (question1 == "d") {
      dChosen++;
    }

// Question 2
    if (question2 == "a") {
      aChosen++;
    }

    if (question2 == "b") {
      bChosen++;
    }

    if (question2 == "c") {
      cChosen++;
    }

    if (question2 == "d") {
      dChosen++;
    }

  // Question 3
    if (question3 == "a") {
      aChosen++;
    }

    if (question3 == "b") {
      bChosen++;
    }

    if (question3 == "c") {
      cChosen++;
    }

    if (question3 == "d") {
      dChosen++;
    }

   // Question 4
    if (question4 == "a") {
      aChosen++;
    }

    if (question4 == "b") {
      bChosen++;
    }

    if (question4 == "c") {
      cChosen++;
    }

    if (question4 == "d") {
      dChosen++;
    }
  // Question 5
    if (question5 == "a") {
      aChosen++;
    }

    if (question5 == "b") {
      bChosen++;
    }

    if (question5 == "c") {
      cChosen++;
    }

    if (question5 == "d") {
      dChosen++;
    }

  //Question 6
    if (question6 == "a") {
      aChosen++;
    }

    if (question6 == "b") {
      bChosen++;
    }

    if (question6 == "c") {
      cChosen++;
    }

    if (question6 == "d") {
      dChosen++;
    }

  // Question 7
    if (question7 == "a") {
      aChosen++;
    }

    if (question7 == "b") {
      bChosen++;
    }

    if (question7 == "c") {
      cChosen++;
    }

    if (question7 == "d") {
      dChosen++;
    }

   // Question 8
    if (question8 == "a") {
      aChosen++;
    }

    if (question8 == "b") {
      bChosen++;
    }

    if (question8 == "c") {
      cChosen++;
    }

    if (question8 == "d") {
      dChosen++;
    }

   // Question 9
    if (question9 == "a") {
      aChosen++;
    }

    if (question9 == "b") {
      bChosen++;
    }

    if (question9 == "c") {
      cChosen++;
    }

    if (question9 == "d") {
      dChosen++;
    }


  // // determine animal
  var animalType = ["You're an amphibian!", "You're a reptile!", "You're a bird!", "You're a mammal!"];
  var max = Math.max(aChosen, bChosen, cChosen, dChosen);
  var type;

  if (max == aChosen) {
    type = 0;
  } else if (max == bChosen) {
    type = 1;
  } else if (max == cChosen) {
    type = 2;
  } else if (max == dChosen) {
    type = 3;
  } else {
    alert("Error.");
  }


  document.getElementById("submitButton").style.visibility = "hidden";
  document.getElementById("explanation").innerHTML = animalType[type];
  // document.getElementById("picture").src = pictures[score];
}
