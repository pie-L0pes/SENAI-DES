const cor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  let chex = "#"; 

  for (let i = 0; i < 6; i++) {
    chex += cor[getRandomNumber()];
  }

  color.textContent = chex;
  document.body.style.backgroundColor = chex;
});

function getRandomNumber(){
    return Math.floor(Math.random() * cor.length);
}