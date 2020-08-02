var form,bg;

function setup(){
    createCanvas(1200,400);
    form = new Form();
    bg= loadImage("scrn.jpg")
}

function draw(){
    background(bg);
    form.display();
}