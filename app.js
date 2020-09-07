document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
      {
          name:'baby',
          img: 'images/baby.png'
      },
      {
          name:'baby',
          img: 'images/baby.png'
      },
      {
          name:'panty',
          img: 'images/panty.png'
      },
      {
          name:'panty',
          img: 'images/panty.png'
      },
      {
          name:'gally',
          img: 'images/gally.png'
      },
      {
          name:'gally',
          img: 'images/gally.png'
      },
      {
          name:'lion',
          img: 'images/lion.png'
      },
      {
          name:'lion',
          img: 'images/lion.png'
      },
      {
          name:'pant1',
          img: 'images/pant1.png'
      },
      {
          name:'pant1',
          img: 'images/pant1.png'
      },
      {
          name:'retyn',
          img: 'images/retyn.png'
      },
      {
          name:'retyn',
          img: 'images/retyn.png'
      }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Haz dado click a la misma imagen!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, Intenta de Nuevo')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Felicitaciones ! Encontrastes todos los Malumines!'
    }
  }

  //flip your card (voltear)
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
