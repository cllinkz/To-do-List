"use-strict";
const addToDoButton = document.getElementById("addToDo");
const addToDoButton2 = document.getElementById("addToDo2");
const addToDoButton3 = document.getElementById("addToDo3");
const toDoContainer = document.getElementById("toDoContainer");
const toDoContainer2 = document.getElementById("toDoContainer2");
const toDoContainer3 = document.getElementById("toDoContainer3");
const inputField = document.getElementById("inputField");
const inputField2 = document.getElementById("inputField2");
const inputField3 = document.getElementById("inputField3");

console.log(addToDoButton2);
// Add new item below

const addItem = function () {
  let inputText = document.createElement("p");
  inputText.classList.add("paragraph-styling");
  inputText.innerText = inputField.value;
  toDoContainer.append(inputText);
  inputField.value = "";
  inputText.addEventListener("click", () => {
    inputText.style.textDecoration = "line-through";
  });
  inputText.addEventListener("dblclick", () => {
    inputText.remove();
  });
};

const addItem2 = function () {
  let inputText2 = document.createElement("p");
  inputText2.classList.add("paragraph-styling");
  inputText2.innerText = inputField2.value;
  toDoContainer2.append(inputText2);
  inputField2.value = "";
  inputText2.addEventListener("click", () => {
    inputText2.style.textDecoration = "line-through";
  });
  inputText2.addEventListener("dblclick", () => {
    inputText2.remove();
  });
};

const addItem3 = function () {
  let inputText3 = document.createElement("div");
  inputText3.classList.add("paragraph-styling");
  inputText3.innerText = inputField3.value;
  toDoContainer3.append(inputText3);
  inputField3.value = "";
  inputText3.addEventListener("click", () => {
    inputText3.style.textDecoration = "line-through";
  });
  inputText3.addEventListener("dblclick", () => {
    inputText3.remove();
  });
};
addToDoButton.addEventListener("click", addItem);
addToDoButton2.addEventListener("click", addItem2);
addToDoButton3.addEventListener("click", addItem3);
