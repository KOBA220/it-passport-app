const quizArea = document.getElementById("quiz-area");
const gradeBtn = document.getElementById("grade-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestions = [];
let currentType = "単語";

function shuffle(array) {

  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
}

function changeType(type) {

  currentType = type;

  loadQuestions();
}

function loadQuestions() {

  quizArea.innerHTML = "";

  // タイプ別に絞り込み
  const filtered = questions.filter(q => {
    return q.type === currentType;
  });

  // 3問ランダム出題
  currentQuestions = shuffle(filtered).slice(0, 3);

  currentQuestions.forEach((q, qIndex) => {

    const box = document.createElement("div");

    box.className = "question-box";

    let html = `
      <h3>
        Q${qIndex + 1}.
        ${q.year ? "[" + q.year + "] " : ""}
        ${q.question}
      </h3>
    `;

    q.choices.forEach((choice, cIndex) => {

      html += `
        <div class="choice">
          <label>
            <input
              type="radio"
              name="q${qIndex}"
              value="${cIndex}"
            >
            ${choice.text}
          </label>
        </div>
      `;
    });

    box.innerHTML = html;

    quizArea.appendChild(box);
  });

  gradeBtn.style.display = "inline-block";
  nextBtn.style.display = "none";
}

function gradeQuiz() {

  const boxes = document.querySelectorAll(".question-box");

  boxes.forEach((box, qIndex) => {

    const q = currentQuestions[qIndex];

    const selected = document.querySelector(
      `input[name="q${qIndex}"]:checked`
    );

    let resultHTML = "";

    if (!selected) {

      resultHTML += `
        <p class="wrong">
          未回答
        </p>
      `;

    } else {

      const selectedIndex = Number(selected.value);

      const selectedChoice = q.choices[selectedIndex];

      if (selectedChoice.isCorrect) {

        resultHTML += `
          <p class="correct">
            ○ 正解
          </p>
        `;

      } else {

        resultHTML += `
          <p class="wrong">
            × 不正解
          </p>
        `;
      }
    }

    resultHTML += `
      <div class="explanation">
    `;

    q.choices.forEach(choice => {

      const mark = choice.isCorrect
        ? "【正解】"
        : "【不正解】";

      resultHTML += `
        <p>
          ${mark} ${choice.text}<br>
          ${choice.explanation}
        </p>
      `;
    });

    resultHTML += `
      </div>
    `;

    box.innerHTML += resultHTML;
  });

  gradeBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

gradeBtn.addEventListener("click", gradeQuiz);

nextBtn.addEventListener("click", () => {

  loadQuestions();
});

loadQuestions();