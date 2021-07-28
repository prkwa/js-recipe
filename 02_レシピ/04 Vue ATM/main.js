new Vue({
  el: "#app",
  data: {
    inputValue: "",
    balance: 0,
    logs: [],
  },
  methods: {
    addMoney: function() {
      this.balance += Number(this.inputValue)
      const now = new Date()
      var log = document.createElement("div")
      log.id = "log"
      log.innerHTML = `***<br>日付：${now} <br>操作：入金<br>金額：${this.inputValue}`
      var parent = document.getElementById("container")
      parent.appendChild(log)
    },
    minusMoney: function() {
      if (this.balance >= this.inputValue) {
        this.balance -= Number(this.inputValue)
        const now = new Date()
        var log = document.createElement("div")
        log.id = "log"
        log.innerHTML = `***<br>日付：${now} <br>操作：出金<br>金額：${this.inputValue}`
        var parent = document.getElementById("container")
        parent.appendChild(log)
      } else {
        const now = new Date()
        var log = document.createElement("div")
        log.id = "log"
        log.innerHTML = `***<br>日付：${now} <br>残高不足のため${this.inputValue}円の出金に失敗しました`
        var parent = document.getElementById("container")
        parent.appendChild(log)
      }
    },
  },
})

timerID = setInterval("clock()", 500) //0.5秒毎にclock()を実行

function clock() {
  document.getElementById("view_clock").innerHTML = getNow()
}

function getNow() {
  var now = new Date()
  var year = now.getFullYear()
  var mon = now.getMonth() + 1 //１を足すこと
  var day = now.getDate()
  var hour = now.getHours()
  var min = now.getMinutes()
  var sec = now.getSeconds()

  //出力用
  var s =
    year +
    "年" +
    mon +
    "月" +
    day +
    "日" +
    hour +
    "時" +
    min +
    "分" +
    sec +
    "秒"
  return s
}
