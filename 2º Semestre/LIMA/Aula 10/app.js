const colors = ["green", "red", "pink", "white", "orange", "#fff", "#7c1515ff", "#f2b0fcff", "#03a5b4ff", "#84009eff", "#93df86ff", "#fffcaeff", "#451d5aff"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}