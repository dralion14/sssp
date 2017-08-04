var Main = {                     // Main object
}

var widgetAPI = new Common.API.Widget();        // Creates Common module
var tvKey = new Common.API.TVKeyValue();

var doc = document; // document is defined to local varialbes
var key = doc.getElementById("key");
var welcome = doc.getElementById("welcome");

Main.onLoad = function() {             // called by body's onload event
    alert("Main.onLoad()");
    widgetAPI.sendReadyEvent();             // Sends ready message to Application Manager
    //document.getElementById("anchor").focus();    // Sets focus on anchor for handling key inputs
                                                  // from the remote control
    /**
     * JavaScript code Here!
     */
    //var mac = plugin.Execute("GetIP", "0");
    //putInnerHTML(key, mac + "|");
}

Main.keyDown = function() {            // Key handler
    var keyCode = event.keyCode;
    putInnerHTML(key, "Main Key code : " + keyCode);

    switch (keyCode) {
        case tvKey.KEY_LEFT:
            putInnerHTML(welcome, "Nice to meet you.");
            moverSlider(-1);
            break;
        case tvKey.KEY_RIGHT:
            putInnerHTML(welcome, "I'm so happy.");
            moverSlider(1);
            break;
        case tvKey.KEY_UP:
            putInnerHTML(welcome, "I Love you.");
            break;
        case tvKey.KEY_DOWN:
            putInnerHTML(welcome, "Good job.");
            break;
        case tvKey.KEY_ENTER:
            break;
        
        case tvKey.KEY_PLAY:
            moverSlider(100);
            break;
        case tvKey.KEY_STOP:
            moverSlider(0);
            break;
        case tvKey.KEY_PAUSE:
            moverSlider(0);
            break;
        case tvKey.KEY_FF:
            moverSlider(1);
            break;
        case tvKey.KEY_REW:
            moverSlider(-1);
            break;

        
        case tvKey.KEY_RETURN:
            widgetAPI.blockNavigation(event);
            // Not terminated
            break;
        case this.tvKey.KEY_EXIT:
            // Terminated by force
            break;
        default:
            break;
    }
}

function putInnerHTML(divElement, contents){
    //var divElement = document.getElementById(divID);
    widgetAPI.putInnerHTML(divElement, contents);
}

function moverSlider(move) {
    switch (move) {
        case -1:
            // Previous slide
            $('.slider').slider('prev');
            break;
        case 1:
            // Next slide
            $('.slider').slider('next');
            break;
        case 0:
            // Pause slider
            $('.slider').slider('pause');
            break;
        case 100:
            // Start slider
            $('.slider').slider('start');
            break;
    }
}
