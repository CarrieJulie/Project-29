class createStone
{
    constructor(x, y, r)
    {
        let options ={
            restitution: 0.95,
            desity: 0.5
        };

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        stroke("white");
        fill("white");
        ellipse(pos.x, pos.y, this.r);
        pop();
        
    }
}