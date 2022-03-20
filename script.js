const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');

shuffleImg();
cilcking();

function shuffleImg(){
    card.forEach(c =>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length);
        c.style.order = num[random];
    })
}

function cilcking(){
    for(let i=0;i<card.length;i++){
        // front[i].classList.add('show')
        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click',() => {
            front[i].classList.add('flip');
            const flipped = document.querySelectorAll('.flip');

            if(flipped.length === 2){
                container.style.pointerEvents = 'none';
                setInterval(() => {
                    container.style.pointerEvents ='all'
                },1000);

                match(flipped[0],flipped[1])
            } 
        })
    }
}

function match(card1,card2){
    if(card1.dataset.index == card2.dataset.index){
        score.innerHTML = parseInt(score.innerHTML)+1;
        card1.classList.remove('flip');
        card2.classList.remove('flip');

        card1.classList.add('match'); 
        card2.classList.add('match');
    }else{
        setTimeout(() => {
            card1.classList.remove('flip')
            card2.classList.remove('flip')
        },1000);
    }
   
}