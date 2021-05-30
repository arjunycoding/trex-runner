document.addEventListener("DOMContentLoaded", function(){

    let dino = document.querySelector(".dino");
    let isJumping = false;
    let gravity = 0.9
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
        let obstacelePosition = 1000;
        let obstacele = document.createElement("div")
        obstacele.classList.add('obstacele')
    }
})