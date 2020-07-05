const container = document.querySelector(".container");
const text = document.querySelector(".text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathe() {
  text.innerHTML = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

breathe();

setInterval(breathe ,totalTime);