let score = {
    win:0,
    loses:0,
    tie:0
  }
function process(playerMove){
      
      
      const computer = document.querySelector('.computerMove')
      const win = document.querySelector('.win')
      const loses = document.querySelector('.loses')
      const ties = document.querySelector('.ties')

      let randomNumb = Math.random()
      
      function movePicker(){
        let computerMove = ''
            if(randomNumb > 0 && randomNumb < 1/3){
                computerMove = 'rock';}
            else if(randomNumb >= 1/3 && randomNumb < 2/3) {
                    computerMove = 'paper';
            }   
            else {
                computerMove = 'scissor'
            }
            return computerMove
            }
      let computerMove = movePicker()
        
         
        if (playerMove === 'rock') {
                    if(computerMove === 'rock'){
                        computer.innerHTML = `computers-move<br>${computerMove}`
                        score.tie ++;
                    ties.innerText = `ties:${score.tie}`
                    }
                    else if(computerMove === 'paper'){
                        computer.innerHTML = `computers-move<br>${computerMove}`
                        score.loses ++
                        loses.innerText = `loses:${score.loses}`
                    }
                    else if(computerMove === 'scissor'){
                        computer.innerHTML = `computers-move<br>${computerMove}`
                        score.win +=1;
                        win.innerText = `wins:${score.win}`
                    }
        } 
       
      
        else if (playerMove === 'paper') {
                    if(computerMove === 'rock'){
                        computer.innerHTML = `computers-move<br>${computerMove}`
                        score.win ++;
                        win.innerText = `wins:${score.win}`
                    }
                    else if(computerMove === 'paper'){
                        computer.innerHTML = `computers-move<br>${computerMove}`
                        score.tie ++
                        ties.innerText = `ties:${score.tie}`
                    }
                    else if(computerMove === 'scissor'){
                        computer.innerHTML = `computers-move<br>${computerMove}`
                        score.loses ++;
                        loses.innerText = `loses:${score.loses}`
                    }
        } 
       
       
       else if (playerMove === 'Scissor') {
                if(computerMove === 'rock'){
                    computer.innerHTML = `computers-move<br>${computerMove}`
                    score.loses ++;
                    loses.innerText = `loses:${score.loses}`
                }
                else if(computerMove === 'paper'){
                    computer.innerHTML = `computers-move<br>${computerMove}`
                    score.win ++
                    win.innerText = `wins:${score.win}`
                }
                else if(computerMove === 'scissor'){
                    computer.innerHTML = `computers-move<br>${computerMove}`
                    score.tie ++;
                    ties.innerText = `ties:${score.tie}`
                }
          
       }

       else if (playerMove === 'reset'){
        score ={
            win:0,
            loses:0,
            tie:0
        }
        computer.innerHTML=''
        win.innerText = 'win:0'
        loses.innerText = 'loses:0'
        ties.innerText = 'ties:0'
       }}
    
    