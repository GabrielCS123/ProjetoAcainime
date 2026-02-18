// ====================== ARRAY DE PERGUNTAS POR TEMA ======================
const allQuestions = {
    demon: [
        {
            question: 'Quem é o protagonista de Demon Slayer?',
            answers: [
                { text: 'Zenitsu', correct: false },
                { text: 'Tanjiro Kamado', correct: true },
                { text: 'Inosuke', correct: false },
                { text: 'Giyu', correct: false }
            ]
        },
        {
            question: 'Quem é a irmã de Tanjiro?',
            answers: [
                { text: 'Nezuko', correct: true },
                { text: 'Shinobu', correct: false },
                { text: 'Kanae', correct: false },
                { text: 'Kanao', correct: false }
            ]
        },
        {
            question: 'Quem é o principal vilão de Demon Slayer?',
            answers: [
                { text: 'Akaza', correct: false },
                { text: 'Kokushibo', correct: false },
                { text: 'Muzan Kibutsuji', correct: true },
                { text: 'Doma', correct: false }
            ]
        },
        {
            question: 'Qual elemento Tanjiro usa na respiração?',
            answers: [
                { text: 'Fogo', correct: false },
                { text: 'Vento', correct: false },
                { text: 'Água', correct: true },
                { text: 'Trovão', correct: false }
            ]
        },
        {
            question: 'Qual personagem usa a Respiração do Trovão?',
            answers: [
                { text: 'Inosuke', correct: false },
                { text: 'Zenitsu', correct: true },
                { text: 'Rengoku', correct: false },
                { text: 'Uzui', correct: false }
            ]
        },
        {
            question: 'Qual Hashira morre no filme Trem Infinito?',
            answers: [
                { text: 'Tengen Uzui', correct: false },
                { text: 'Giyu Tomioka', correct: false },
                { text: 'Kyojuro Rengoku', correct: true },
                { text: 'Muichiro', correct: false }
            ]
        },
        {
            question: 'Quem treinou Tanjiro para ser caçador?',
            answers: [
                { text: 'Sakonji Urokodaki', correct: true },
                { text: 'Giyu', correct: false },
                { text: 'Kagaya', correct: false },
                { text: 'Tengen', correct: false }
            ]
        },
        {
            question: 'Qual máscara Tanjiro usa no início?',
            answers: [
                { text: 'De javali', correct: false },
                { text: 'De raposa', correct: true },
                { text: 'De demônio', correct: false },
                { text: 'De oni', correct: false }
            ]
        },
        {
            question: 'Quem é o Hashira da Borboleta?',
            answers: [
                { text: 'Mitsuri', correct: false },
                { text: 'Shinobu', correct: true },
                { text: 'Kanae', correct: false },
                { text: 'Kanao', correct: false }
            ]
        },
        {
            question: 'Qual personagem usa duas espadas serrilhadas?',
            answers: [
                { text: 'Tanjiro', correct: false },
                { text: 'Zenitsu', correct: false },
                { text: 'Inosuke', correct: true },
                { text: 'Giyu', correct: false }
            ]
        }
    ],
    onepiece: [
        {
            question: 'Qual é o sonho de Luffy?',
            answers: [
                { text: 'Ser o Rei dos Piratas', correct: true },
                { text: 'Encontrar o One Piece', correct: false },
                { text: 'Ser marinheiro', correct: false },
                { text: 'Derrotar Shanks', correct: false }
            ]
        },
        {
            question: 'Qual fruta do diabo Luffy comeu?',
            answers: [
                { text: 'Gomu Gomu no Mi', correct: true },
                { text: 'Mera Mera no Mi', correct: false },
                { text: 'Hito Hito no Mi', correct: false },
                { text: 'Yami Yami no Mi', correct: false }
            ]
        },
        {
            question: 'Quem é o espadachim dos Chapéus de Palha?',
            answers: [
                { text: 'Sanji', correct: false },
                { text: 'Zoro', correct: true },
                { text: 'Law', correct: false },
                { text: 'Mihawk', correct: false }
            ]
        },
        {
            question: 'Quem é o cozinheiro do bando?',
            answers: [
                { text: 'Zoro', correct: false },
                { text: 'Usopp', correct: false },
                { text: 'Sanji', correct: true },
                { text: 'Franky', correct: false }
            ]
        },
        {
            question: 'Qual é o navio principal de Luffy?',
            answers: [
                { text: 'Red Force', correct: false },
                { text: 'Thousand Sunny', correct: true },
                { text: 'Going Merry', correct: false },
                { text: 'Moby Dick', correct: false }
            ]
        },
        {
            question: 'Quem é o pai de Luffy?',
            answers: [
                { text: 'Gol D. Roger', correct: false },
                { text: 'Monkey D. Dragon', correct: true },
                { text: 'Garp', correct: false },
                { text: 'Shanks', correct: false }
            ]
        },
        {
            question: 'Quem é o melhor atirador do bando?',
            answers: [
                { text: 'Usopp', correct: true },
                { text: 'Nami', correct: false },
                { text: 'Franky', correct: false },
                { text: 'Chopper', correct: false }
            ]
        },
        {
            question: 'Quem é o médico dos Chapéus de Palha?',
            answers: [
                { text: 'Law', correct: false },
                { text: 'Chopper', correct: true },
                { text: 'Robin', correct: false },
                { text: 'Brook', correct: false }
            ]
        },
        {
            question: 'Quem foi o antigo Rei dos Piratas?',
            answers: [
                { text: 'Barba Branca', correct: false },
                { text: 'Gol D. Roger', correct: true },
                { text: 'Shanks', correct: false },
                { text: 'Kaido', correct: false }
            ]
        },
        {
            question: 'Quem usa o estilo das Três Espadas?',
            answers: [
                { text: 'Sanji', correct: false },
                { text: 'Zoro', correct: true },
                { text: 'Mihawk', correct: false },
                { text: 'Law', correct: false }
            ]
        }
    ],
    naruto: [
        {
            question: 'Qual é o clã do Naruto?',
            answers: [
                { text: 'Uchiha', correct: false },
                { text: 'Uzumaki', correct: true },
                { text: 'Hyuga', correct: false },
                { text: 'Senju', correct: false }
            ]
        },
        {
            question: 'Quem é o melhor amigo do Naruto?',
            answers: [
                { text: 'Kakashi', correct: false },
                { text: 'Sasuke', correct: true },
                { text: 'Shikamaru', correct: false },
                { text: 'Gaara', correct: false }
            ]
        },
        {
            question: 'Qual biju Naruto possui dentro de si?',
            answers: [
                { text: 'Shukaku', correct: false },
                { text: 'Kurama', correct: true },
                { text: 'Matatabi', correct: false },
                { text: 'Gyuki', correct: false }
            ]
        },
        {
            question: 'Quem é o sensei do Time 7?',
            answers: [
                { text: 'Jiraiya', correct: false },
                { text: 'Iruka', correct: false },
                { text: 'Kakashi', correct: true },
                { text: 'Tsunade', correct: false }
            ]
        },
        {
            question: 'Qual é o clã do Sasuke?',
            answers: [
                { text: 'Senju', correct: false },
                { text: 'Uchiha', correct: true },
                { text: 'Hyuga', correct: false },
                { text: 'Nara', correct: false }
            ]
        },
        {
            question: 'Quem é o Sétimo Hokage?',
            answers: [
                { text: 'Kakashi', correct: false },
                { text: 'Naruto', correct: true },
                { text: 'Minato', correct: false },
                { text: 'Tsunade', correct: false }
            ]
        },
        {
            question: 'Qual jutsu Naruto usa mais?',
            answers: [
                { text: 'Chidori', correct: false },
                { text: 'Rasengan', correct: true },
                { text: 'Amaterasu', correct: false },
                { text: 'Byakugan', correct: false }
            ]
        },
        {
            question: 'Quem é o pai de Naruto?',
            answers: [
                { text: 'Jiraiya', correct: false },
                { text: 'Minato Namikaze', correct: true },
                { text: 'Kakashi', correct: false },
                { text: 'Hiruzen', correct: false }
            ]
        },
        {
            question: 'Qual é a vila de Naruto?',
            answers: [
                { text: 'Vila da Areia', correct: false },
                { text: 'Vila da Folha', correct: true },
                { text: 'Vila da Névoa', correct: false },
                { text: 'Vila da Nuvem', correct: false }
            ]
        },
        {
            question: 'Quem é o rival de Naruto?',
            answers: [
                { text: 'Rock Lee', correct: false },
                { text: 'Neji', correct: false },
                { text: 'Sasuke', correct: true },
                { text: 'Gaara', correct: false }
            ]
        }
    ]
};

// ====================== VARIAVEIS ======================
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');


// ====================== PEGAR TEMA SALVO ======================
const savedTheme = localStorage.getItem("anime");

if (!savedTheme || !allQuestions[savedTheme]) {
    alert("Nenhum tema encontrado. Volte e escolha seu anime.");
    window.location.href = "../../home.html";
}

questions = allQuestions[savedTheme];

// 🔥 APLICA TEMA NO BODY
document.body.classList.add(`theme-${savedTheme}`);

questions = allQuestions[savedTheme];

// Inicia direto
startQuiz();

// ====================== IMAGEM + TITULO ======================

const avatar = document.getElementById("animeAvatar");
const title = document.getElementById("animeTitle");

const animeNames = {
    naruto: "Naruto",
    demon: "Demon Slayer",
    onepiece: "One Piece"
};

title.textContent = `Quiz - ${animeNames[savedTheme]}`;
avatar.style.backgroundImage = `url(../../imagens/${savedTheme}.jpg)`;


// ====================== FUNCOES ======================
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Próxima ➜';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === 'true') button.classList.add('correct');
        button.disabled = true;
    });

    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = `Quiz finalizado! Pontuação: ${score}/${questions.length}`;
        answerButtonsElement.innerHTML = '';
        nextButton.classList.add('hide');
    }
});
