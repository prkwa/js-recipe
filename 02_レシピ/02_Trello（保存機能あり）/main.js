const inputElement = document.getElementById("input-todo") //入力欄
const container = document.getElementById("cards-container") //
const addButton = document.getElementById("add-button") //

// 追加ボタンを押したら
addButton.onclick = function() {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value

  // card （todoの内容と削除ボタンを入れた箱）を作成
  const card = document.createElement("div") //createElementでまっさらな要素ができるためそこからclassNameやtextContentをたす
  card.className = "card"

  // todo （todoの内容のみ）を作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  // todo を card の中に追加する、作ったものを入れたい場所に持っていくイメージ
  card.append(todo)

  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)
  // card を container の中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}
