//Function for display the values
function displayadd(val){
    document.getElementById("input").value +=val;
}
//Function for clear the screen
function clear(){
   document.getElementById("input").value.innerHTML=" ";
}
//Function for colculation
function calculate(){
    const result= document.getElementById("input");
    result.value= eval(result.value);
}