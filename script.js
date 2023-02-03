let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let clear = document.querySelector(".clear");
let tasks = document.querySelector(".tasks");

let count = 0;

function addCard(val, n) {
  tasks.insertAdjacentHTML(
    "afterbegin",
    `<div class="task task-${n}"><p>${val}</p><button class="del del-${n}">delete</button></div>`
  );
}

function delHandler() {
  document.querySelectorAll(".del").forEach((i) => {
    i.addEventListener("click", () => del(i, i.classList[1].slice(4)));
  });
}

function del(i, n) {
  document.querySelector(`.task-${n}`).classList.add("hide");
}

function submitHandler() {
  if (input.value.replace(/\s/g, "") !== "") {
    addCard(input.value, count);
    delHandler();
    input.value = "";
    count++;
  }
}

function clearHandler() {
  tasks.innerHTML = "";
}

submit.addEventListener("click", submitHandler);
clear.addEventListener("click", clearHandler);
