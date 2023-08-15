let score = 0;
let randomHit;

function increaseScore(){
    score +=10;
    document.querySelector(".scoreValue").textContent = score ;  
}
//make bubble function

function makeBubble(){
    let clutter = "";

for(let i =1; i<= 200; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
//set timer function 

function settimer(){
    let timer = 60;
    const stopTimer = setInterval(()=>{
        if(timer>=0){
            document.querySelector(".timerValue").textContent = timer;
            timer--;   
        }
        else{
            clearInterval(stopTimer);
            document.querySelector("#pbtm").innerHTML = `<h1 id = "gameOver">Game Over </h1>
            <button id="newGame">New Game</button>`;
            document.querySelector("#newGame").addEventListener("click", startGame);
            score = 0;
        } 
    }, 1000);
    document.querySelector(".scoreValue").textContent = score ; 
    
}
// new hit value function

function getNewHit(){
    randomHit = Math.floor(Math.random()*10);
    document.querySelector(".hitValue").textContent = randomHit;
}

// start game fuction
function startGame(){
    makeBubble();
    settimer();
    getNewHit();
}

// calling functions
startGame();

document.querySelector("#pbtm").addEventListener("click", function(bubble){
   const targetValue =  Number(bubble.target.textContent);
   if(targetValue === randomHit){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});
