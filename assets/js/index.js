document.addEventListener('DOMContentLoaded', function() {

  let db = coDesConnect("https://codesapp-projeto-1.firebaseio.com/")

  db.download("portifolio", function(data) {
    coDesReplace(".header", data)
    coDesReplace(".secoes", data)
  })
})