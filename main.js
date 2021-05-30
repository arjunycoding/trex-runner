let dino = document.getElementById("dino");

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
    console.log(dinoTop)
    
}, 10);