class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    car1 = createSprite(270,200);
    car1.addImage("car1",car1I);
    car2 = createSprite(470,200);
    car2.addImage("car2",car2I);
    car3 = createSprite(670,200);
    car3.setCollider("rectangle",0,0,30,30,0);
    car3.addImage("car3",car3I)
    car4 = createSprite(870,200);
    car4.addImage("car4",car4I);
    cars = [car1, car2, car3, car4];
  }

  play(){
 form.hide();

    Player.getPlayerInfo();
    if( car1.isTouching(tyre)){
      game.end();
     }
     
     if( car2.isTouching(tyre)){
      game.end();
     }
     if(car3.isTouching(tyre)){
      game.end();
     }
     if( car4.isTouching(tyre)){
      game.end();
     }
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      
 
      
    

      var index = 0;

      var x = 175;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y = cars[index-1].y
        }
     
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=20;
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=20;
      player.update();
    }

    if(player.distance>4000){
      gameState = 2;
    }
    drawSprites();
  }
  end(){
    console.log("game ended");
  }
}