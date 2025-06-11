// CORAZONES FLOTANTES
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heartsContainer.appendChild(heart);
    }
}

// RAZONES DE AMOR
function setupReasons() {
    const messages = [
        "Tu sonrisa ilumina mi día",
        "Cómo me haces reír sin esfuerzo",
        "Tu apoyo incondicional",
        "La forma en que me miras",
        "Tu honestidad y transparencia",
        "Cómo entiendes mis silencios",
        "Tu pasión por [algo que le guste]",
        "Esa cosa única que haces con [detalle específico]",
        "Cómo me haces sentir amado",
        "Tu capacidad de escuchar",
        "Lo increíble que eres con [situación]",
        "Simplemente... eres tú"
    ];
    
    const balloons = document.querySelectorAll('.reason-balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {
            const reasonNumber = parseInt(this.getAttribute('data-reason'));
            alert(`Razón #${reasonNumber}:\n\n"${messages[reasonNumber-1]}"`);
        });
    });
}

// CARTA SECRETA
function openLetter() {
    const password = document.getElementById('letter-password').value;
    // CONTRASEÑA: Reemplaza "0101" con tu fecha real (DDMM)
    const correctPassword = "1703";
    if(password === correctPassword) {
        document.getElementById('letter-content').style.display = 'block';
    } else {
        alert("Contraseña incorrecta, amor. Intenta de nuevo ❤️");
    }
}

// INICIALIZAR
window.onload = function() {
    createHearts();
    setupReasons();
};

