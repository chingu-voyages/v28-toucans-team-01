
//Generate Random numbers
var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
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
  "The world's GIANT CREATURES are in a fight for domination! Which one do YOU want to WIN?",
  "What famous MOVIE character best describes YOU?",
  "How would you describe your PERFECT home environment?",
  "Let's get some heavy EXERCISE! Choose an activity!",
  "How would your FRIENDS best DESCRIBE you?",
  "HOW you eat is just as important as WHAT you eat! SO, HOW do you EAT?",
  "How do you typically react to STRESSFUL SITUATIONS?",
  "What is your FAVORITE way to TRAVEL?",
  "What's your favorite SEASON of the year?",
  "CHOOSE your favorite MEAL:",
  "What are you most likely to EAT after a STRESSFUL day?",
  "When you have something EXCITING to share, how do you TELL people?",
  "Who is your IDEAL MENTOR?",
  "How would you describe your PERFECT HOME?"
];
// //
var aAnswers = [
  "Godzilla",
  "Dr. Hannibal Lecter",
  "Tropical Island",
  "Sunbathing (really??)",
  "Clever and cunning",
  "Fast. I barely taste food.",
  "Use techniques like meditation to stay calm.",
  "Train",
  "Summer",
  "Steak, rare",
  "Nothing",
  "I keep it to myself",
  "Professor Snape",
  "Plenty of windows and light"
];
//
var bAnswers = [
  "King Kong",
  "The Incredible Hulk",
  "Cozy mountain lodge",
  "Distance running",
  "Social and protective",
  "I prefer sharing my dining experiences with friends and family.",
  "Call my friends and vent my frustration.",
  "Bicycle or Walk",
  "Winter",
  "I prefer a balanced meal",
  "Some berries or salmon",
  "I grab everyone's attention",
  "Mufasa the Lion",
  "Underground bunker"
];
//
var cAnswers = [
  "Mothra",
  "Wonder Woman",
  "Top floor penthouse",
  "Trampoline!",
  "Courageous and proud",
  "Usually fast, but I often can't eat too much.",
  "Usually, I just sit and think it through. I'll come up with a solution.",
  "Airplane",
  "Autumn",
  "All greens, please",
  "Vegan grilled cheese",
  "I spread the news like crop disease",
  "Doctor Strange",
  "Treehouse"
];
//
var dAnswers = [
  "The Megalodon",
  "Jaws",
  "Boathouse on the river",
  "Swimming",
  "Quick and adaptable",
  "I'm already thinking of my next meal.",
  "I just go with the flow, y'know? Not much bothers me.",
  "Boat",
  "Spring",
  "Seafood",
  "Everything in sight",
  "I jump around",
  "Kermit the Frog",
  "Waterfront property"
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

//last slide moves to conclusion slide
var radios = document.forms["slide9"].elements["question9"];
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        $('#carouselExampleIndicators').carousel('next');
        check();
        // alert("Worked");
    }
}

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


  // message, avatar, and background image arrays
  var animalMessage = [
    //birds [0]
    ["You're an eagle!", "You're an owl!", "You're a peacock!", "You're a penguin!"],
    //fish and amphibians [1]
    ["You're a frog!", "You're a manta ray!","You're a salamander!", "You're a shark!"],
    //mammals [2]
    ["You're a bear!", "You're an elephant!", "You're a gorilla!", "You're a wolf!"],
    //reptiles [3]
    ["You're an alligator!", "You're an iguana!", "You're a snake!", "You're a turtle!"]
  ];

  var animalType = [
    //birds [0]
    ["images/birds/eagleavatar.png", "images/birds/owlavatar.png", "images/birds/peacockavatar.png", "images/birds/peguinavatar.png"],
    //fish and amphibians [1]
    ["images/fish/frogavatar.png", "images/fish/mantarayavatar.png","images/fish/salamanderavatar.png", "images/fish/sharkavatar.png"],
    //mammals [2]
    ["images/mammals/bearavatar.png", "images/mammals/elephantavatar.png", "images/mammals/gorillaavatar.png", "images/mammals/wolfavatar.png"],
    //reptiles [3]
    ["images/reptiles/alligatoravatar.png", "images/reptiles/iguanaavatar.png", "images/reptiles/snakeavatar.png", "images/reptiles/turtleavatar.png"]
  ];

  var background = [
    //birds [0]
    ["background_images/eaglebackground.png", "background_images/owlbackground.png", "background_images/peacockbackground.png", "background_images/penguinbackground.png"],
    //fish and amphibians [1]
    ["background_images/frogbackground.png", "background_images/mantaraybackground.png","background_images/salamanderbackground.png", "background_images/sharkbackground.png"],
    //mammals [2]
    ["background_images/bearbackground.png", "background_images/elephantbackground.png", "background_images/gorillabackground.png", "background_images/wolfbackground.png"],
    //reptiles [3]
    ["background_images/alligatorbackground.png", "background_images/iguanabackground.png", "background_images/snakebackground.png", "background_images/turtlebackground.png"]
  ];

  // determine animal
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

  randImg = Math.floor(Math.random() * 4 );

  document.getElementById("animalMessage").innerHTML = animalMessage[type][randImg];
  document.getElementById("animalImage").src = animalType[type][randImg];
  document.getElementById("backgroundImage").src = background[type][randImg];
  //hide slide indicator numbers
  document.querySelector("#carouselExampleIndicators > ol").style.visibility = "hidden";

  // document.getElementById("downloadImage").href = animalType[type][randImg];

}
