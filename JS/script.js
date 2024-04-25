const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clear_button = document.querySelector(".clear-button");

// we will call this function while adding, deleting and checking-unchecking the task.
function allTasks(){
    let tasks = document.querySelectorAll(".pending");

    //if task's length is 0 then pending num text content will be no, if not then pending num value will be task's length
    pendingNum.textContent = tasks.length === 0 ? "no" :tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clear_button.style.pointerEvents = "auto";
        return
    }
    todoLists.style.marginTop = "0px";
    clear_button.style.pointerEvents = "none";
}


// add task while we put value in text area and press enter
inputField.addEventListener("keyup" ,(e) =>{  //Here keyup make the process of clicking event , here dont put "click"
    let inputVal = inputField.value.trim();  //remove space in front and back of the input.
    
    
    if(e.key === "Enter" && inputVal.length > 0){
                //  this keyword refers to the object that is currently executing the function.
         let liTag = ` <li class="list pending" onclick = "handleStatus(this)"> 
        <input type="checkbox" />
        <span class="task">${inputVal}</span>
        <span class="material-symbols-outlined" onclick="deleteTask(this)">delete</span>   
    </li>`;

    todoLists.insertAdjacentHTML("beforeend" , liTag);//inserting li tag inside the todolist div.
     inputField.value = ""; // Removing value from input field.
      allTasks();
    }
});

// checking and unchecking the checkbox while we click on the task.
function handleStatus(e){
    const checkbox = e.querySelector("input"); //Getting CheckBox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//deleting task while we click on the delete icon.
function deleteTask(e){
    // e.target.parentElement.remove();   //getting parent element and remove it.
    e.parentElement.remove();
    
}




// deleting all the tasks while we click on the clear button.

clear_button.addEventListener("click" , () =>{
    todoLists.innerHTML = "";
    allTasks();
})

