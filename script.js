let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let tasks = document.querySelector(".tasks");

let arr = [];
let count = 0;

const addCard = (arr) => {
  tasks.innerHTML = "";
  arr.forEach((i) => tasks.insertAdjacentHTML("afterbegin", i));
};

function submitHandler() {
  if (input.value.replace(/\s/g, "") !== "") {
    arr.push(
      `<div class="task del-${count}"><p>${input.value}</p><button class="delete del-${count}">delete</button></div>`
    );
    addCard(arr);
    input.value = "";

    document.querySelector(`.del-${count}`).addEventListener("click", () => {
      // console.log(arr.filter((i) => i.includes("del-" + count)));
      arr = arr.filter((i) => i.includes(`del-${count}`));
      addCard(arr);
    });

    count++;
  }
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
