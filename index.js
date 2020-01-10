
let randomNumber1 = Math.floor(Math.random() * 6) + 1
let image1 = `images/dice${randomNumber1}.png`
document.querySelector('.img1').setAttribute('src', image1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1
let image2 = `images/dice${randomNumber2}.png`
document.querySelector('.img2').setAttribute('src', image2)

let h1 = document.querySelector('h1')

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩 Player1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player2 Wins! 🚩"
} else {
  h1.innerHTML = "Draw!"
}