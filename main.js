function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    hal = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gvIQHPytV/model.json" , modelloaded);
}

function modelloaded(){
    console.log("hahahaha");
}

function elixir(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("o0").innerHTML = results[0].label;
        document.getElementById("a@").innerHTML = results[0].confidence.toFixed(2); 
    }
}

function draw(){
image(video, 0, 0, 300, 300);
hal.classify(video, elixir);
}