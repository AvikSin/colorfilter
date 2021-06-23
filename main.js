function preload()
{

}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,200,100,220,200);
    fill("red");
    stroke("red")
    circle(40,40,80);
    circle(40,350,80); 
    circle(550,40,80);
    circle(550,350,80);
    fill("#87CEEB")
    stroke("#87CEEB")
    rect(80,30,430,30);
    rect(80,330,430,30);
    rect(30,75,30,240);
    rect(540,75,30,240);
    
}
function take_snapshot()
{
    save('selfie.png');
}
                                                                                                                                          
                                                               
                                                                                     