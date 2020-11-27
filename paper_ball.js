class PaperBall {
    constructor(x,y){
        var options = {
            friction:1.2,
            density:3
        };
        this.body = Bodies.circle(x,y,23,options);
        this.radius = 70;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    };
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
      };
};