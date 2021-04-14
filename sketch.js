var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars, car1, car2, car3, car4;
var car1I,car2I,car3I,car4I;
var player1,player2,player3,player4;
var track,tyre,tyre1,tyre2,tyrei;
var tyres = [tyre,tyre1,tyre2];

function preload(){
  car1I = loadImage("images/car1.png");
  car2I = loadImage("images/car2.png");
  car3I = loadImage("images/car3.png");
  car4I = loadImage("images/car4.png");
  track = loadImage("images/track.png");
  tyrei = loadImage("images/tyre.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  player1 = database.ref('player1');
  player2 = database.ref('player2');
  player3 = database.ref('player3');
  player4 = database.ref('player4');
}


function draw(){

   if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  if(frameCount%80===0){
    tyre = createSprite(0,random(300,500,800),10,10);
    tyre.addImage(tyrei);
    tyre.scale=0.05;
    tyre.velocityX=10;
 
  }
  if(frameCount%120===0){
    tyre1 = createSprite(0,random(200,400,700),10,10);
    tyre1.addImage(tyrei);
    tyre1.scale=0.05;
    tyre1.velocityX=10;

  }
  
  

  
}




