
let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', function(event) {
     {
        buttonText = event.target.innerText;
        console.log('Button text is ', buttonText);
        
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'back'){
            backspace = screen.value;
            temp = backspace.slice(0,-1);
            screenValue = temp;
            screen.value = screenValue;}
            
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    }})
}