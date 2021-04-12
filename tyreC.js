class tyreC {
    constructor() {
    
        tyre = createSprite(x,y,10,10);
        tyre.addImage(tyrei);
        tyre.scale=0.05;
        tyre.velocityX = 10;
    }
    display() {
        drawSprites();
    }

};