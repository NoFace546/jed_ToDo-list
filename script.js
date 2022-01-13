

var text = document.getElementById("text");
var button = document.getElementById("button");
var toDoList = document.getElementById("toDoList");
var CompletedTask = document.getElementById("CompletedTask");
var nrCompleted = 0;

CompletedTask.innerText = "Number of completed tasks: " + nrCompleted;

button.addEventListener("click", function(){
    var paragraph = document.createElement("p")
    paragraph.innerText = text.value;
    paragraph.classList.add("paragraph-style")
    toDoList.appendChild(paragraph);
    text.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
        nrCompleted = nrCompleted + 1;
        CompletedTask.innerText = "Number of completed tasks: " + nrCompleted ;
    
    paragraph.addEventListener("dblclick", function(){
        toDoList.removeChild(paragraph);
        nrCompleted = nrCompleted -2;
        CompletedTask.innerText = "Number of completed tasks: " + nrCompleted ;



    })
    })
    
})





