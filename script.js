const inputText = document.getElementById("input-text");
const btn = document.getElementById("btn");
const taskList = document.querySelector(".taskList");

btn.addEventListener('click' , ()=>{
    if(inputText.value == ""){
        alert("Please Write Something")
    }
    else{
        let li = document.createElement('li');
    li.innerHTML = inputText.value;
    // console.log(inputText.value);
    taskList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "❌";
    li.appendChild(span);
    }
    inputText.value = "";
    saveToLocalStorage();
})

taskList.addEventListener('click' , (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentNode.remove();
    }
    saveToLocalStorage();
    
})

const saveToLocalStorage = ()=>{
    localStorage.setItem("listData" , taskList.innerHTML);
}

const getFromLocalStorage = ()=>{
    let data = localStorage.getItem("listData");
    taskList.innerHTML = data;
}

getFromLocalStorage();
