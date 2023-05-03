const quizData = [{
        question: "Seorang pedagang membeli 30 buah kemeja dengan harga Rp2.850.000,00. Kemudian, kemeja tersebut dijual dengan harga Rp96.500. Pedagang tersebut mendapatkan...",
        a: "Untung Rp45.000,00",
        b: "Rugi Rp45.000,00",
        c: "Untung Rp55.000,00",
        d: "Rugi Rp55.000,00",
        correct: "a",
    },
    {
        question: "Satu lusin buku tulis dibeli denga  harga Rp28.200,00. Buku tulis tersebut dijual kembali dengan harga Rp2.750,00/buahnya. Bila terjual seluruhnya, berapa keuntungan yang diperoleh?",
        a: "Rp4.800,00",
        b: "Rp5.200,00",
        c: "Rp5.000,00",
        d: "Rp3.600,00",
        correct: "a",
    },
    {
        question: "Harga beli sebuah tas adalah Rp112.500,00. Seorang pedagang menjualnya kembali dengan mengambil keuntungan sebesar 20%. Harga jual tas tersebut adalah...",
        a: "Rp136.000,00",
        b: "Rp145.000,00",
        c: "Rp142.000,00",
        d: "Rp135.000,00",
        correct: "d",
    },
    {
        question: "Pernyataan berikut yang benar, kecuali...",
        a: "Untung =  harga jual - harga beli",
        b: "Untung =  harga beli - harga jual",
        c: "Rugi =  untung + harga beli",
        d: "Rugi =  harga jual - harga beli",
        correct: "a",
    },
    {
        question: "Sebuah Lemari dijual dengan harga Rp640.000,00. Pedagang memberikan rabat sebesar 15% kepada pembeli. Uang yang harus dibayarkan pembeli kepada penjual sebesar...",
        a: "Rp520.000,00",
        b: "Rp484.000,00",
        c: "Rp532.000,00",
        d: "Rp544.000,00",
        correct: "d",
    },
    {
        question: "Pernyataan berikut yang benar adalah...",
        a: "Bruto = neto - tara",
        b: "Neto =  bruto + tara",
        c: "Tara =  bruto - neto",
        d: "Tara =  neto + bruto",
        correct: "c",
    },
    {
        question: "Deni membeli sepatu dengan harga Rp329.000,00 kemudian sepatu itu dijual kepada saudaranya dan mengalami kerugian 2%. Harga penjualan sepatu adalah...",
        a: "Rp322.420,00",
        b: "Rp329.000,00",
        c: "Rp335.580,00",
        d: "Rp345.420,00",
        correct: "a",
    },
    {
        question: "Delapan lusin gantungan boneka dibeli dengan harga Rp330.000,00. Kemudian dijual dan ternyata mengalami kerugian sebesar Rp18.000,00. Harga penjualan tiap buah gantungan boneka tersebut adalah...",
        a: "Rp3.520,00",
        b: "Rp3.250,00",
        c: "Rp5.230,00",
        d: "Rp5.320,00",
        correct: "b",
    },
    {
        question: "Sebuah toko elektronik memberikan diskon 15%. Doni membeli sebuah Mp3 dengan harga Rp380.000,00. Uang yang harus dibayar Doni adalah...",
        a: "Rp323.000,00",
        b: "Rp332.000,00",
        c: "Rp360.000,00",
        d: "Rp368.000,00",
        correct: "a",
    },
    {
        question: "Seorang pedagang membeli 1 lusin pensil dengan harga Rp96.000. Jika pedagang tersebut menghendaki untung 25%, maka harga penjualan sebuah pensil adalah...",
        a: "Rp6.000,00",
        b: "Rp8.000,00",
        c: "Rp10.000,00",
        d: "Rp12.000,00",
        correct: "c",
    },
];

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
    document.querySelector("#number").innerHTML = currentQuiz + 1;

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    Swal.fire({
        title: 'Apakah kamu yakin?',
        text: "Silakan cek kembali jawabanmu!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, lanjut!'
    }).then((result) => {
        if (result.isConfirmed) {
            if (answer) {
                if (answer === quizData[currentQuiz].correct) score++;
                currentQuiz++;
                if (currentQuiz < quizData.length) loadQuiz();
                else {
                    let nilaiAkhir = score * 10;
                    if (nilaiAkhir <= 60) {
                        quiz.innerHTML =
                            `<h2 id="question">
                        Nilai Akhir Kamu ${nilaiAkhir}. Semangat! Ayo coba lagi, Kamu pasti bisa!
                        </h2>
                        <img src=" ../images/middle.png" />
      <button class="klik p-2" onclick="history.go(0)">Uji lagi</button>
      <a href="#kunci" class="klik p-2 mt-2" >Cek kunci jawaban dan pembahasan</a>` // location.reload() won't work in CodePen for security reasons;
                    } else {
                        quiz.innerHTML =
                            `<h2 id="question">
                    Nilai Akhir Kamu ${nilaiAkhir}. Good! 
                    </h2>
                    <img src=" ../images/icons-happy.png" />
  <button class="klik p-2 rounded-lg" onclick="history.go(0)">Uji lagi</button>
  <a href="#kunci" class="klik p-2 mt-2 rounded-lg" >Cek kunci jawaban dan pembahasan</a>` // location.reload() won't work in CodePen for security reasons;
                    }
                }
            }
        }
    })
});