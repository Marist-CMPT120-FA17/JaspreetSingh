gItems = new Array();

function items(id, name, description)
   {
       this.id = id;
       this.name = name;
       this.description = description;
       this.toString = function () {return(this.id + "" + this.name + "" + this.description); };
   }

function Location(id,name,description, item)
{
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
    this.toString = function () {return(this.id + "" + this.name + "" + this.description); };
}
 
//initialize items
var item1 = new items(0, "Axe", "You found an Axe");
var item2 = new items(2, "AK-47", "You found an Ak-47");
var item3 = new items(5, "Baseball Bat", "You found a Baseball Bat");
var item4 = new items(7, "Machete", "You found a Machete");

//intitialize locations
var l_livingroom = new Location(0,"livingroom","The player heads to the living room. There is an Axe on the bookcase, which the player can pick up.", item1);
var l_entrance = new Location(1,"entrance", "While heading for the steps, two zombies approach the player. The player may kill the zombies with a random weapon automatically selected from their inventory.");
var l_steps = new Location(2, "steps", "The player heads to the steps. The player sees a fully loaded AK-47 heading up the steps, which the player can pick up.", item2);
var l_hallway = new Location(3, "hallway", "When the player reaches the top of the steps, he kicks down the door and enters the bedroom.");
var l_room1 = new Location(4, "room1", "The player sees the 20 zombies in the bedroom. The player may kill the zombies with a random weapon automatically selected from their inventory.");
var l_bathroom = new Location(5, "bathroom", "The player heads to the bathroom in search of more weapons and stumbles upon a baseball bat, which the player may pick up.", item3);
var l_room2 = new Location(6, "room2", "While entering the second room, the player spots 2 zombies. The player may kill the zombies with a random weapon automatically selected from their inventory.");
var l_attic = new Location(7, "attic", "Then the player spots something shining in the attic. It is a Machete, which the player can pick up.", item4);
var l_diningroom = new Location(8, "diningroom", "The player spots 4 zombies eating food from the table, when they see the player they try attacking him. The player may kill the zombies with a random weapon automatically selected from their inventory.");
var l_outside = new Location(9, "outside", "Finally, the player walks out of the zombie ridden house.");

//intitialize global location array
var gLocations = [l_livingroom, l_entrance, l_steps, l_hallway, l_room1, l_bathroom, l_room2, l_attic, l_diningroom, l_outside];



function livingroom() { 
  if (Loc0 == false) {
    Loc0 = true;
    uscore += 5;
    updateScore();

  }
  //document.getElementById("Take_Weapon").disabled = false;
  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;
}  

function entrance() {
    if (Loc1== false) {
    Loc1 = true;
    uscore += 5;
    updateScore();
 }
 
  //document.getElementById("Take_Weapon").disabled = true;
  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function steps() {
  if (Loc2 == false) {
    Loc2 = true;
    uscore += 5;
    updateScore();  
 
 }
  //document.getElementById("Take_Weapon").disabled = false;
  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function hallway() {
  if (Loc3 == false) {
    Loc3 = true;
    uscore += 5;
    updateScore();
   
}
  //document.getElementById("Take_Weapon").disabled = true;
  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;

}

function room1() {
  if (Loc4 == false) {
    Loc4 = true;
    uscore += 5;
    updateScore();
}
  //document.getElementById("Take_Weapon").disabled = true
  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}

function bathroom() {
  if (Loc5 == false) {
    Loc5 = true;
    uscore += 5;
    updateScore();
    
}
  //document.getElementById("Take_Weapon").disabled = true;
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}

function room2() {
  if (Loc6 == false) {
    Loc6 = true;
    uscore += 5;
    updateScore();
    
}
  //document.getElementById("Take_Weapon").disabled = true;
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function attic() {
   if (Loc7 == false) {
    Loc7 = true;
    uscore += 5;
    updateScore();

}
  //document.getElementById("Take_Weapon").disabled = false;
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function diningroom() {
  if (Loc8 == false) {
    Loc8 = true;
    uscore += 5;
    updateScore();

}
  //document.getElementById("Take_Weapon").disabled = true;
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function outside() {
  if (Loc9 == false) {
    Loc9 = true;
    uscore += 5;
    updateScore();

}
  //document.getElementById("Take_Weapon").disabled = true;
  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;
}




