const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")
circleButton.onclick = function() {
  figure.classList.add("rounded")
}
squareButton.onclick = function() {
  figure.classList.remove("rounded")
}
//figureのクラスを足すまたは取り除くコマンド
//classList.toggle()はクラスが要素にあれば削除、なければ追加
const figure2 = document.getElementById("figure2")
figure2.onclick = function() {
  figure2.classList.toggle("rounded")
}
//発展１
const figure3 = document.getElementById("figure3")
figure3.onmouseover = function() {
  figure3.classList.toggle("rounded")
}

//発展２
const figure4 = document.getElementById("figure4")

// classList.toggle() を分解してみる。

figure4.onclick = function() {
  // console.log() で classListがどう適っているかを確認する。
  // classList.valueにすると class="ここ" を見れる
  console.log(figure4.classList)

  if (figure4.classList.contains("circle") === true) {
    figure4.classList.remove("circle")
    figure4.classList.add("triangle")
  } else if (figure4.classList.contains("triangle") === true) {
    figure4.classList.remove("triangle")
  } else {
    figure4.classList.add("circle")
  }
}
