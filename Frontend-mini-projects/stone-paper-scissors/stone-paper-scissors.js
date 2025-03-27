let score = JSON.parse(localStorage.getItem('score'))||{
    won :0,
    loss : 0,
    tie : 0
}
let result;


ShowScore();

function StartGame(str){
   
   ComputerMove = pickComputerMove() 
   if (ComputerMove === str){
    score.tie+=1
    result = 'Tie.'
      }
   else if (str === '✌🏻' ){
    if (ComputerMove == '👊🏻' ){ 
        score.loss+=1
        result = 'You Loss.'
           }
    else{
        score.won+=1
        result = 'You Won.'
            }
   }
   else if (str === '👊🏻' ){
    if (ComputerMove == '🖐🏻' ){ 
        score.loss+=1
        result = 'You Loss.'
           }
    else{
        score.won+=1
        result = 'You Won.'
         }
   }
   else {
    if (ComputerMove == '✌🏻' ){ 
        score.loss+=1
        result = 'You Loss.'
            }
    else{
        score.won+=1
        result = 'You Won.'
    }

   }
   console.log(ComputerMove,str)
   document.querySelector('.js-moves').innerHTML = `You ${str} - ${ComputerMove} Computer` 

   localStorage.setItem('score',JSON.stringify(score))
   ShowResult();
   ShowScore();
   }

function pickComputerMove(){
    let num =  Math.random()

    if  (num < 1/3) {
        return  '✌🏻';
    }

    else if  (num >= 1/3 && num < 2/3) {
        return  '🖐🏻';
    }

    if  (num >= 2/3 ) {
        return  '👊🏻';
    }
}

function ResetScore(){
    score={
    won : 0,
    loss : 0,
    tie : 0
    }
    localStorage.removeItem('score')
    ShowScore();
}
function ShowResult(){
    document.querySelector('.js-result').innerText = result
}
function ShowScore(){
    document.querySelector('.js-score').innerText = `Won : ${score.won} Loss : ${score.loss} Tie : ${score.tie}`;
}