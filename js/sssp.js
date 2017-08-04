var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

function log(text){
    console.log(text);
};
// Show alert in console
function alert(text){
    log('>> ' + text);
};

function toast(text){
    //Materialize.Toast.removeAll();
    Materialize.toast(text, 2000);
};
