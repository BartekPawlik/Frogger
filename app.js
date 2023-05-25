const pause = document.querySelector(".pause")
const start = document.querySelector(".start")
 const timeLeftDisplay = document.querySelector("#time-left")
const resultDisplay = document.querySelector("#result")
const squares = document.querySelectorAll(".grid div")
const logsLeft = document.querySelectorAll(".log-left")
const logsRight = document.querySelectorAll(".log-right")
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')
let currentIndex = 76
const width = 9
let timerId
let currentTime = 20
let outComeTimerId
let TryAgain = 5




//  button function
start.addEventListener("click", () => {
    pause.classList.add('active')
    start.classList.add("inactive")
})

pause.addEventListener("click", () => {
    start.classList.remove('inactive')
    pause.classList.remove("active")
})

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')
    switch(e.key) {
        case "ArrowLeft": 
            if(currentIndex  % width !== 0)
            {
                currentIndex -= 1
                
            }
            
            
        break;

        case "ArrowRight": 
       if(currentIndex % width < width -1) {
                currentIndex += 1
            }
            
        
        
        break;
        case "ArrowUp": 
        if( currentIndex - width >= 0) {
            currentIndex -= width
        }
        break;
        case "ArrowDown": 
   if(currentIndex + width < width * width) {
    currentIndex += width
 }
       
        break;
      
    }
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)




function autoMoveElements() {
    currentTime--
    timeLeftDisplay.textContent = currentTime
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsRight.forEach(carRight => moveCarRight(carRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
  
}

function checkOutComes(){
    winner()
    lose()
}


function moveLogLeft(logLeft) {
    switch(true){
        case logLeft.classList.contains('l1'):
        logLeft.classList.remove('l1')
        logLeft.classList.add("l2")
        break
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add("l3")
            break

            case logLeft.classList.contains('l3'):
                logLeft.classList.remove('l3')
                logLeft.classList.add("l4")
                break

                case logLeft.classList.contains('l4'):
                    logLeft.classList.remove('l4')
                    logLeft.classList.add("l5")
                    break

                 case logLeft.classList.contains('l5'):
                        logLeft.classList.remove('l5')
                        logLeft.classList.add("l1")
                        break
        }
    }



    function moveLogRight(logRight) {
        switch(true){
            case logRight.classList.contains('l1'):
                logRight.classList.remove('l1')
                logRight.classList.add("l5")
            break
            case logRight.classList.contains('l5'):
                logRight.classList.remove('l5')
                logRight.classList.add("l4")
                break
    
                case logRight.classList.contains('l4'):
                    logRight.classList.remove('l4')
                    logRight.classList.add("l3")
                    break
    
                    case logRight.classList.contains('l3'):
                        logRight.classList.remove('l3')
                        logRight.classList.add("l2")
                        break
    
                     case logRight.classList.contains('l2'):
                        logRight.classList.remove('l2')
                        logRight.classList.add("l1")
                            break
            }
        }

        function moveCarRight(carRight){
            switch(true){
                case carRight.classList.contains('c1'):
                    carRight.classList.remove('c1')
                    carRight.classList.add("c3")
                    break

                    case carRight.classList.contains('c3'):
                        carRight.classList.remove('c3')
                        carRight.classList.add("c2")
                        break

                        case carRight.classList.contains('c2'):
                        carRight.classList.remove('c2')
                        carRight.classList.add("c1")
                        break


            }

        }




        function moveCarLeft(carLeft){
            switch(true){
                case carLeft.classList.contains('c1'):
                    carLeft.classList.remove('c1')
                    carLeft.classList.add("c2")
                    break

                    case carLeft.classList.contains('c2'):
                        carLeft.classList.remove('c2')
                        carLeft.classList.add("c3")
                        break

                        case carLeft.classList.contains('c3'):
                            carLeft.classList.remove('c3')
                            carLeft.classList.add("c1")
                        break


            }

        }
        

      
        
       
       

        function lose() {
            if (squares[currentIndex].classList.contains('c1') || 
            squares[currentIndex].classList.contains('l4') ||
            squares[currentIndex].classList.contains('l5')
            || currentTime <= 0)
              {
                setTimeout(() => {
                    
                    window.location.reload(1000)
                }, 5000);
                resultDisplay.textContent = `Try Again for 5s`
                clearInterval(timerId)
                squares[currentIndex].classList.remove('frog')
                document.removeEventListener('keyup', moveFrog)
                
                
            }
        }



  

        function winner() {
            if (squares[currentIndex].classList.contains("ending-block")){
                resultDisplay.textContent = " you Win"
                clearInterval(timerId)
                document.removeEventListener('keyup', moveFrog)
            }
        }







        pause.addEventListener("click", () => {
            if (timerId){
                clearInterval(timerId)
                document.removeEventListener("keyup", moveFrog)
              
         
            }
        })

        start.addEventListener("click", () =>{
            document.addEventListener("keyup", moveFrog)
            timerId = setInterval(autoMoveElements, 1000) })   
            outComeTimerId = setInterval(checkOutComes,100)    
          

