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
  // var animal = "";


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
    alert("error.");
  }


  document.getElementById("submitButton").style.visibility = "hidden";
  document.getElementById("explanation").innerHTML = animalType[type];
  // document.getElementById("picture").src = pictures[score];
}
