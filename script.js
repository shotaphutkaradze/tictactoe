const body = document.body;
const container = document.querySelector('.container');
const ticTacToe = document.querySelector('.ticTacToe');
const ticTacToeButtons = document.querySelectorAll('.ticTacToeButton');

const markAsX = (button) => {
    if(button.classList.contains('markedO') || button.classList.contains('markedX')) return;
    button.style.backgroundImage = 'url(./images/x.svg)';
    button.style.backgroundSize = 'cover';
    button.style.backgroundPosition = 'center';
    button.style.backgroundColor = 'rgb(201, 53, 49)';
    button.classList.add('markedX');
}

const botMarkAsO = () => {
    let x=0;
    do {
        x = Math.floor(Math.random()*9);
    } while (ticTacToeButtons[x].classList.contains('markedX') || ticTacToeButtons[x].classList.contains('markedO'))
    const randomButton = ticTacToeButtons[x];
    randomButton.style.backgroundImage = 'url(./images/o.webp)';
    randomButton.style.backgroundSize = 'cover';
    randomButton.style.backgroundPosition = 'center'
    randomButton.style.backgroundColor = 'rgb(227, 58, 53)'
    randomButton.classList.add('markedO');
    console.log(x);
}

const checkWin = () => {
    return [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some(c => 
        c.every(i => ticTacToeButtons[i].classList.contains('markedX')) || 
        c.every(i => ticTacToeButtons[i].classList.contains('markedO'))
    );
};

ticTacToeButtons.forEach(button => {
    button.addEventListener('click', () => {
        markAsX(button);
        if(checkWin()) {
            const winH1 = document.createElement('h1');
            winH1.textContent = "You have won!";
            container.append(winH1);
            return;
        }
        botMarkAsO();
        if(checkWin()) {
            const winH1 = document.createElement('h1');
            winH1.textContent = "Bot has won!";
            container.append(winH1);
            return;
        }
    });
});