var dog , happyDog , dogImg , hDogImg;
var database;
var foodS,foodStock; 

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  hDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
 
  
  dog = createSprite(250 , 300 , 50 , 50);
  dog.addImage(dogImg);
  dog.scale = 0.2;


  foodStock = database.ref('FOOD');
  foodStock.on("value" , readStock);


}




function draw() {  
background(rgb(46 , 139 , 87));
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(hDogImg)
}

  drawSprites();
  //add styles here
  stroke("black");
  { textSize(16),  text("Food Remaining "+ foodS,180,450);}

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<= 0 ){
    x = 0;
  }
  else{
    x = x - 1
  }

 database.ref('/').update({FOOD : x})



}