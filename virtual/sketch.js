//Create variables here
var dog, happyDog, Database, foodS, food_stock, add_food, foodobj, feed, last_fed; 

function preload()
{ dog = loadImage("doglmg.png")
  happyDog = loadImage("doglmg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(200,200,100,100);
  food_stock = database.ref('Food');
  food_stock.on("value", readStock);
}


function draw() {  
  background("46, 139, 87");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  text("food_stock: "+ food_stock, 50,5);
  text(Note_press_up_arrow_to_feed_it , 300,30 );

}

function readStock(data){
  foods = data.val();
}

function writeStock(x) {
  
  if(x<=0){
    x = 0;
  }
  
  else(
    x=x-1
  )

  database.ref('/').update({
    Food:x
  })
}