
  const getComputerChoice = () =>{
    let compChoice = Math.floor(Math.random() *3)
    if(compChoice == 0){
      return 'rock'
    }else if(compChoice == 1){
      return 'paper'
    }else{
      return 'scissors'
    }
  }
  function determineWinner(userChoice, computerChoice){
    if(userChoice == computerChoice){
      return 'It is a TIE.'
    }
    if(userChoice == 'rock'){
      if(computerChoice == 'paper'){
        return 'The computer won.'
      }else{
        return 'You won.'
      }
    } 
    if(userChoice == 'paper'){
      if(computerChoice == 'scissors'){
        return 'The computer won.'
      }else{
        return 'You won.'
      }
    } 
    if(userChoice == 'scissors'){
      if(computerChoice == 'rock'){
        return 'The computer won.'
      }else{
        return 'You won.'
      }
    } 
  }
  let symBlock = document.getElementsByClassName('symBlock')
  let symText = document.querySelectorAll('.symText')
  let symIcon = document.querySelectorAll('.icon')
  for(let z = 0; z < symBlock.length; z++){
    symBlock[z].addEventListener('mouseover', function () {
      setTimeout(function () {
        symIcon[z].style.color = '#FFA17F'
        symText[z].style.color = '#FFA17F'
      }, 50)
    })
    symBlock[z].addEventListener('mouseout', function () {
      setTimeout(function () {
        symIcon[z].style.color = '#333399'
        symText[z].style.color = '#333399'
      }, 50)
    })
    symBlock[z].addEventListener('click', function () {
      symIcon[z].style.color = '#FFA17F'
      symText[z].style.color = '#FFA17F'

      if(event.target.id == 'rock'){
        userChoice = 'rock'
      }else if(event.target.id == 'scissors'){
        userChoice = 'scissors'
      }else{
        userChoice = 'paper'
      }
      let computerChoice = getComputerChoice()
      let winner = determineWinner(userChoice, computerChoice)
      if (document.querySelector('.h1') == null) {
        let winnerBlock = document.createElement("div");
        let winnerHeader = document.createElement("h1");
        let winnerHeader2 = document.createElement("h3");
        winnerBlock.classList.add('align-items-center')
        winnerBlock.classList.add('d-flex')
        winnerBlock.classList.add('flex-column')
        winnerBlock.classList.add('winnerBlock')
        winnerHeader.classList.add('h1')
        winnerHeader2.classList.add('h3')
        winnerHeader2.classList.add('text-center')
        let mainBlock = document.getElementById('mainBlock')
        mainBlock.appendChild(winnerBlock);
        winnerBlock.appendChild(winnerHeader);
        winnerBlock.appendChild(winnerHeader2);
        let resultText = `You chose ${userChoice}. AI chose ${computerChoice}`
        winnerHeader.innerText = winner
        winnerHeader2.innerText = resultText
      }else{
        let resultText = `You chose ${userChoice}. AI chose ${computerChoice}`
        document.querySelector('.h1').innerText = winner
        document.querySelector('.h3').innerText = resultText
        console.log(userChoice, '=me', computerChoice, '=ai', winner, resultText)
      }
    })

  }

