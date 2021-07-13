noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    canvas=createCanvas(600,500)
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose',gotPoses);

    function modelLoaded(){
        console.log ('PoseNet Is Intialized');
    }
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX="+ noseX+"noseY="+noseY);

        console.log(results);
        leftWristX= results[0].leftWrist.x;
        rightWristY= results[0].pose.rightWrist.x;
        diffrence= floor(leftWristX - rightWristX);

        console.log("leftWristX="+ leftWristX +"rightWristX="+rightWristX+"difference="+difference);
    }
}

