class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
            this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
attach(x){
    this.sling.bodyA = x ;
}
    display(){
      push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            
                strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                   

        }

        pop();
    }
    
}