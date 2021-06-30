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
