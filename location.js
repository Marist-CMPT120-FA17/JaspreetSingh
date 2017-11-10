function livingroom() {
  if (Loc1 == false) {
    Loc1 = true;
    uscore += 5;
    updateScore();
    var message = "The player heads to the living room and ends up seeing an axe on the bookcase, which he picks up.";
    updateDisplay(message);
  } else {
    var message = "The player heads to the living room and ends up seeing an axe on the bookcase, which he picks up.";
    updateDisplay(message);
  }
  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;
}  

function entrance() {
    if (Loc2 == false) {
    Loc2 = true;
    uscore += 5;
    updateScore();
   var message = "While heading for the steps, two zombies approach him making him use the only weapon in hand which is the axe.";
   updateDisplay(message);
 } else {
     var message = "While heading for the steps, two zombies approach him making him use the only weapon in hand which is the axe.";
     updateDisplay(message);
 }
 
   updateDisplay(message);

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}
function steps() {
  if (Loc3 == false) {
    Loc3 = true;
    uscore += 5;
    updateScore();
   var message = "After killing the two zombies, the player stumbles upon a fully loaded AK-47 heading up the steps.";
   updateDisplay(message);

   
 } else {
     var message = "After killing the two zombies, the player stumbles upon a fully loaded AK-47 heading up the steps.";
     updateDisplay(message);
 }

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function hallway() {
  if (Loc4 == false) {
    Loc4 = true;
    uscore += 5;
    updateScore();
   var message = "When the player reaches the top of the steps, he kicks down the door and enters the bedroom.";

   updateDisplay(message);
} else {
     var message = "When the player reaches the top of the steps, he kicks down the door and enters the bedroom.";
     updateDisplay(message);

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}
}
function room1() {
  if (Loc5 == false) {
    Loc5 = true;
    uscore += 5;
    updateScore();
    var message = "The player sees the 20 zombies in the bedroom and decides to use the Ak-47 to kill them all.";
    updateDisplay(message);
} else {
    var message = "The player sees the 20 zombies in the bedroom and decides to use the Ak-47 to kill them all.";
    updateDisplay(message);
}

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}

function bathroom() {
  if (Loc6 == false) {
    Loc6 = true;
    uscore += 5;
    updateScore();
    var message = "Then the player heads to the bathroom in search of more weapons and stumbles upon a baseball bat."; 
    updateDisplay(message);
} else {
    var message = "Then the player heads to the bathroom in search of more weapons and stumbles upon a baseball bat."; 
    updateDisplay(message);
}
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}

function room2() {
  if (Loc7 == false) {
    Loc7 = true;
    uscore += 5;
    updateScore();
    var message = "While entering the second room, the player spots 2 zombies, and knocks the heads of both of them using the bat."; 

    updateDisplay(message);
} else {
    var message = "While entering the second room, the player spots 2 zombies, and knocks the heads of both of them using the bat."; 
    updateDisplay(message);
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function attic() {
   if (Loc8 == false) {
    Loc8 = true;
    uscore += 5;
    updateScore();
    var message =  "Then the player spots something shining in the attic which the player grabs which is a machete.;"

    updateDisplay(message);    
} else {
   var message =  "Then the player spots something shining in the attic which the player grabs which is a machete.;"
   updateDisplay(message);    

}
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}
function diningroom() {
  if (Loc9 == false) {
    Loc9 = true;
    uscore += 5;
    updateScore();
    var message = "The player spots 4 zombies eating food from the table, when they see the player they try attacking him but the player kills them all with the machete.";
    updateDisplay(message);
} else {
    var message = "The player spots 4 zombies eating food from the table, when they see the player they try attacking him but the player kills them all with the machete.";
    updateDisplay(message);

}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}
function outside() {
  if (Loc10 == false) {
    Loc10 = true;
    uscore += 5;
    updateScore();
   var message = "Finally, the player walks out the front door of the house with excitement because he killed all the zombies.";
   updateDisplay(message);
}  else {
   var message = "Finally, the player walks out the front door of the house with excitement because he killed all the zombies.";
   updateDisplay(message);

}
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;
}
