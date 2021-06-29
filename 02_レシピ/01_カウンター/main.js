const display1 = document.getElementById("display1")
const plusButton = document.getElementById("plus-button")
let count = 0
plusButton.onclick = function() {
  count += 1
  display1.textContent = count
}

const minusButton = document.getElementById("minus-button")

minusButton.onclick = function() {
  count -= 1
  display1.textContent = count
}

const doubleButton = document.getElementById("double-button")

doubleButton.onclick = function() {
  count = count * 2
  display1.textContent = count
}

//計算機
console.log("発展　計算機")

let myTotal = 0 //合計値
let myInput = "" //現在の値
let myCalc = "+" //合計と入力値の演算子
let myFlg = 1 //一回前に入力したもの（0は数字、１が演算子）

//数字が入力された時myDataにその数字が入る
function myValue(myData) {
  myFlg = 0
  myInput += myData //文字列として入力されるため足し算でなく連続で表示される
  document.myForm.myLine.value = myInput //数字を表示
}
function myCalculate(myData) {
  // 演算ボタンを押した
  if (myFlg == 0) {
    // １回前に入力したものは数値か？
    myFlg = 1 // １回前に入力したものは演算子
    myWork = myTotal + myCalc + myInput // 一連の計算式を作る
    myTotal = eval(myWork) // 文字列の計算式をevalで計算にする
    myInput = "" // 現在入力している値をクリア
    document.myForm.myLine.value = myTotal // 合計を表示
  }
  if (myData == "=") {
    // 演算ボタンは[＝]か？
    myTotal = 0 // 合計をクリア
    myCalc = "+" // 演算子を[+]とする
  } else {
    // 演算ボタンは[＝]以外である
    myCalc = myData // 演算子を退避させておく
  }
}

function myC() {
  // クリアボタン[C]を押した
  myTotal = 0 // 合計クリア
  myCalc = "+" // 演算子クリア
  myInput = "" // 現在入力している値をクリア
  document.myForm.myLine.value = myTotal // つまり、０を表示
}
