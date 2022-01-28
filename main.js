rwx = 0
lwx = 0
diff = 0
function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    canvas = createCanvas(500,500)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function gotPoses(results) {
    if (results.length>0) {
        rwx = results[0].pose.rightWrist.x
        lwx = results[0].pose.leftWrist.y
        diff = floor(lwx-rwx)
        console.log(results)
    }
}

function modelLoaded() {
    console.log("Model Loaded")
}

function draw(){
    background('#75ed75')
    textSize(diff)
    fill('#f00')
    text('Chintu - Whitehat Jr.', 15, 400)
}