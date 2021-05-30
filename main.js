let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let score = 0

function jump(){
    if(dino.classList != "jump")
    dino.classList.add("jump")
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}

document.addEventListener("keydown", function(event){
    jump();
});

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 30 && cactusLeft > 0 && dinoTop){
        alert("Game Over")
    } else {
        score++
    }
    
}, 10);

console.log(score)