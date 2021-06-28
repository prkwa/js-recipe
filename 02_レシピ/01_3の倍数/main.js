// 引数 number を受け取る関数
console.log("練習問題")
const genkiFunction = function(number) {
  // n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(10)

//発展１
console.log("発展１")
const hatten1 = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else console.log(n)
  }
}

hatten1(20)

//発展２
console.log("発展２")
const nabeFunction = function(number) {
  for (let i = 1; i <= number; i++) {
    if (/3/.test(i)) {
      console.log(i + "!!!!!")
    } else {
      console.log(i)
    }
  }
}
// /3/.test(i)はiに3が含まれているのか確かめている。/a/は正規表現という
//test()は一致するものがあるかを検索する。trueまたはfalseを返す。
nabeFunction(40)

//発展３
console.log("発展３")

const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  // count を更新
  count += 1
  // count を秒単位にして表示
  if (count % 3 === 0) {
    display.textContent = count + "!!!!"
  } else {
    display.textContent = count
  }
}

let id = null // null は 値なし を意味する値

button.onclick = function() {
  if (id === null) {
    // start
    id = setInterval(countUp, 1000)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
