const questions = [
  {
    question: "1. Qual desses é um processador da Qualcomm?",
    options: ["Snapdragon", "Exynos", "A17 Bionic", "Tensor"],
    answer: "Snapdragon"
  },
  {
    question: "2. Qual empresa fabrica o chip Exynos?",
    options: ["MediaTek", "Qualcomm", "Samsung", "Apple"],
    answer: "Samsung"
  },
  {
    question: "3. Qual desses processadores é desenvolvido pela Apple?",
    options: ["Snapdragon 8 Gen 2", "A17 Bionic", "Dimensity 9200", "Exynos 2200"],
    answer: "A17 Bionic"
  },
  {
    question: "4. O chip Dimensity é desenvolvido por qual empresa?",
    options: ["Qualcomm", "MediaTek", "Samsung", "Google"],
    answer: "MediaTek"
  },
  {
    question: "5. Qual é o principal foco dos chips Tensor do Google?",
    options: ["Performance bruta", "Jogos 3D", "Inteligência Artificial", "Eficiência energética"],
    answer: "Inteligência Artificial"
  },
  {
    question: "6. Qual tecnologia é usada para fabricar chips como o A17?",
    options: ["10nm", "7nm", "5nm", "3nm"],
    answer: "3nm"
  },
  {
    question: "7. Qual empresa fabrica fisicamente os chips da Apple?",
    options: ["Intel", "Samsung", "TSMC", "Foxconn"],
    answer: "TSMC"
  },
  {
    question: "8. O que significa a sigla SoC?",
    options: ["System of Chips", "System on Chip", "Secure on Chip", "Software on Chip"],
    answer: "System on Chip"
  },
  {
    question: "9. Qual é o principal concorrente do Snapdragon 8 Gen 2?",
    options: ["A17 Bionic", "Exynos 1280", "Dimensity 9300", "Tensor G2"],
    answer: "Dimensity 9300"
  },
  {
    question: "10. Qual desses é mais comum em celulares de entrada?",
    options: ["Snapdragon 8 Gen 3", "Apple M1", "MediaTek Helio G25", "Exynos 2200"],
    answer: "MediaTek Helio G25"
  }
];

// Renderiza o quiz dinamicamente
const quizForm = document.getElementById('quizForm');

questions.forEach((q, index) => {
  const div = document.createElement('div');
  div.className = "question";

  const h3 = document.createElement('h3');
  h3.textContent = q.question;
  div.appendChild(h3);

  q.options.forEach(option => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = `q${index + 1}`;
    radio.value = option;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(` ${option}`));
    div.appendChild(label);
  });

  quizForm.appendChild(div);
});

// Valida e calcula a pontuação
document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  document.getElementById("result").textContent = 
    `Você acertou ${score} de ${questions.length} perguntas.`;
});
