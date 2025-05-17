// Corazones flotantes optimizados
let heartInterval = setInterval(createHearts, 500);
let activeHearts = new Set();

function createHearts() {
    const container = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart floating';
    heart.innerHTML = '❤️';
    
    heart.style.left = `${Math.random() * 95 + 2.5}%`;
    heart.style.animationDuration = `${Math.random() * 4 + 3}s`;
    heart.style.fontSize = `${Math.random() * 25 + 15}px`;
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    container.appendChild(heart);
    activeHearts.add(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
        activeHearts.delete(heart);
    });
}

// Sistema de mensajes con transiciones
let currentMessageIndex = 0;
const messages = [
    "Ya dos meses, aún me parece que fue ayer cuando comenzamos a salir juntos. En estos últimos 61 días no me arrepiento ni de un segundo que he paso junto a ti.",
    "Te amo más que a nada en este mundo. Eres la razón por la que mi corazón late con tanta fuerza cada día.",
    "Eres mi sueño hecho realidad, la persona que siempre quise encontrar y ahora tengo la suerte de tener a mi lado.",
    "Mi corazón es tuyo por completo, hoy, mañana y por toda la eternidad.",
    "Juntos por siempre 💞, superando cada obstáculo y celebrando cada momento feliz.",
    "Te amo muchisimo mi reina, muchas felicidades por hoy. Quiero seguir haciendote webs cada mes asi que sigamos juntos por siempre"
];

function showNextMessage() {
    const messageElement = document.querySelector('.message-text');
    const messageContainer = document.querySelector('.love-message');
    
    messageContainer.classList.remove('long-message');
    messageElement.style.animation = 'none';
    void messageElement.offsetWidth;
    messageElement.style.animation = 'pulse 2s infinite alternate';
    messageElement.style.opacity = '0';
    
    setTimeout(() => {
        const nextMessage = messages[currentMessageIndex];
        messageElement.textContent = nextMessage;
        
        if (nextMessage.length > 100) {
            messageContainer.classList.add('long-message');
        }
        
        messageElement.style.opacity = '1';
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        createConfetti();
    }, 500);
}

// Efecto confeti mejorado
function createConfetti() {
    const symbols = ['❤️', '💖', '💕', '✨', '🌟'];
    const container = document.createElement('div');
    container.className = 'confetti-container';
    
    for(let i = 0; i < 75; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        particle.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particle.style.fontSize = `${Math.random() * 20 + 15}px`;
        
        container.appendChild(particle);
    }
    
    document.body.appendChild(container);
    
    setTimeout(() => {
        container.remove();
    }, 3000);
}

// Evento principal del botón
document.getElementById('surpriseBtn').addEventListener('click', showNextMessage);

// Efectos de sonido (opcional)
function playBellSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log("Audio no soportado");
    }
}