// For Mouse Click
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonClick = this.innerHTML;
        playSound(buttonClick);
        buttonSelected(buttonClick);
    });
}
//For Key Pres
document.addEventListener("keypress", function (event)   //here we have added addEventListner to whole document(or entire web page)
{
    playSound(event.key);   //here event is a HTML event and key is its property/method so we call it using event.key
    buttonSelected(event.key);
});

// For Sound
function playSound(k) {
    switch (k) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/nopenhat.wav");
            crash.play();
            break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "u":
            let tink = new Audio("sounds/ntink.wav");
            tink.play();
            break;
        case "e":
            let clap = new Audio("sounds/nclap.wav");
            clap.play();
            break;
        case "r":
            let hithat = new Audio("sounds/nhihat.wav");
            hithat.play();
            break;
        case "f":
            let nboom = new Audio("sounds/nride.wav");
            nboom.play();
            break;

        default:
            console.log(k);
    }
}
function buttonSelected(key) {
    let selected = document.querySelector("." + key);
    selected.classList.add("pressed");
    setTimeout(function () {
        selected.classList.remove("pressed");
    }, 100);
}
