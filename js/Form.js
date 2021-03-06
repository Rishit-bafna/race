class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.resetbutton = createButton('reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Race......");
    this.title.position(displayWidth/2 - 50, 0);
    this.resetbutton.position(displayWidth/2+50, displayHeight/2-400);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("hey there " + player.name);
      textSize(32);
      text("press up arrow key to move up",displayWidth/3+50,displayHeight/2+25);
      text("press down arrow key to move down",displayWidth/3+50,displayHeight/2+75);
      text("try to cover best disptance to win and dont touch the tyres",displayWidth/3+50,displayHeight/2+125)
      this.greeting.position(displayWidth/2, displayHeight/5);
    });
    this.resetbutton.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      
    })
  }
}