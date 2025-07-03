const pit = document.getElementById('pit');
const paper = document.getElementById('paper');
const fire = document.getElementById('fire');

const opponent = document.getElementById('opponent');
const result = document.getElementById('result');

pit.addEventListener('click', function() {
    let rand = Math.round(Math.random() * (3 - 1) + 1);
    
    if(rand == 1) {
        opponent.src = 'https://i.postimg.cc/hvDxxWfJ/000038544635.jpg';
        result.innerText = "Ничья!";
    }
    else if(rand == 2) {
        opponent.src = 'https://i.postimg.cc/V6BndLLQ/f63742aa9e62d14fdeaafa0ea4d5b4ae.jpg';
        result.innerText = "Поражение.";
    }
    else if(rand == 3) {
        opponent.src = 'https://i.postimg.cc/9Mjymq2Y/flame-fireworks-stock-photography-image-png-favpng-UCx9d4-Xdjc-Zx-Zw-GRXa-EZLu6u-U.jpg';
        result.innerText = "Победа!";
    }
});

paper.addEventListener('click', function() {
    let rand = Math.round(Math.random() * (3 - 1) + 1);
    
    if(rand == 2) {
        opponent.src = 'https://i.postimg.cc/V6BndLLQ/f63742aa9e62d14fdeaafa0ea4d5b4ae.jpg';
        result.innerText = "Ничья!";
    }
    else if(rand == 3) {
        opponent.src = 'https://i.postimg.cc/9Mjymq2Y/flame-fireworks-stock-photography-image-png-favpng-UCx9d4-Xdjc-Zx-Zw-GRXa-EZLu6u-U.jpg';
        result.innerText = "Поражение.";
    }
    else if(rand == 1) {
        opponent.src = 'https://i.postimg.cc/hvDxxWfJ/000038544635.jpg';
        result.innerText = "Победа!";
    }
});

fire.addEventListener('click', function() {
    let rand = Math.round(Math.random() * (3 - 1) + 1);
    
    if(rand == 3) {
        opponent.src = 'https://i.postimg.cc/9Mjymq2Y/flame-fireworks-stock-photography-image-png-favpng-UCx9d4-Xdjc-Zx-Zw-GRXa-EZLu6u-U.jpg';
        result.innerText = "Ничья!";
    }
    else if(rand == 1) {
        opponent.src = 'https://i.postimg.cc/hvDxxWfJ/000038544635.jpg';
        result.innerText = "Поражение.";
    }
    else if(rand == 2) {
        opponent.src = 'https://i.postimg.cc/V6BndLLQ/f63742aa9e62d14fdeaafa0ea4d5b4ae.jpg';
        result.innerText = "Победа!";
    }
});