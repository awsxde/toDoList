let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let clear = document.querySelector(".clear");
let tasks = document.querySelector(".tasks");

let count = 0;

function addCard(val, n) {
  tasks.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task task-${n}">
      <p class="text">${val}</p>
        <button class="del del-${n}">
          <img src="./trash-outline.svg" alt="trash" class="trash" />
        </button>
    </div>
    `
  );
}

function delHandler() {
  document.querySelectorAll(".del").forEach((i) => {
    i.addEventListener("click", () => del(i.classList[1].slice(4)));
  });
}

function del(n) {
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
