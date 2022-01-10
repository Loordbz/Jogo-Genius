let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue

const blue = document.querySelector('.blue');
const brown = document.querySelector('.brown');
const gray = document.querySelector('.gray');
const orange = document.querySelector('.orange');

//Cria order aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    time = 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, time);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//checa a ordem clicada comparando com a ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if((clickedOrder.length) == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return gray;
    } else if (color ==1) { 
       return brown; 
    } else if (color ==2) {
        return orange;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo lvl
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao inicio de jogo
let playGame = () => {
    alert(`Bem-vindo ao Gênius! Iniciando o jogo`)
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
gray.onclick = () => click(0);
brown.onclick = () => click(1);
orange.onclick = () => click(2);
blue.onclick = () =>click(3);

//Incio do jogo
playGame();