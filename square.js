var noseX = 0;
var noseY = 0;
var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 250);
    

    canvas = createCanvas(300, 250);
    canvas.position(560, 250);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("nose x = " + noseX + "nose y =" + noseY);
        console.log("leftWrist" + leftWristX + "rightWrist =" + rightWristX);
    }
}

function modelloaded() {
    console.log('poseNet is initialized');
}

function draw() {
    background("lightseagreen");
    document.getElementById("widthandheight").innerHTML = "Width & Height will be =" + difference + "px";
    fill("aliceblue");
    square(noseX, noseY, difference);
    fill("bisque");
    textSize(difference);
    text('Nishant', 50, 100);
}


































