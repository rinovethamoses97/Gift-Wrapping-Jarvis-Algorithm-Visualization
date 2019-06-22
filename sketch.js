var points=[];
var no_of_points=50;
var hull=[];
var index=0;
var p;
var q;
var leftMostX;
var leftMostPoint;
var start=true;
function setup(){
    createCanvas(500,500);
    for(var i=0;i<no_of_points;i++){
        points.push(new Point(i));
    }
    leftMostPoint=points[0];
    leftMostX=points[0].x;
    for(var i=1;i<points.length;i++){
        if(points[i].x<leftMostX){
            leftMostX=points[i].x;
            leftMostPoint=points[i];
        }
    }
    p=leftMostPoint;
}
function orientation(p,q,r){
    var val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y); 
    if(val>0){
        return true;
    }
    else{
        return false;
    }
}
function draw(){
    frameRate(3);
    background(0);
    hull.push(p);
    q=points[floor(random(points.length))];
    for(var i=0;i<points.length;i++){
        var r=points[i];
        if(orientation(p,r,q)){
            q=points[i];
        }
    }
    p=q;
    if(p==leftMostPoint){
        console.log("Done");
        stroke(255,0,0);
        strokeWeight(2);
        noFill();
        beginShape();
        vertex(hull[hull.length-1].x,hull[hull.length-1].y);
        vertex(hull[0].x,hull[0].y)
        endShape();
        noLoop();
    }
    stroke(255,0,0);
    strokeWeight(2);
    noFill();
    beginShape();
    for(var i in hull){
        vertex(hull[i].x,hull[i].y);
    }
    endShape();
    for(var i in points){
        points[i].show();
    }
}
