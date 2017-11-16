// WORK IN PROGRESS!!!!!!

function Location(id,name,description)
{
	this.id = id;
	this.name = name;
	this.description = description;

function tostring()	
{ 
	return(this.id + "" + this.name + "" + this.description); 
}
	locationarray = new Array();

   locationarray.push(new location(1,"livingroom","The player heads to the living room and ends up seeing an Axe on the bookcase, which he picks up."));
   locationarray.push(new location(2,"entrance", "While heading for the steps, two zombies approach him making him use the only weapon in hand which is the axe."));
   locationarray.push(new location(3, "steps", "After killing the two zombies, the player stumbles upon a fully loaded AK-47 heading up the steps."));
   locationarray.push(new location(4, "hallway", "When the player reaches the top of the steps, he kicks down the door and enters the bedroom."));
   locationarray.push(new location(5, "room1",  "The player sees the 20 zombies in the bedroom and decides to use the Ak-47 to kill them all."));
   locationarray.push(new location(6, "bathroom", "Then the player heads to the bathroom in search of more weapons and stumbles upon a baseball bat."));
   locationarray.push(new location(7, "room2", "While entering the second room, the player spots 2 zombies, and knocks the heads of both of them using the bat."));
   locationarray.push(new location(8, "attic", "Then the player spots something shining in the attic which the player grabs which is a Machete."));
   locationarray.push(new location(9, "diningroom", "The player spots 4 zombies eating food from the table, when they see the player they try attacking him but the player kills them all with the machete."));
   locationarray.push(new location(10, "outside", "Finally, the player walks out the front door of the house with excitement because he killed all the zombies."));

}
function items(id,name,description)
{
	this.id = id;
	this.name = name;
	this.description = description;

function tostring()
{
	return(this.id + "" + this.name + "" + this.description);
}
	itemsarray = new Array();

  itemsarray.push(new items(1, "Hardware", "Axe"));
  itemsarray.push(new items(3, "Gun", "Ak-47"));
  itemsarray.push(new items(6, "Bat", "Baseball Bat"));
  itemsarray.push(new items(8, "Knife", "Machete"));
}


