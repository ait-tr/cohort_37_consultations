// очистка контейнера с помощью innerHTML
const colors = ["Red", "Blue", "Green"];

const contentContainer = document.querySelector(".content-container");
const changeButton = document.querySelector(".change-button");

// contentContainer.innerHTML = `
// <p>Element 1</p>
// <p>Element 2</p>
// <p>Element 3</p>`;

const addList = () => {
  contentContainer.innerHTML = "";

  colors.forEach((color) => {
    let colorContainer = document.createElement("div");
    colorContainer.textContent = color;
    contentContainer.append(colorContainer);
  });
};

changeButton.addEventListener("click", addList);

// reduce - создание массива уникальных значений
const duplicateArray = [1, 4, 5, 5, 1, 5, 8, 10];

const uniqueArray = duplicateArray.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(uniqueArray);

//includes
const prices = [100, 200, 400, 200];

console.log(prices.includes(100, 1));

// Добавление стилевых классов
const pageContainer = document.querySelector(".page-container");
const changeStyleButton = document.querySelector(".change-button");

let title = document.createElement("h1");
title.textContent = "Main Title";
//1 метод
// title.style.color = 'red';
//2 метод
// title.classList.add("main-title");
//3 метод
// title.className = "main-title";
//4 метод
title.setAttribute("class", "main-title");
pageContainer.prepend(title);

const changeStyles = () => {
  // title.classList.remove("main-title");
  // title.classList.add('main-text');
  // title.className = "main-text";
  // changeButton.classList.add("disable-styles");
  // changeButton.className = "disable-styles";
  changeButton.setAttribute("class", "change-button disable-styles");
};

changeStyleButton.addEventListener("click", changeStyles);

// every
const numbersArray = [1, 2, 3, -4];

const result = numbersArray.every((num) => num > 0);

console.log(result);
