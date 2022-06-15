let display = document.getElementById('display');

//get the buttons values in array using Array.from function
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    //add click eventListener to all buttons of array using
    //callback function
    //e = event
    button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);

        switch(e.target.innerText){

            case 'C':
                display.innerText = '';
                break;

            case '←':
                //delete back digit of the value
                display.innerText = display.innerText.slice(0, -1);
                break;

            case '=':

                try
                {
                    //calculate the value
                    display.innerText = eval(display.innerText);
                    break;
                }
                catch{
                    //display error message to the display
                    display.innerText = 'Error';
                    break;
                }
        
            default:
                //display the buttons value to the display
                display.innerText += e.target.innerText;
        }
        
    });
});