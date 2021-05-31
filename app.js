document.addEventListener("DOMContentLoaded", function(){

    let dino = document.querySelector(".dino");
    let grid = document.querySelector(".grid");
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;
    let alert = document.querySelector("#alert")
    // let position = 0;
    function control(e){
        if(e.keyCode === 32){
            if(!isJumping){
                isJumping = true
                jump()
            }
        }
    }
    document.addEventListener('keyup', control)
    let position = 0;
    function jump(){
        let count = 0;
        let timerId = setInterval(function(){
            if(count === 15){
                clearInterval(timerId)
                let downTimerId = setInterval(function(){
                    position -= 5;
                    console.log("down")
                    count--
                    position = position * gravity
                    dino.style.bottom = position + 'px'
                    if(count === 0){
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                })
            }
            console.log("up");
            count++
            position += 30;
            position = position * gravity
            dino.style.bottom = position + 'px'
            console.log(dino.style.bottom)
        }, 20)
    }
    function generateObstacele(){
        let randomTime = Math.random() * 4000;
        let obstacelePosition = 1000;
        let obstacele = document.createElement("div")
        grid.appendChild(obstacele)
        obstacele.style.left = obstacelePosition + "px";
        let timerId = setInterval(function(){
            if(!isGameOver) obstacele.classList.add('obstacele')
            if(obstacelePosition > 0 && obstacelePosition < 60 && position< 60){
                clearInterval(timerId)
                alert.innerHTML = "Game Over";
                isGameOver = true;
            }
            obstacelePosition -= 10
            obstacele.style.left = obstacelePosition + "px "
        }, 20)
        if(!isGameOver){
            setTimeout(generateObstacele, randomTime)
        }
    }
    generateObstacele()
})
