const divTag = document.querySelector(".inputContainer");
const inputTag = document.querySelector(".myInput");
const ulTag = document.querySelector(".ul");
const mainArray = [];
inputTag.addEventListener("change", () => {
  const inputData = inputTag.value;
  mainArray.push(inputData);
  // console.log(mainArray);
  // console.log(inputData);

  const liTag = document.createElement("li");
  ulTag.append(liTag);

  liTag.textContent = mainArray[mainArray.length - 1];
  const iTag = document.createElement("i");
  iTag.classList.add("fa-solid", "fa-trash");
  liTag.append(iTag);
  inputTag.value = "";

  iTag.addEventListener("click", () => {
    liTag.remove();
  });

  let click = true;

  liTag.addEventListener("click", () => {
    if (click) {
      liTag.style.textDecoration = "line-through";

      click = false;
    } else {
      liTag.style.textDecoration = "none";
      click = true;
    }
  });
});
