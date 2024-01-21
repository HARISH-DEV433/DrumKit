var buttonDrop = document.querySelectorAll(".drum").length;
for(var i = 0; i < buttonDrop; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonHT = this.innerHTML;
        makeSound(buttonHT);
        buttonAnimation(buttonHT);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audioOne = new Audio("sounds/tom-1.mp3");
            audioOne.play();
        break;
        case "a":
            var audioTwo = new Audio("sounds/tom-2.mp3");
            audioTwo.play();
        break;
        case "s":
            var audioThree = new Audio("sounds/tom-3.mp3");
            audioThree.play();
        break;
        case "d":
            var audioFour = new Audio("sounds/tom-4.mp3");
            audioFour.play();
        break;
        case "j":
            var audioFive = new Audio("sounds/snare.mp3");
            audioFive.play();
        break;
        case "k":
            var audioSix = new Audio("sounds/crash.mp3");
            audioSix.play();
        break;
        case "l":
            var audioSeven = new Audio("sounds/kick-bass.mp3");
            audioSeven.play();
        break;
        default: console.log(buttonHT);
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}