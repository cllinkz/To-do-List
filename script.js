'use-strict';
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// Add new item below

const addItem = function () {
  let inputText = document.createElement('p');
  inputText.classList.add('paragraph-styling');
  inputText.innerText = inputField.value;
  toDoContainer.append(inputText);
  inputField.value = '';
  inputText.addEventListener('click', () => {
    inputText.style.textDecoration = 'line-through';
  });
  inputText.addEventListener('dblclick', () => {
    inputText.remove();
  });
};

const removeItem = function () {};

addToDoButton.addEventListener('click', addItem);
