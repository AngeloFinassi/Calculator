var screen 
function varInicialize(){
    screen = document.getElementById("screen")
}

function dell(){
    screen.value = ''
}

function dell_one(){
    screen.value = screen.value.substring(0, screen.value.length -1)
}   

function addCaracter(number=0){
    screen.value += number
}

function calculate(){
    console.log("chamou");
    var answer = screen.value;
    if (answer) {
        // CUIDADO: O uso de eval() pode ser inseguro se a entrada não for validada
        screen.value = eval(answer);
    }
}