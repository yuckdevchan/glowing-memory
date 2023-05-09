var super_idol = new Audio('super_idol.mp3')
var pipe = new Audio('pipe.mp3')
var dong = new Audio ('mao_zedong.mp3')

var on = false

function stop_deglow() {
    on = false
    super_idol.pause();
    dong.pause();
    document.getElementById("deglow_button").style.color = "black";
    document.getElementById("deglow_button").style.backgroundColor = "white";
    document.getElementById("deglow_button").style.borderColor = "black";
}

function deglow() {
    if (on == false) {
        on = true
        super_idol.play();
        pipe.play();
        document.getElementById("deglow_button").style.color = "white";
        document.getElementById("deglow_button").style.backgroundColor = "greenyellow";
        document.getElementById("deglow_button").style.borderColor = "white";
        document.getElementById("deglow_button").innerHTML("Play / Pause")
    } else {
        stop_deglow()
    }
}

function next() {
    dong.play();
    super_idol.pause(); 
}

function last() {
    dong.pause();
    super_idol.play();
}
