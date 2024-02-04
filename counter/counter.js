function increment(){
    let n = document.querySelector("#numb");
    let cValue = parseInt(n.value, );
    n.value = cValue+1;
}
function decrement() {
    const inputField = document.querySelector("#numb");
    let currentValue = parseInt(inputField.value, );
    if(inputField.value ==1 || inputField.value>1){
    inputField.value = currentValue - 1;
    }
    else{
        inputField.value = 0;
    }
}