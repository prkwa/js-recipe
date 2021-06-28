// 練習問題 １
const plus1 = function(x) {
  return x + 1
}
// 関数名: plus1
// 引数:x
// 返り値:x + 1

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function(x) {
  return 3 * x + 1
}
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function(x) {
  return 10 ** x
}
// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function(n) {
  return f1(n) + f2(n)
}
// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply
const multiply = function(x, y) {
  return x + y
}

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound
const plusRound = function(x, y) {
  return Math.round(x + y)
}

const sayHelloTo = function(name) {
  alert("Hello, " + name + "!")
}
// sayHelloTo("guys")

const alertTime = function() {
  alert(new Date().toLocaleString())
}
alertTime()

let count = 0
const countUp = function() {
  count += 1
}
countUp()
console.log(count) //1

// 基本
const 関数名 = function(引数) {
  return 返り値
}

function 関数名(引数) {
  return 返り値
}

// 以下は アロー関数 と呼ばれる関数の定義の仕方
const 関数名 = (引数) => 返り値

const 関数名 = (引数) => 返り値

const 関数名 = (引数) => {
  // 処理
  return 返り値
}
