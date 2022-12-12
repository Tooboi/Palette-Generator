const body = document.body;
const palette = document.getElementById("palette");
const palette2 = document.getElementById("palette2");
const palette3 = document.getElementById("palette3");

//Random Color
function randomColor() {
  let randomize = Math.floor(Math.random() * 16777215).toString(16);
  let randomize2 = Math.floor(Math.random() * 16777215).toString(16);
  let randomize3 = Math.floor(Math.random() * 16777215).toString(16);
  palette.innerHTML = `#${randomize}`;
  palette2.innerHTML = `#${randomize}`;
  palette3.innerHTML = `#${randomize}`;
  body.style.background = `linear-gradient(to right, #${randomize} 0%, #${randomize} 33%, #${randomize2} 33%, #${randomize2} 67%, #${randomize3} 67%, #${randomize3} 100%)`;
}