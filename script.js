// CORAZONES FLOTANTES
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 100; i++) {
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
        "Que me haces sentir la persona mas feliz de este mundo",
        "Cómo entiendes mis silencios",
        "Tu pasión por la informatica",
        "Esos ojos bellos",
        "Cómo me haces sentir amado",
        "Tu capacidad de escuchar",
        "Lo increíble que eres",
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
    const correctPassword = "1403";
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

// Efecto adicional para los botones de música
document.querySelectorAll('.music-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const note = document.createElement('span');
                note.innerHTML = '♪';
                note.style.position = 'absolute';
                note.style.left = Math.random() * 30 + 'px';
                note.style.fontSize = (Math.random() * 10 + 10) + 'px';
                note.style.animation = `noteFloat ${Math.random() * 0.5 + 0.5}s ease-out forwards`;
                this.appendChild(note);
                
                setTimeout(() => {
                    note.remove();
                }, 500);
            }, i * 200);
        }
    });
});
