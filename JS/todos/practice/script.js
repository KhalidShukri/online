const taskinput = document.getElementById('task-input')
const addtaskbtn = document.getElementById('add-task')
const tasklist = document.getElementById('task-list')

addtaskbtn.addEventListener('click',addtask)

function addtask() {
    const tasktext = taskinput.value.trim();
    if (tasktext !== "") {
        const taskitem = createEl(tasktext)
        tasklist.appendChild(taskitem)
        taskinput.value =""

    } else {
        alert("Please enter a task")
    }
}

function createEl(text) {

const li = document.createElement('li')
const span = document.createElement('span')
span.textContent = text

li.appendChild(span)


const deletbtn = document.createElement('button')
deletbtn.innerText = "Delete"
deletbtn.addEventListener('click',function () {
    tasklist.removeChild(li)
    
})
li.appendChild(deletbtn)


const editbtn = document.createElement('button')
editbtn.innerText = "Edit"
editbtn.addEventListener('click', function(){
    const newtasktext =prompt("enter a new task",text)
    if (newtasktext !== '') {
        span.textContent = newtasktext

    }else {
        alert("Enter a valid task")
    }
})

li.appendChild(editbtn)
  return(li)
}

