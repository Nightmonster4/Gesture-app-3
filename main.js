

prediction_1 ='';
prediction_2 ='';

Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

 function take_snapshot()
    {
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
       });
    }

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/F7OeyoBOI/model.json', modelloaded);

function modelloaded(){
    console.log("ModelLoaded!")
}

function speak(){
    var syth = window.speechSynthesis;
    speak_data_1 = " The first prediction is"+prediction_1;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1);

    syth.speak(utterthis);
}

function  show_emoji(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
     console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("emo1").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        
        speak();
        
        if(results[0].label == "Amazing"){
            document.getElementById("emoji1").innerHTML = "&#128076;";
        }
        if(results[0].label == "Best"){
            document.getElementById("emoji1").innerHTML = "&#128077;";
        }
        if(results[0].label == "Victory"){
            document.getElementById("emoji1").innerHTML = "&#9996;";
        }
        
    }
}
