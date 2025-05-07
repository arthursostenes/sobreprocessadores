function submitQuiz() {
  const answers = {
    q1: "Snapdragon",
    q2: "Samsung",
    q3: "A17 Bionic",
    q4: "MediaTek",
    q5: "Inteligência Artificial",
    q6: "3nm",
    q7: "TSMC",
    q8: "System on Chip",
    q9: "Dimensity 9300",
    q10: "MediaTek Helio G25"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const total = Object.keys(answers).length;
  document.getElementById("result").innerText =
    `Você acertou ${score} de ${total} perguntas.`;
}
