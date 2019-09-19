document.addEventListener('DOMContentLoaded', function() {

  let db = coDesConnect("https://codesapp-projeto-1.firebaseio.com/")

  let parametros = coDesExtract()

  let categoria;

  if (parametros.hasOwnProperty("categoria")) {
    categoria = parametros["categoria"]
  }

  db.download("portifolio", function(data) {

	categoria = categoria.toLowerCase()

  	if (!data.hasOwnProperty(categoria)) {
      console.log("Erro -> Categoria não idendificada");
      
      categoria = "jogos"
    }


    document.body.innerHTML = document.body.innerHTML.replace(/qual_categoria/g, categoria)

    coDesReplace(".header", data)
    coDesReplace(".apresentacao", categoria)
    coDesReplace(".secoes", data[categoria])
  })
})