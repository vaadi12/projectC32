const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     if(backgroundImg)
     background(backgroungImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
   // console.log(time)
    //change the data in JSON format
    var timejson=await time.json();
    var datetime=timejson.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour)
    // add conditions to change the background images from sunrise to sunset
      if(hour>=4&&hour<=5){
          bg="sunrise1.png";
        
      }

     else if(hour>=6&hour<=7){
        bg="sunrise2.png";
      
    }

   else if(hour>=8&&hour<=9){
        bg="sunrise3.png";
      
    }


   else if(hour>=9&&hour<=10){
        bg="sunrise4.png";
      
    }


  else  if(hour>=11&&hour<=15){
        bg="sunrise6.png";
      
    }

   else if(hour>=16&&hour<=17){
        bg="sunrise7.png";
      
    }

   else if(hour>=18&&hour<=19){
        bg="sunrise8.png";
      
    }

   else if(hour>=20&&hour<=24){
        bg="sunrise12.png";
      
    }
    
    else{
        bg="sunrise11.png";
      
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
    console.log(bg)
}
