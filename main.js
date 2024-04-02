// variavel

const animation = document.querySelector('.animation')
const btnReset = document.querySelector('.btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Acredite em si mesmo e você será imparável.",
  "Cada dia é uma nova oportunidade para brilhar.",
  "Se você pode sonhar, pode realizar.",
  "A persistência leva ao sucesso.",
  "A jornada mais longa começa com um único passo.",
  "Sua determinação é sua maior força.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Encare cada desafio como uma chance de crescimento.",
  "Grandes coisas nunca vêm da zona de conforto.",
  "Mude seus pensamentos e você mudará seu mundo.",
  "A adversidade revela o verdadeiro campeão que há em você.",
  "Você é mais forte do que imagina.",
  "O que você faz hoje pode melhorar todos os amanhãs.",
  "Acredite no poder dos seus sonhos e siga em frente.",
]
// evento

animation.addEventListener('click', lookMyLuck)
btnReset.addEventListener('click', lookAgain)
// function

function lookMyLuck () {
  toggleClass()

  let phraseNumber = Math.floor(Math.random() * phrases.length);
  document.querySelector('.animation-div').innerText = phrases[phraseNumber]
}

function lookAgain () {
  toggleClass()
}

function toggleClass() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

