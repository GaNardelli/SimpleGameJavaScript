'use strict'

// Recuperando os valores da area do jogo dentro do documento HTML pelo id
const canvas = document.getElementById('gameArea'); // fazendo a área
const ctx = canvas.getContext("2d") // conteudo dentro do canvas

let x = 100;
let y = 100;
let radius = 50;

let speed = 10;

let upPressed = false;
let downPressed = false; // quando pressionado == True
let leftPressed = false;
let rightPressed = false;

function drawGame() {
    requestAnimationFrame(drawGame); //gera um looping recarregando a página
    // Using setinterval -> utilizado no final do arquivo js
    clearScreen();
    inputs();
    boundryCheck(); // checar o input antes de desenhar
    drawGreenBlob();
}

function boundryCheck() {
    if (y < radius) {
        y = radius;
    }
    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    }
    if (x < radius) {
        x = radius;
    }
    if (x > canvas.width - radius) {
        x = canvas.width - radius;
    }
}

function inputs() {
    if (upPressed) {
        y -= speed;
    }
    if (downPressed) {
        y += speed;
    }
    if (leftPressed) {
        x -= speed;
    }
    if (rightPressed) {
        x += speed;
    }
}

function drawGreenBlob() {
    ctx.fillStyle = 'green'; // Preencehr ccom a cor verde
    if (upPressed) {
        ctx.fillStyle = 'blue';
    }
    if (rightPressed) {
        ctx.fillStyle = 'red';
    }
    if (downPressed) {
        ctx.fillStyle = 'yellow';
    }
    if (leftPressed) {
        ctx.fillStyle = 'purple';
    }
    ctx.beginPath(); // Iniciar o desenho 
    ctx.arc(x, y, radius, 0, Math.PI * 2); // fazer o circulo
    ctx.fill();
}

function clearScreen() {
    // Preenchendo o retangulo com a cor preta pegando os valores de altura e largura
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

document.body.addEventListener('keydown', keyDown); // key pressionada
document.body.addEventListener('keyup', keyUp); // key solta

function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        upPressed = true;
    }
    //down
    if (event.keyCode == 40) {
        //40 key code de cada key no teclado
        downPressed = true;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = true;
    }
    //right
    if (event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    //up
    if (event.keyCode == 38) {
        upPressed = false;
    }
    //down
    if (event.keyCode == 40) {
        //40 key code de cada key no teclado
        downPressed = false;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = false;
    }
    //right
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}


drawGame()
// setInterval(drawGame, 1000 / 60);
