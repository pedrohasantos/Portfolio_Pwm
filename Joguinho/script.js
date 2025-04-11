// Gera uma senha aleatória de 4 dígitos únicos
function generateSecret() {
    let digits = [];
    while (digits.length < 4) {
      let digit = Math.floor(Math.random() * 10);
      if (!digits.includes(digit)) digits.push(digit);
    }
    return digits.join('');
  }
  
  const secret = generateSecret();
  const form = document.getElementById("guessForm");
  const input = document.getElementById("guessInput");
  const history = document.getElementById("history");
  const revealBtn = document.getElementById("revealBtn");
  
  function checkGuess(guess, secret) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === secret[i]) {
        bulls++;
      } else if (secret.includes(guess[i])) {
        cows++;
      }
    }
    return { bulls, cows };
  }
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const guess = input.value;
  
    if (guess.length !== 4 || new Set(guess).size !== 4 || /\D/.test(guess)) {
      alert("Digite 4 dígitos únicos.");
      return;
    }
  
    const { bulls, cows } = checkGuess(guess, secret);
  
    const entry = document.createElement("li");
    entry.textContent = `Tentativa: ${guess} — ${bulls} Bulls, ${cows} Cows`;
  
    // Insere no topo da lista
    history.insertBefore(entry, history.firstChild);
    input.value = '';

    if (bulls === 4) {
        setTimeout(() => {
          alert("🎉 Parabéns! Você descobriu a senha secreta!");
        }, 100);
      }
  });
  
  revealBtn.addEventListener("click", () => {
    alert(`Você desistiu e escolheu o jeito fácil, a senha é: ${secret}`);
  });
  