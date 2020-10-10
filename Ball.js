class Ball {
    constructor(x,y,radius){
        isStatic:false,
        restitution=0.3,
        friction=0.5,
        density=1.2
        ellipse(x,y,10,10)
    } 
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}