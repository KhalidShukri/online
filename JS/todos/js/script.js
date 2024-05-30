const taskinput = document.getElementById('task-input')
const addtaskbutton = document.getElementById('add-task')
const tasklist = document.getElementById('task-list')



// set or add an event listener to add task button
addtaskbutton.addEventListener('click',addtask)
addtaskbutton.addEventListener('click',function (event){
    if (event.key === 'Enter'){
        addtask
    }

})

// a fucntion to add a new task
function addtask() {
    const tasktext = taskinput.value.trim();
    if (tasktext !== "") {
        const taskitem = createTaskItem(tasktext)
        tasklist.appendChild(taskitem)
        taskinput.valye =""

    } else {
        alert("Please enter a atsk")
    }
}


// Afuction to craeate a task item

function createTaskItem(text) {
    // craeted li
    const li = document.createElement('li');
    // created span
    const span = document.createElement('span')
    // putting text in span
    span.textContent = text;
    // <l1><span>text</span></li>
    li.appendChild(span)
    // CREATE BUTTON
const DeleteButton = document.createElement('button')
// INSERT DELETE TEXT
DeleteButton.textContent = 'delete'

DeleteButton.addEventListener('click',function () {
    tasklist.removeChild(li);
});
    li.appendChild(DeleteButton)

    const editbutton = document.createElement('button')
    editbutton.textContent = 'edit'
    editbutton.addEventListener('click', function () {
        const newtasktext = prompt('enter new task text',text);
        
        if (newtasktext !== null && newtasktext.trim() !== ('')){
            span.textContent = newtasktext.trim();

        } else if(newtasktext === null) {

        } else{
            alert('please provide a valid task!')
        }
    })
    li.appendChild(editbutton)

    return li;
}
