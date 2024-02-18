const display = document.getElementById("display");

function appendtodisplay(x){
    display.value  += x;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}
function cleardisplay(){
    display.value = "";
}
