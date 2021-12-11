class Butterflies{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.image = loadImage("butterflies.png");
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > 300){

            Matter.Body.setPosition(this.rain, {x:random(0,700), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        image(this.image,this.rain.position.x,this.rain.position.y,50,30)
    }
}