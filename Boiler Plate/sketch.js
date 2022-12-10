
var shooterImage, bulletImage, missleImage; 
var toxicSwamer, fireSwamer, bruteSwamer, swamerImage;
var bulletState = "unloaded";

function preload()
{
    shooterImage = loadAnimation("assets/PC_1.png");
    swamerImage = loadAnimation("assets/Swamer NPC_1.png","assets/Swamer NPC_2.jpg","assets/Swamer NPC_3.jpg","assets/Swamer NPC_4.jpg","assets/Swamer NPC_5.jpg","assets/Swamer NPC_6.jpg")
    bulletImage = loadImage("assets/Bullet.png");
    missleImage = loadImage("assets/Missle.png");
}

function setup ()
{
    createCanvas(1600,800);


shooter = createSprite(70, 400, 50, 50);
shooter.addAnimation("shooter", shooterImage);
    shooter.scale = 0.3;
    
    bulletState="loaded";
    var bullet = createSprite(130,shooter.y+30,20,20);
        bullet.addImage(bulletImage);
}

function draw()
{   
    background("grey");
    
    

    swamer();
    if (keyDown("space") && bulletState==="unloaded")
    {
        var bullet = createSprite(130,shooter.y+30,20,20);
        bullet.addImage(bulletImage);                                                      
        bullet.scale = 0.1;
        
       bulletState = "unloaded";
    }
    bullet.velocityX = 5;
    // console.log("mouseY", mouseY)
     shooter.y = mouseY;
    //  console.log("Y value of shooter", shooter.y);

    
    drawSprites();
}

function swamer()
{
    if(frameCount % 90 == 0)
    {
        var swamerSprite = createSprite(1560, 400, 50, 50);
        swamerSprite.addAnimation("swamer_1", swamerImage)
        swamerSprite.velocityX = -4;
        swamerSprite.scale = 1
        console.log(swamerSprite.velocityX);
    }
}

