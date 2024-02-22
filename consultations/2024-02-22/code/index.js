let buttonAction = document.querySelector("#action-button");
console.log(buttonAction);
let form = document.querySelector("#form");
console.log(form);
let result = document.querySelector(".result");

let action = (event) => {
  console.log(event.target.value);
  console.log(event.type);
  let targetEl = event.target;
  targetEl.style.background = "aquamarine";
  let userNameFieldValue = form.userName.value;
  // let userNameFieldValue = document.querySelector('#userName').value;
  // console.log(userNameFieldValue);
  let el = "str";

  result.innerHTML = `<h2 class='title'>Result</h2><p>${Number(userNameFieldValue).toFixed(2)}, ${el}</p>`;
  //String - "" '' ``
};

// buttonAction.addEventListener("click", action);
buttonAction.onclick = action;
