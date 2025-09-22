var input = document.getElementById("input")
var button = document.getElementById("button")
var listcontainer = document.getElementById("listcontainer")

function addtask(){
    if(input.value == ""){
        alert("Enter a task first")
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
    }
    input.value = "";
    savedata()
}
    button.addEventListener(`click`, () =>{
        addtask()
    }) 
    listcontainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){ 
            e.target.classList.toggle("checked")
           savedata()
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove()  
            savedata()
        }
    }, false) 
    function savedata(){
        localStorage.setItem("data", listcontainer.innerHTML)
    }
    function showdata(){
        listcontainer.innerHTML = localStorage.getItem("data")
    }
    showdata()