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
var track,tyre,tyrei;
var tyres = [];

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

}



