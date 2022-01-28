const screen = document.getElementById("screen");

function evaluate(str) {
  
   
    let newstr = "";
    newstr = str.replace("÷","/");
    newstr = newstr.replace("π","Math.PI")
    
    newstr = newstr.replace("^","**")
    newstr = newstr.replace("e","Math.E")
    console.log(newstr);
    // newstr = mathFun(newstr,'Math.sqrt',"√");
    return newstr;
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

    function plusMinus() {
        if (screen.innerText.charAt(0) == "-") {
            screen.innerText = screen.innerText.substring(1,screen.innerText.length);
        }else{
            screen.innerText = "-"+screen.innerText;
        }
    }


    function ln() {
        let expression = evaluate(screen.innerHTML);
        screen.innerHTML = Math.log(expression)
    }

    function log() {
            let expression = evaluate(screen.innerHTML);
            screen.innerHTML=Math.log10(expression);
    }

    function tenPower() {
        let expression = evaluate(screen.innerHTML);
        screen.innerHTML=Math.pow(10,expression);
    }

    function exp() {
        let expression = evaluate(screen.innerHTML);
        screen.innerHTML=Math.exp(expression);
        
    }

    function abs() {
        let expression = evaluate(screen.innerHTML);
        screen.innerHTML=Math.abs(expression);
    }

    
    function squareRoot() {
        let expression=evaluate(screen.innerHTML);
        screen.innerHTML=Math.sqrt(expression)
    }


  
// Other Functions
// round, ceil, floor

   function round() {
    let expression=evaluate(screen.innerHTML);
    screen.innerHTML=Math.round(expression)
   }

   function ceil() {
    let expression=evaluate(screen.innerHTML);
    screen.innerHTML=Math.ceil(expression)
   }

   function floor() {
    let expression=evaluate(screen.innerHTML);
    screen.innerHTML=Math.floor(expression)
   }