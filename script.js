//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
  //declare a variable named playerHealth and set it equal to the number value 15

  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName

  //declare a variable named monsterHealth and set it equal to the number value 15

//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
//Fighter class is parent class to Hero and Monster
//Fighter contains everything that both Hero and Monster have - method, properties
class Fighter{
  constructor(name){
    this.name = name;
    this.healthPoints = 15
  }
  //hero and monster will both have attack method
  //targetObj is the object representing either Hero or Monster
  attack(targetObj){
    let attackPoints = randomNum(1,6);
    targetObj.healthPoints = targetObj.healthPoints - attackPoints;
    return `${this.name} attacked ${targetObj.name}! ${this.name} did ${attackPoints} damage. ${targetObj.name} has ${targetObj.healthPoints} health points left`
  }
}

class Monster extends Fighter{
  constructor(name, superPowers){
    super(name);
    this.superPowers = superPowers;
  } 
}
 class Hero extends Fighter{
  constructor(name, weapons){
    super(name);
    this.weapons = weapons;
  }
 }
let werewolf = new Monster("Werewolf", "slash with claws")
let knight = new Hero("Knight", "sword") 
 
function playRound(hero, monster) {
  //use randomNum to return either 0 or 1
  let num = randomNum(0,2)
  //0 = player goes first, 1 = monster goes first
  
  //use if/else to determine who goes first
  if(num === 0){
  let attackMessage =   hero.attack(monster) 
  alert (attackMessage)
  if(monster.healthPoints > 0){
  let attackMessage =  monster.attack(hero)
  alert (attackMessage)
}
  }else{
   let attackMessage = monster.attack(hero)
   alert (attackMessage)
    if(hero.healthPoints > 0){
    let attackMessage =  hero.attack(monster)
    alert (attackMessage)
    }
  }
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame(hero, monster) {
  //beginning game message
  alert(
    `Hello, ${hero.name}! You are fighting ${monster.name}! Your health is at ${hero.healthPoints}, ${monster.name}'s health is at ${monster.healthPoints}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  //while takes a condition, while loops as long as the condition evaluates true
  //run until player or monster has no more health points
  while(hero.healthPoints > 0 && monster.healthPoints > 0){
    roundNumber++;
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
 alert(`It is round ${roundNumber}! ${hero.name} has ${hero.healthPoints} points left. ${monster.name} is at ${monster.healthPoints} points left.`);

   //call playRound inside the while loop
    playRound(hero, monster);
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 

  //message if the player wins
  if(hero.healthPoints > monster.healthPoints){
    alert(`${hero.name} wins! They slayed the ${monster.name} with their ${hero.weapons}`);
  }
  else if(monster.healthPoints > hero.healthPoints){
    alert(`${monster.name} has won by using their super power: ${monster.superPowers}! ${hero.name} has lost :(`);
  }
  else{
    alert(`Seems like ${hero.name} and ${monster.name} are both defeated`);
  }
}

//call playGame to start game
playGame(knight, werewolf); 