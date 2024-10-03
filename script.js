let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // Ajusta a posição
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializa o carrossel
showSlide(currentSlide);

// Autoplay (opcional)
setInterval(() => {
    changeSlide(1);
}, 3000);




function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById("selecionasom");
    clickSound.play();
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "A",
        q2: "C",
        q3: "C",
        q4: "B",
        q5: "A",
        q6: "C",
        q7: "B",
        q8: "A",
        q9: "C",
        q10: "B",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerText = `Você acertou ${score} de 10 perguntas.`;
    
    if (score === 10) {
        result.innerText = `Parabéns! você acertou ${score} de 10 perguntas.`;
        let successSound = document.getElementById('venceusom');
        successSound.play();
    } else {
        let failSound = document.getElementById('perdeusom');
        failSound.play();
    }

    // Habilitar o botão "Responder Novamente"
    document.getElementById('reiniciar').disabled = false;
}

function submitAgain() {
    // Resetar o formulário
    document.getElementById('quiz-form').reset();

    // Habilitar todas as opções novamente
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false; // Habilita todas as opções
    });

    // Desabilitar o botão "Responder Novamente" novamente
    document.getElementById('reiniciar').disabled = true;

    // Limpar resultados
    document.getElementById('result').innerText = ""; }