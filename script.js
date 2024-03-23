let input = document.querySelector("#inputText");
const add = document.querySelector("#add-btn");
const list = document.querySelector("#list-container")

add.addEventListener("click", () => {
    if(input.value === ''){
        alert("tast must not be empty");
    }
    else{
        let item = document.createElement("li")
        item.innerText = input.value;
        input.value = "";
        list.appendChild(item);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        item.appendChild(span);
    }
    saveData();
})

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function getData(){
    list.innerHTML = localStorage.getItem("data");
}
getData();