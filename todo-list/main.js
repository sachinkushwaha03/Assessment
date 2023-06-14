const input = document.getElementById("inputText");
const list = document.getElementById("listText");

function addTask() {
    if(input.value === ''){
        alert("Please, Enter your text");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
    }
    inputText.value = '';
    savaData();
}

function savaData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();