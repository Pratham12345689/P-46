var p1,p2,p1img,p2img,bg,score,name,n;
var logo,logoImg;
var win,winImg;
var score = 0;
var box;
var edges;

function preload(){
  bg=loadImage("pic/bg.png");

  logoImg = loadImage("pic/logo.jpg");
  winImg = loadImage("pic/WIN.jpg");
  
  p1img= loadImage("pic/p11.jpg");
  p11 = loadImage("pic/p12.jpg");
  p12 = loadImage("pic/p13.jpg");
  p13 = loadImage("pic/p14.jpg");
  // p14 = loadImage("f1-4.png")  
  
  p2img= loadImage("pic/p21.jpg");
  p21 = loadImage("pic/p22.jpg");
  p22 = loadImage("pic/p23.jpg");
  p23 = loadImage("pic/p24.jpg");
  p24 = loadImage("pic/p25.jpg");
  p25 = loadImage("pic/p26.jpg");
  p25 = loadImage("pic/p27.jpg");
  
}


function setup() {
  createCanvas(1000,700);
  
 edges =  createEdgeSprite();

  p1=createSprite(90,600,90,90) ;
  p1.addImage(p1img);
  p1.scale = 0.5;
  
  p2=createSprite(800,600,90,90) ;
  p2.addImage(p2img); 
  p2.scale = 0.5;

  logo = createSprite(200,50,70,70);
  logo.addImage(logoImg);
  
  win = createSprite(450,500,100,100);
  win.addImage(winImg);
  win.visible= false;
  
}

function draw() {
  background(bg); 
  

if (score===300){
 win.visible = true;
}

box=createSprite(858,144,100,80);


p1.bounceOff(edges);
p2.bounceOff(edges);



if(keyDown("a")){
  p1.x-=6;
  p1.addImage(p11);
  
}





if(keyDown("d")){
  p1.x+=6;
   p1.addAnimation("hitting",p12);
}
 
  
if(keyDown("w")){
  p1.addImage(p12);
}
  
if(keyDown("s")){
  p1.addImage(p13);
}


if(keyDown("left")){
  p2.x-=6;
  p2.addImage(p21);
}

if(keyDown("right")){
  p2.x+=6;
  p2.addImage(p21);
}
  
if(keyDown("up")){
  p2.addImage(p22);
}

if(keyDown("down")){
  p2.addImage(p23);
}

if(p1.collide(p2)){
  score+=1;
}

drawSprites();
textSize(40);
fill("white");
textStyle(BOLD);
text("Score: "+score,800,50);

text(mouseX+','+mouseY,mouseX,mouseY);
  
}