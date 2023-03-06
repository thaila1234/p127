var song = " ";
var rwy = 0;
var rwx = 0;
var lwy = 0;
var lwx = 0;
var scoreLeftWrist = 0;
var scoreRightWrist = 0;

function preload(){
    song = loadSound("evidencias.mp3");
}

function setup(){
        canvas = createCanvas(500, 500);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);
    fill("#FF0000");
    stroke("#FFFFFF");
    if (scoreRightWrist > 0.2){
        circle(pdx, pdy, 25);
    }    
}

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function gotPoses(){

}