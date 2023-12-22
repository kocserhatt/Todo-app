const addBtn = document.querySelector("#addBtn")
const toDoEkle = document.querySelector("#todo")
let toDo;


if(localStorage.toDo){
    toDo = JSON.parse(localStorage.toDo)
}else{
    toDo = [];
}

console.log(toDo);




function getToDo(){
    toDoEkle.innerHTML = '';
    for (let i = 0; i <toDo.length; i++) {
        toDoEkle.innerHTML += `
        <li id="${i}">
            ${toDo[i].gorev} 
            <button class="editBtn">Edit</button> 
            <button class="deleteBtn">Delete</button>
            <button class="okeyBtn">Completed</button>
        </li>`
    }
    bindDeleteBtns();
    bindEditBtns();
    bindOkeyBtns();
}



function addGorev(){
    const answer = prompt('Eklemek istediğiniz görev nedir?');
    toDo.push({gorev:answer})
    localStorage.toDo = JSON.stringify(toDo)
    bindDeleteBtns();
    bindEditBtns();
    bindOkeyBtns();
    getToDo();
}

addBtn.addEventListener('click', addGorev)


function bindDeleteBtns(){
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click', function(){
            this.parentElement.remove();
            toDo.splice(Number(this.parentElement.id), 1)
            console.log(toDo);
            localStorage.toDo = JSON.stringify(toDo)
            getToDo();
        })
    }
}

function bindEditBtns(){
    const editBtns = document.querySelectorAll('.editBtn');
    for (const editBtn of editBtns) {
        editBtn.addEventListener('click', function(){
            const answer = prompt('Neyle değiştireceksin?');
            this.previousSibling.textContent = answer
        })
    }
}


function bindOkeyBtns(){
    const okeyBtns = document.querySelectorAll('.okeyBtn');
    for(const okeyBtn of okeyBtns){
        okeyBtn.addEventListener("click",function(){
            okeyBtn.parentElement.style.textDecoration ="line-through";
        })
    }

}

getToDo();