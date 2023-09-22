//Q and A
const quizData = [
  {
  question: "Who actually drew the sketch of Rose in Titanic?",
  a: "Leonardo DiCaprio",
  b: "Billy Zane",
  c: "Kathy Bates",
  d: "James Cameron",
  correct: "d",
  },
  {
  question: "The Best original song award winner in the 95th Academy Awards 2023 is",
  a: "Applause (Tell It Like a Woman)",
  b: "Naatu Naatu (RRR)",
  c: "Hold My Hand (Top Gun: Maverick)",
  d: "This is a Life  (Everything Everywhere All at Once)",
  correct: "b",
  },
  {
  question: "What is the name of Simba's father in “The Lion King”?",
  a: "Timon",
  b: "Scar",
  c: "Mufasa",
  d: "Nemo",
  correct: "c",
  },
  {
  question: "Which among the following are Christopher Nolan Movies?",
  a: "All of the below",
  b: "Dark Knight",
  c: "Dark Knight Rises",
  d: "Batman Begins",
  correct: "a",
  },
  ];
  
  //variable definitions
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  let currentQuiz = 0;
  let score = 0;

  //method declarations
  const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
  };
  const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
  if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
  };
  const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  };
  loadQuiz();

  //submit key functionality
  submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
  if (answer === quizData[currentQuiz].correct) score++;
  currentQuiz++;
  if (currentQuiz < quizData.length) loadQuiz();
  else {
  quiz.innerHTML = `
  <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  <button onclick="history.go(0)">Play Again</button>
  `
  }
  }
  });