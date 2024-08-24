 var screen = document.getElementById('screen');

 function addToNumber(input) {
     screen.value = screen.value + input;
    }
    
    function clearScreen(){
        screen.value = ""
    }
    function clearNumber(){
        screen.value = screen.value.toString().slice(0,-1)
    } 
    function calculateResult(){
            try{
                screen.value = eval(screen.value);
            }
            catch(error) {
                screen.value = "Error"
            }
    }