let current_Display = "0"
let result_display = false
let input = document.querySelector(".display")
let equals = document.querySelector(".result").addEventListener('click',calc)
let result;
let rem_Btn = document.querySelector(".rem").addEventListener('click', remove)


function remove(){
    if(current_Display !== "0"){
        let rm = current_Display.slice(0, -1)
        current_Display = rm
        // console.log(current_Display)
        input.innerText = current_Display
    }
}

//this function does the evaluation of the equation
function calc(){ 
    result = eval(current_Display)
    input.innerText = result 

}





function appendToDisplay(value){
    if(current_Display ==="0" || result_display){
        current_Display = value  
        
    } else{
        current_Display += value;   
    }
    
    result_display = false
    updateDisplay(); 
}



//This updates the display input.
function updateDisplay(){
    input.textContent = current_Display   
}


//This is the part that wraps the parenthesis around the number once clicked
document.querySelector(".br").addEventListener("click", brackets)//Creates an event listener and references the brackets function
function brackets(){ 
    //Below we make sure that the current display adds the parenthesis only when
    //there is value in the input field.
    if(current_Display ==="0" || result_display){
        current_Display = value;
       
    } else{
        current_Display = input.innerText = "("+  current_Display  + ")"
    }


}

document.querySelector("#cle").addEventListener("click", clear)
function clear(){
    if(current_Display !== "0"){
        current_Display = input.innerText ="0"
        result_display = false
}
}



  

/******  e4bf75ec-16f2-41e8-992e-94068d41fde7  *******/
/******  b36b1037-d057-4329-86cf-71baa33506e8  *******/





