// Add these functions in your app.js file

function addItemToDoneList() {
    const todoNameInput = document.getElementById('todoName');
    const descriptionInput = document.getElementById('description');
    const addItemInput = document.getElementById('addItem');
    const todosDoneSection = document.getElementById('todosDone');

    if (addItemInput.value.trim() !== '') {
        const newItem = document.createElement('p');
        newItem.textContent = `Todo Name: ${todoNameInput.value}, Description: ${descriptionInput.value}, Item: ${addItemInput.value}`;
        todosDoneSection.appendChild(newItem);
        clearInputs();
        showTodosDoneSection();
    }
}

function clearInputs() {
    const todoNameInput = document.getElementById('todoName');
    const descriptionInput = document.getElementById('description');
    const addItemInput = document.getElementById('addItem');
    
    todoNameInput.value = '';
    descriptionInput.value = '';
    addItemInput.value = '';
}

function showTodosDoneSection() {
    const todosDoneSection = document.getElementById('todosDone');
    todosDoneSection.style.display = 'block';
}
