
var cat,mouse,ground,catImg1,mouseImg1,mouseImg2,mouseImg3,groundImg1,catImg2,catImg3;
function preload() {
    //load the images here
catImg=loadImage("images/cat1.png");
mouseImg=loadImage("images/mouse1.png");
groundImg=loadImage("images/garden.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadAnimation("images/cat4.png")
mouseImg2=loadAnimation("images/mouse3.png","images/mouse4.png");
mouseImg3=loadAnimation("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 ground=createSprite(500,400,20,20);
ground.scale=1;
ground.addImage(groundImg);
mouse=createSprite(200,700,40,40);
mouse.scale=0.1;
mouse.addImage(mouseImg);
cat=createSprite(900,700,40,40)
cat.scale=0.1;
cat.addImage(catImg);
}

function draw() {
background(255);
    //Write condition here to evalute if tom and jerry collide
    
if(cat.x-mouse.x<cat.width/2-mouse.width/2+50){
cat.velocityX=0
cat.addAnimation("stopCat",catImg3);
cat.changeAnimation("stopCat")
mouse.addAnimation("stopMouse",mouseImg3)
mouse.changeAnimation("stopMouse");
}
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg2)
    cat.changeAnimation("catRunning")
    mouse.addAnimation("mouseRunning",mouseImg2);
    mouse.changeAnimation("mouseRunning");
}
}
