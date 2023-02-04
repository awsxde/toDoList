let input = document.querySelector(".input");
let add = document.querySelector(".submit");
let clear = document.querySelector(".clear");
let tasks = document.querySelector(".tasks");

let darkMode = document.querySelector(".theme");
let body = document.querySelector("body");
let isDark = false;

darkMode.addEventListener("click", () => {
  let special = document.querySelectorAll(".special");
  special.forEach((i) => i.classList.add("dark"));
  isDark = true;
});

let count = 0;

function addCard(val, n) {
  tasks.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task task-${n} ${isDark ? "dark" : "special"}">
      <p class="text">${val}</p>
        <button class="del del-${n} ${isDark ? "dark" : "special"}">
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

add.addEventListener("click", submitHandler);
clear.addEventListener("click", clearHandler);
