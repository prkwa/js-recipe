new Vue({
  el: "#addMoney",
  data: {
    inputValue: "",
  },
  methods: {
    inputValue: function() {
      // inputで入力される値はString型なので、Number() でNumber型に変換しないといけない。
      this.zandaka += Number(this.inputValue)
    },
  },
})

new Vue({
  el: "#minusMoney",
  data: {
    zandaka: "0",
  },
})

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
