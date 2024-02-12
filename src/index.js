let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight")

//DEteect touch device
const isTouchDevice = () =>{
    try{
        //we try to create a touchevent it qould fail for most desktops
        document.createEvent("TouchEvent")
        return true
    } catch(e){
        return false
} 
}

function getMousePosition(e) {
    mouseX = !isTouchDevice() ? e.pageX :e.touches[0].pageX
    mouseY = !isTouchDevice() ? e.pageY :e.touches[0].pageY

    flashlight.style.setProperty("--Xpos",mouseX + "px" );
    
    flashlight.style.setProperty("--Ypos",mouseY + "px" );
}

document.addEventListener("mousemove",getMousePosition);

document.addEventListener("touchmove",getMousePosition)