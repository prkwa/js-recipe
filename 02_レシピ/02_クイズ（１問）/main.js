const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
//配列の個数分のボタンを作る、idは上からchoice１など
// const choicesContainer = document.getElementById("choices-container")

// const makeButton = function(buttonNum) {
//   for (let i = 0; i < quiz.choices.length; i++) {
//     var makediv = document.createElement("div")
//     makediv.id = "choice-" + i
//     choicesContainer.appendChild(makediv)
//   }
// }

const feedback = document.getElementById("feedback")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")

const quiz = {
  text: "この星の名前はなんでしょう？",
  image: "hirame.jpeg",
  choices: [
    {
      text: "ヒラメ",
      feedback: "正解！ヒラメは秋におすすめのお寿司だよ。",
    },
    {
      text: "鯛",
      feedback: "残念！回転寿司の鯛は原価率がかなり高いらしいよ。",
    },
    {
      text: "ハマチ",
      feedback: "残念！ハマチとブリは同じ魚だよ",
    },
    {
      text: "いか",
      feedback: "残念！流石にいかと魚は間違えないでしょ・・・",
    },
  ],
}

const reloadQuiz = function() {
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}
choice4.onclick = function() {
  choose(3)
}
reloadQuiz()
