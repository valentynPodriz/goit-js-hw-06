


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
const bodyRef = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
 

btnColor.addEventListener("click", () => {
  
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;

});
