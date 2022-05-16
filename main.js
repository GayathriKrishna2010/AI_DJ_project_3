song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristY = 0;
leftWristX = 0;

function setup() {
    canvas  = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    pose.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        rightWristX = results[0].pose.rightWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log("left Wrist X = " + leftWristX + ", left Wrist Y = " + leftWristY);
        console.log("right Wrist X = " + rightWristX + ", right Wrist Y = " + rightWristY);
    }
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}