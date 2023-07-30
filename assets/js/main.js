const inputButton = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todoButton");
const todolist = document.querySelector(".todo-list");
const selectad = document.querySelector(".selectad");


todoButton.addEventListener("click",addTodo);

todoFilter.addEventListener("click",filterTodo);


function addTodo() {
    // input bos oldugunda eklemez.....
    if(inputButton.value === "") {
        return;

    }
 // todoinde  bir div olusturduk  addtodonun içinde  basıldıgı zamann bir div oluyor
    const todoİn = document.createElement("div");
    todoİn.classList.add("todo")
    
    const completedBtn = document.createElement("button");
    completedBtn.innerText ="+";
    completedBtn.classList.add("complete-btn");
    todoİn.appendChild(completedBtn);



    // bir li elemnet olusturuyoruz  bunu da inputbuttonun valusune esitliyoruz ve list acıyoruz.todo-item ekliyoruz

    const newTodo =document.createElement("li");
    newTodo.innerText = inputButton.value;
    newTodo.classList.add("todo-item");
    todoİn.appendChild(newTodo);

    completedBtn.addEventListener("click",function() {
        newTodo.classList.toggle("completion")
    })

    //toggle varsa  ve yoksa  bakıyor !!




    const trashButton =document.createElement("button");
    trashButton.innerText = "-";
    trashButton.classList.add("trash-btn");
     trashButton.addEventListener("click",deleteCheck)

    todoİn.appendChild(trashButton);

    todolist.appendChild(todoİn);
   

// burda  ekleme ve silme buttonlarını yaratttır
}




function deleteCheck() {
    this.parentElement.remove();
}

 function zeroInputnput() {
     inputButton.value ="";
 }


