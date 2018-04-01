//Create a new class called Ninja with the following attributes:
//name
//health
//speed (private)
//strength (private)
//Speed and strength should be 3 by default. Health should be 100 by default.

//The Ninja class should have the following methods:

//sayName() - This should log that Ninja's name to the console.
//showStats() - This should show the Ninja's Strength and Speed, as well as their health.
//drinkSake() - This should add +10 Health to the Ninja

function Ninja(name){
  this.name = name;
  this.health = 100;

  var speed = 3;
  var strength = 3;

  this.sayName = function (){
    console.log(this.name);
  }
  this.showStats = function(){
    console.log("Health: " + this.health + " Strength: " +  strength + " Speed: "+ speed);
  }
  this.drinkSake = function(){
    this.health = this.health + 10;
    return this;
  }
  this.kick = function(ninja){
    const dmamage = strength * 5;
    ninja.health -= damage;
    console.log(ninja.name + "kicked by " + this.name + " and last 5 Health! Oh no!");
  }
}

Ninja.prototype.punch = function(ninja){
  ninja.health -= 5;
  consolelog(ninja.name + " was punched by " + this.name + " and last 5 Health!  Oh no!");
}
