const elements = document.querySelectorAll(".cl1");
elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("cl2");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("cl2");
    element.classList.add("cl5");
  });
});
const cell2 = document.querySelectorAll(".cl2");
cell2.forEach((element) => {
  element.addEventListener("dblclick", () => {
    element.classList.add("cl3");
  });
});

const cell3 = document.querySelectorAll(".cl3");
cell3.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("cl4");
  });
});
const elements2 = document.querySelectorAll(".cl4");

elements2.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("yellow");
  });
});
const cell5 = document.querySelectorAll(".cl5");
cell5.forEach((element) => {
  element.addEventListener("dblclick", () => {
    element.classList.add("cell5");
  });
});
const cell6 = document.querySelectorAll(".cellstandart");
cell6.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("cell6");
  });
});
var sum = 0;

function addNumber(number) {
  sum += number;
}

function showResult() {
  alert("Сумма цифр: " + sum);
}
var nameInput = document.getElementById("nameInput");
var greetingMessage = document.getElementById("greetingMessage");

function greetUser() {
  var name = nameInput.value;

  if (name !== "") {
    greetingMessage.textContent = "Привет, " + name + "!";
  } else {
    greetingMessage.textContent = "Привет, незнакомец!";
  }
}

nameInput.addEventListener("input", greetUser);

var element2 = document.getElementById("element2"); ////////last task

element2.addEventListener("mouseover", function () {
  this.style.fontSize = "30px";
});

element2.addEventListener("mouseout", function () {
  this.style.color = "blue";
});
