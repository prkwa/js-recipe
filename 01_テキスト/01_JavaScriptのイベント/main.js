const button = document.getElementById("button")

button.onclick = function() {
  alert("クリックしたね")
}

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")
const sayHello = function() {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

const logValue = function(e) {
  console.log(e.target.value)
}
//入力した値はeを受け取ってe.target.valueで使える
inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function(e) {
  console.log(e.key)
}
