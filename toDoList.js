//Creating a function to add a new to-do item to the list
function addTodo() {

    //Creating constants to get the input value that is entered
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value;

    //Creating a new element for the input and setting the text content to the input value
    const li = document.createElement('li');
    li.textContent = todoText;
    li.className = 'list-group-item';
        
    //Adding an event listener that will remove an item when it is clicked
    li.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });

    //Adding the new item to the bottom of the list
    document.getElementById('todoList').appendChild(li);

    //Clearing the input box after the item is added to the list
    todoInput.value = '';
}
