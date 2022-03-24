var bg,bgImg;

var snowImg,snow1Img;
function setup() {
  createCanvas(800,400);
  
}
function preload() {
  bgImg=loadImage("snow2.jpg");
   snowImg=loadImage("snow4.webp")
   snow1Img=loadImage("snow5.webp")
  
}
function draw() {
  background(bgImg); 
  snowfall();
  snowfall1();
  drawSprites();

}
function snowfall(){
 if(frameCount%60==0){
  var snow=createSprite(random(100,800),-10,30,30)
  snow.addImage(snowImg)
  snow.velocityY=3;
  snow.scale=0.2;
}
}
function snowfall1(){
  if(frameCount%60==0){
   var snow1=createSprite(random(100,800),-10,30,30)
   snow1.addImage(snow1Img)
   snow1.velocityY=3;
   snow1.scale=0.2;
 }
 }