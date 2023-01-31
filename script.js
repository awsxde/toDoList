let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let tasks = document.querySelector(".tasks");

let arr = [];
let count = 0;

const updateUI = (array) => {
  tasks.innerHTML = "";
  array.forEach((i) => tasks.insertAdjacentHTML("afterbegin", i));
  tasks.classList;
};

function submitHandler() {
  count++;
  arr.push(
    `<div class="task task${count}">
        <p>${input.value}</p>
        <button class="delete task${count}">delete</button>
    </div>`
  );
  updateUI(arr);
}

submit.addEventListener("click", submitHandler);

// let del = document.querySelectorAll(".delete");

//   del.forEach((i) =>
//     i.addEventListener("click", () => {
//       // console.log(del);
//       //   console.log(i.classList);
//       console.log([...i.classList].filter((i) => i !== "delete"));
//       arr = arr.filter(
//         (x) => !x.includes([...i.classList].filter((n) => n !== "delete"))
//       );
//       updateUI(arr);
//     })
//   );
