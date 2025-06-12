const phrases = [
  "Você é a razão do meu sorriso todos os dias.",
  "Meu lugar favorito no mundo é ao seu lado.",
  "Amar você é a melhor parte do meu dia.",
  "Você é meu sonho que virou realidade.",
  "Te amo mais do que ontem e menos que amanhã.",
  "Com você, todos os momentos são especiais.",
  "Você é minha para sempre.",
  "Meu coração é todo seu.",
  "Te Amão",
  "Seu sorriso é a minha canção favorita",
  "Você é meu sonho realizado",
  "Você é a pessoa que eu escolho todo dia"
];

function showNewPhrase() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("romantic-phrase").textContent = phrase;
}

function playMusic() {
  const music = document.getElementById("loveSong");
  music.play();
}

function showLetter() {
  const letter = document.getElementById("loveLetter");
  letter.classList.add("show");
}

function modoSurpresa() {
  const carta = document.getElementById("loveLetter");
  const musica = document.getElementById("loveSong");

  if (carta.classList.contains("show")) {
    // Fechar carta e parar música
    carta.classList.remove("show");
    musica.pause();
    musica.currentTime = 0;
  } else {
    // Mostrar carta, corações e tocar música
    toggleHearts();
    carta.classList.add("show");
    musica.play();
  }
}

function toggleHearts() {
  const container = document.getElementById("hearts-container");
  const heartEmojis = ["❤️", "💖", "💘", "💕", "💓", "💞", "💗", "💟"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Define posição e emoji aleatórios
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    // Velocidade e escala aleatórias
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    container.appendChild(heart);

    // Remover após animação
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}


