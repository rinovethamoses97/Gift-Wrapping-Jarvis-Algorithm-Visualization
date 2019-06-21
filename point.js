class Point{
    constructor(i){
        this.x=random(width);
        this.y=random(height);
        this.index=i;
    }
    show(){
        stroke(255);
        strokeWeight(4);
        point(this.x,this.y);
    }
}