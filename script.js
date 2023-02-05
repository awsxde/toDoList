const selectAll = (x) => document.querySelectorAll(`.${x}`);
const select = (x) => document.querySelector(`.${x}`);

let count = 0;
let isDark = false;
let add = select("submit");
let input = select("input");
let clear = select("clear");
let tasks = select("tasks");
let darkMode = select("theme");

function darkModeOn() {
  selectAll("special").forEach((i) => i.classList.add("dark"));
  isDark = true;
}

function darkModeOff() {
  selectAll("dark").forEach((i) => i.classList.remove("dark"));
  isDark = false;
}

function darkModeHandler() {
  isDark ? darkModeOff() : darkModeOn();
}

function addCard(val, n) {
  tasks.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task task-${n} ${isDark ? "dark" : "special"}">
      <p class="text">${val}</p>
        <button class="del del-${n} ${isDark ? "dark" : "special"}">
          <img src="./img/trash-outline.svg" alt="trash" class="trash" />
        </button>
    </div>
    `
  );
}

function delHandler() {
  selectAll("del").forEach((i) => {
    i.addEventListener("click", () => del(i.classList[1].slice(4)));
  });
}

function del(n) {
  select(`task-${n}`).classList.add("hide");
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
  input.value = "";
}

add.addEventListener("click", submitHandler);
clear.addEventListener("click", clearHandler);
darkMode.addEventListener("click", darkModeHandler);
