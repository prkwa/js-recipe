new Vue({
  el: "#app",
  data: {
    inputValue: 0,
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
