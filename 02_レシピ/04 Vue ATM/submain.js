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
      this.logs.push(`日付：${now}`)
      this.logs.push("操作：入金")
      this.logs.push(`金額：${this.inputValue}`)
    },
    minusMoney: function() {
      if (this.balance >= this.inputValue) {
        this.balance -= Number(this.inputValue)
        const now = new Date()
        this.logs.push(`日付：${now}`)
        this.logs.push("操作：出金")
        this.logs.push(`金額：${this.inputValue}`)
      } else {
        const now = new Date()
        this.logs.push(`日付：${now}`)
        this.logs.push("操作：出金")
        this.logs.push(`残高不足のため${this.inputValue}円の出金に失敗しました`)
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
