
$(() => {

//carousel

    let currentImgIndex = 0

    const numOfImages = $('.carousel-images').children().length - 1
    $('.next').on('click', () => {

    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none') 

    if (currentImgIndex < numOfImages) {
    currentImgIndex++
    } else {
    currentImgIndex = 0 }


        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')})

        $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex > 0) {
        currentImgIndex-- 
        } else { 
        currentImgIndex = numOfImages }

       $('.carousel-images').children().eq(currentImgIndex).css('display', 'block') })

//rock paper scissors 

      $("#scissors").on('click', function() {
        let result = compare('scissors', computerChoice())
        $("#decision").text(result)
      })
      
      $('#rock').on('click', function() {
        let result = compare('rock', computerChoice())
        $("#decision").text(result)
      })
      
      $('#paper').on('click', function() {
        let result = compare('paper', computerChoice())
        $("#decision").text(result)
      })
      $('#reset').on('click', function() {
        let result = compare("Let's play!")
        $("#decision").text(result)
      })
  
      let compare = function(user, computer) {
        if(user === 'rock') {
          
            if(computer === 'rock') {
                return "It's a tie! Try again!"
            } else if (computer === 'paper') {
              return 'Paper beats Rock! Computer wins!'
            } else if (computer === 'scissors') {
              return 'Rock beats Scissors! You win!'
            }
          
        } else if (user === 'paper') {
          
            if(computer === 'paper') {
              return "It's a tie! Play again!"
            } else if (computer === 'rock') {
              return 'Paper beats Rock! You win!'
            } else if (computer === 'scissors') {
              return 'Scissors beats Paper! Computer wins!' }
          
       } else if (user === 'scissors') {
          
            if(computer === 'scissors') {
              return 'Tie'
            } else if (computer === 'paper') {
              return 'Scissors beats Paper! You win!'
            } else if (computer === 'rock') {
              return 'Rock beats Scissors! Computer wins!'
          }
        } else {
          return "Rock, Paper, Scissors!"
        }}

      let computerChoice = function() {
              let random = Math.random();
              if (random < 0.367987) {
                return  'rock'
              } else if(random < 0.578863) {
                return 'paper'
              } else {
                return 'scissors'
              } }

  
})