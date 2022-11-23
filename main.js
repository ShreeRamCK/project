noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('Mustache_Realtime.gif');

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + nose.x);
        console.log("nose y =" + nose.y);
       
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}



function take_snapshot(){
    save('myFilterImage.png')
}