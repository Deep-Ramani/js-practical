const screen = document.getElementById("screen");

function evaluate(str) {
  

    newstr = str.replace("÷","/");
    return str;
}


function calculate(){
    let expression = evaluate(screen.innerHTML);
    console.log(expression);
    screen.innerHTML = eval(expression);
}

function backspace(){
    let str = screen.innerHTML;
    screen.innerHTML = str.slice(0,str.length-1)
}


function clrscr(){
    screen.innerHTML = " "
}


