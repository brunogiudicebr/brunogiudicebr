const grid = document.querySelector('.grid')
const player = document.querySelector('.player')
const timer = document.querySelector('.timer')
const tentativasVisualizada=document.querySelector('.tentativas')
let tentivas =10
const butaodeteste=document.querySelector('.teste')
const personagens = [
    'beth',
    'rick',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'summer',
    'scroopy',
    

]
tentativasVisualizada.innerHTML = 'tentativas:' + tentivas
const createElement = (tag,classname)=>{
    const element = document.createElement(tag)
    element.className = classname
    return element;
}

let firstCard = '';
let secondCard = '';
const checkEndGame=()=>{
    const disbledCards = document.querySelectorAll('.carta-disabilitada')
    if(disbledCards.length ==20){
        h1.textContent=`párabens,${player.innerHTML} vôce venceu`
        clearInterval(this.loop)
        MensagemFinal.classList.remove('sumir')
        const tentaDnv=(event)=>{
            MensagemFinal.classList.add('sumir')
            console.log(event)
            setInterval(function(){location.reload()}, 800);
        }
        tentarNovamente.addEventListener('click',tentaDnv)
        const backToName=(event)=>{
            console.log(event)
            window.location = '/index.html'
        }
        voltarTudo.addEventListener('click',backToName)
    
    }
}
const checkCards=()=>{
   const primeiroPersonagem= firstCard.getAttribute('data-character')
    const segundoPersonagem= secondCard.getAttribute('data-character')

    if(primeiroPersonagem == segundoPersonagem){
        firstCard.firstChild.classList.add('carta-disabilitada')
        secondCard.firstChild.classList.add('carta-disabilitada')
        tentivas++
        firstCard=''
        secondCard=''
        checkEndGame()
        
    }else{
        
        tentativasVisualizada.innerHTML = 'tentativas:' + tentivas
        tentivas--
        if(tentivas==-1){
            clearInterval(this.loop)
        MensagemFinal.classList.remove('sumir')
        const tentaDnv=(event)=>{
            MensagemFinal.classList.add('sumir')
            console.log(event)
            setInterval(function(){location.reload()}, 800);
        }
        const backToName=(event)=>{
            console.log(event)
            window.location = '/index.html'
        }
        tentarNovamente.classList.add('lost')
        voltarTudo.classList.add('lost')
        voltarTudo.addEventListener('click',backToName)
        tentarNovamente.addEventListener('click',tentaDnv)
        }
        setTimeout(()=>{
            firstCard.classList.remove('revelar-card')
            secondCard.classList.remove('revelar-card')

            firstCard=''
            secondCard=''
        },500)

    }
}

const revealCard=(event)=>{
if( event.target.parentNode.className.includes('revelar-card')){
    return
}

if(firstCard == ''){
        event.target.parentNode.classList.add('revelar-card')
        firstCard = event.target.parentNode   
    }else if(secondCard == ''){
     event.target.parentNode.classList.add('revelar-card')
     secondCard = event.target.parentNode   

     checkCards()
    }
}

const createCard =(personagem)=>{
    const card = createElement('div', 'card')
    const frente = createElement('div', 'face frente')
    const costas = createElement('div', 'face costas')

    frente.style.backgroundImage = `url('../images/${personagem}.png')`

    card.appendChild(frente);
    card.appendChild(costas)
    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', personagem)
 return card;
}

const loadGame=()=>{
    const duplicar = [...personagens, ...personagens]

    const embaralhar = duplicar.sort(()=> Math.random()-0.5); 
    embaralhar.forEach((personagem)=>{

        const card = createCard(personagem)
        grid.appendChild(card);
    })
}
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
};

const setTimer = () => {
    let currentTime = 0;

    this.loop = setInterval(() => {
        currentTime++;
        timer.innerHTML = formatTime(currentTime);
    }, 1000);
};

    

window.onload =()=>{
    const playerName = localStorage.getItem('player')
    player.innerHTML= playerName
    setTimer()
    loadGame()

}
//constantes da mensagem final
const MensagemFinal = document.querySelector('.Mensagem-Final')
const tentarNovamente = document.querySelector('.tentarNovamente')
const h1 = document.querySelector('h1')
const voltarTudo= document.querySelector('.voltar-A-tela')
