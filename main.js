nosex = 0
nosey = 0

function preload(){
 
    moonch = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}

function setup(){

    canvas1 = createCanvas(400, 400)
    canvas1.position(580, 250)

    video = createCapture(VIDEO)
    video.hide()

    pn = ml5.poseNet(video, modelloaded)
    pn.on("pose", gotresult)

}

function gotresult(result){

    if(result.length > 0){

        console.log(result)

        nosex = result[0].pose.nose.x
        nosey = result[0].pose.nose.y

        
    }
}

function modelloaded(){

    console.log("Model is loaded")
}


function draw(){

    image(video, 0, 0, 400, 400)
    image(moonch, nosex - 150, nosey - 60, 70, 50)
}

function takesnap(){
    save("my_filter_image.png")
}