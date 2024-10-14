console.log("done");

const gameCards = document.querySelectorAll('.game-card');
const audio = document.querySelectorAll('#elementaAudio');
const ball = document.querySelector('.game-page-container')
const wood = document.querySelector('.game-page-wood-container')
const clout = document.querySelector('.game-page-clout-container')
const txt = document.querySelector('.text-h1')

gameCards[0].addEventListener('click', () => {
    audio[0].play()
    ball.classList.add('game-page-active-container')

    wood.classList.remove('game-page-active-wood')
    clout.classList.remove('game-page-active-clout')

    txt.innerText = 'O N A I M'
    txt.style.marginLeft = '15px'
    setTimeout(() => {
        audios.play()
        console.log("done card");
    }, 10000)
})

gameCards[1].addEventListener('click', () => {
    audio[1].play()
    wood.classList.add('game-page-active-wood')

    txt.innerText = "T L B K R"
    txt.style.marginLeft = '15px'

    ball.classList.remove('game-page-active-container')
    clout.classList.remove('game-page-active-clout')

    setTimeout(() => {
        music.play()
        console.log("done card");
    }, 10000)
})

gameCards[2].addEventListener('click', () => {
    audio[2].play()
    clout.classList.add('game-page-active-clout')

    txt.innerText = "O' D U Y E"
    txt.style.marginLeft = '15px'

    ball.classList.remove('game-page-active-container')
    wood.classList.remove('game-page-active-wood')

    setTimeout(() => {
        sound.play()
        console.log("done card");
    }, 10000)
})

const card = document.querySelector('.ball-container')
const woodCard = document.querySelector('.wood-container')
const audios = document.querySelector("#audios")
const music = document.getElementById('audios-t')
const sound = document.getElementById('audios-y')

card.addEventListener('click', () => clickCard)
woodCard.addEventListener('click', () => clickWood)

function clickCard() {
    card.style.display = 'none'
}

function clickWood() {
    woodCard.style.display = 'none'
    console.log('error');
}

function clickClout() {
    document.querySelector('.clout-container').style.display = 'none'
}


