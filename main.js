var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next selfie in 5 seconds";
    speak_data = "Taking your selfie in 10 seconds";
    speak_data = "Taking your next selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function()
    {
        image_id = "selfie_1";
        take_snapshot();
       }  ,5000);

    setTimeout(function()
    {
      image_id = "selfie_2";
        take_snapshot();
    }  ,10000);
    
    setTimeout(function()
    {
        image_id = "selfie_3";
        take_snapshot();
    }  ,15000);

}

function take_snapshot()
{
    console.log(image_id);
    
    Webcam.snap(function(data_uri){
     
        if(img_id =="selfie_1")
     {
        document.getElementById("result1").innerHTML = '<img id="selfie_1" src="'+data_uri+'">';
     }

     if(img_id =="selfie_2")
     {
        document.getElementById("result2").innerHTML = '<img id="selfie_2" src="'+data_uri+'">';
     }

     if(img_id == "selfie_3")
     {
        document.getElementById("result3").innerHTML = '<img id="selfie_3" src="'+data_uri+'">';
     }
    
    
    });
    
}
