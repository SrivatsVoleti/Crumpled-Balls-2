class DustbinImg {
    constructor(x,y){
        var options = {
            isStatic:true,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,0,0,options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
      }
    }
