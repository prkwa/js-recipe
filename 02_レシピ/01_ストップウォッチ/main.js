const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0
const countUp = function() {
  count += 1
  display.textContent = count / 100
}
//countUpが始まったらカウントを足していく

let id = null
button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
//idはsetIntervalを実行した戻り値
//実行してるタイマーがなければ追加して、あれば削除するのが「id === null」の判定
//すでにidが存在していたらclearIntervalで止める
//setIntervalでタイマーが増える

//発展1
console.log(
  "このタイマーにわずかなズレが生じるのは、カウントが増すごとにcount/100の処理に時間がかかってしまうから",
)
