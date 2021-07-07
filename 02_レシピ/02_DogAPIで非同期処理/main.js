const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random") //thenを繋げると、「データをとった後にどうする」というコードができる。thenが使えるのは基本fetchの後に限られている
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

//   fetch("https://dog.ceo/api/breeds/image/random")
//   .then(function(res) {
//     return res.json()
//   })
//   .then(function(data) {
//     imageElement.src = data.message
//   })　これでも同じ意味になる

//JSON は オブジェクトまたは配列に変換できる文字列 です。
//fetch() を使うときは、ひとつめの then() の中身は必ず同じで、ふたつめの then() で data を使ってなにか処理をする
