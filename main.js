//https://teachablemachine.withgoogle.com/models/eTrBZ6CTJ/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera = document.getElementById("camera")

Webcam.attach('#camera')

function capture_image(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML= '<img id="taken_image" src='+data_uri+'>'
        
    })
}

console.log("ml5 version", ml5.version)

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eTrBZ6CTJ/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model is Loaded")
}

function checking_image(){
    img=document.getElementById("taken_image")
    classifier.classify(img,gotResults);

}

function gotResults(error,results){



if (error) {
    console.log(error)
    
} else {
    console.log(results)
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    
}
}
