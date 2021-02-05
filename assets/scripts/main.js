var vol= 1;

// 1:   Display: sound and images
// 1.1: Play the sound, including sound types and volume
document.getElementById("honk-btn").addEventListener("click", displaySound);    
function displaySound(event){
    event.preventDefault();
    if(document.getElementById('radio-air-horn').checked) {
        document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
        
      }
      else if(document.getElementById('radio-car-horn').checked) {
         document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
      }
      else if(document.getElementById('radio-party-horn').checked){
          document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
      }

      var sound =document.getElementById("horn-sound");
      sound.volume=vol;
      sound.play();
      
}  
//1.2: Show different images of sound types
document.getElementById("radio-air-horn").addEventListener("click",changeImageAir);
function changeImageAir() {
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";

}

document.getElementById("radio-car-horn").addEventListener("click",changeImageCar);
function changeImageCar() {
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";

}

document.getElementById("radio-party-horn").addEventListener("click",changeImageParty);
function changeImageParty() {
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";

}
//1.3 Show different levels using different level images
function changeVolImage(volNum){
    if(67<=volNum && volNum<=100){
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-3.svg";
    }
     else if(34 <= volNum && volNum <= 66){
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-2.svg";
     }
     else if (0 < volNum && volNum <= 33){
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-1.svg";
     }
               
    else{
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-0.svg";
    }  

    

}
//2 Volume: volume number
//2.1 Button should be disabled if volume is muted
function checkVol(){
    if(vol==0){
        document.getElementById("honk-btn").disabled = true;
     }
     else{
        document.getElementById("honk-btn").disabled = false;
     }
}
//2.2 Listen volume-number and change volume slider
document.getElementById("volume-number").addEventListener("input", changeVolNumber);
document.getElementById("volume-number").addEventListener("click", changeVolNumber);
function changeVolNumber(){
    var volume=parseInt(document.getElementById("volume-number").value);
    vol= volume/100;
    changeVolImage(volume);
    document.getElementById('volume-slider').value= volume;
    checkVol();
}


// 3:   VOLUME: volume-slider
document.getElementById("volume-slider").addEventListener("input", changeVolNumberSlide);
function changeVolNumberSlide(){
    var volume=parseInt(document.getElementById("volume-slider").value);
    vol= volume/100;
    changeVolImage(volume);
    document.getElementById('volume-number').value= volume;
    checkVol();
}
