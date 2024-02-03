function addTask(){

    const el = document.createElement("input");
    el.class = "kk";
    const l = document.createElement("input");
    l.type = "checkbox";
    l.class= "check";
    l.onchange = function(){
        checkedTask(el,l,removeItem, lineBreak);

    };
    el.className = "integr_elements";
    const lineBreak = document.createElement("br");
    const removeItem = document.createElement("input");
    removeItem.type = "button";
    removeItem.value = "delete"
    removeItem.className= "delete";
    removeItem.onclick = function() {
        removeTask(el, l, removeItem, lineBreak);
    };
    const form = document.getElementById("incomplete-list");
    form.appendChild(l);
    form.appendChild(el);
    form.appendChild(removeItem)
    form.appendChild(lineBreak);
    updateIncompleteCount();
}
function removeTask(el, l, removeItem, lineBreak) {
    
    const form = document.getElementById("incomplete-list");
    form.removeChild(el);
    form.removeChild(l);
    form.removeChild(removeItem);
    form.removeChild(lineBreak);
    updateIncompleteCount();
    
}

function removeTask2(el, l, removeItem, lineBreak) {
    
    const formComplete = document.getElementById("complete-list");
    formComplete.removeChild(el);
    formComplete.removeChild(l);
    formComplete.removeChild(removeItem);
    formComplete.removeChild(lineBreak);
   
    updateIncompleteCount();
}
function checkedTask(el,l,removeItem, lineBreak){
    if(l.checked){
        addTaskComplete(el,l,removeItem,lineBreak);

        const form = document.getElementById("incomplete-list");
        form.removeChild(el);
        form.removeChild(l);
        form.removeChild(removeItem);
        form.removeChild(lineBreak);

    }    
    updateIncompleteCount;

}

function addTaskComplete(el,l,removeItem, lineBreak){
    const form = document.getElementById("complete-list");
    l.checked = "true";
    form.appendChild(l);
    form.appendChild(el);
    form.appendChild(removeItem)
    form.appendChild(lineBreak);
    removeItem.onclick = function() {
        removeTask2(el, l, removeItem, lineBreak);
    };
    updateIncompleteCount();


}
function updateIncompleteCount() {
    const numb = document.getElementById("incomplete-list").childElementCount;
    const numb2 = document.getElementById("complete-list").childElementCount;
    const numb1 = numb/4;
    const numb3 = numb2/4;
    document.getElementById("incomp-count").innerHTML = numb1 + " incomplete";
    document.getElementById("comp-count").innerHTML = numb3 + " complete";
}