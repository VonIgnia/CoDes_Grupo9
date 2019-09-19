document.addEventListener('DOMContentLoaded', function() {

  let db = coDesConnect("https://codesapp-projeto-1.firebaseio.com/")

  let parametros = coDesExtract()

  let categoria;

  if (parametros.hasOwnProperty("categoria")) {
    categoria = parametros["categoria"]
  }

  let projeto;

  if (parametros.hasOwnProperty("projeto")) {
    projeto = parametros["projeto"]
  }

  db.download("portifolio", function(data) {

    categoria = categoria.toLowerCase()

    projeto = projeto.toLowerCase()

  	if (!data.hasOwnProperty(categoria)) {
      console.log("Erro -> Categoria não idendificada");
      
      categoria = "jogos"
    }

    if (!data[categoria]["projetos"].hasOwnProperty(projeto)) {
      console.log("Erro -> Projeto não idendificado");
      
      categoria = "jogos"

      projeto = "lastsurprize"
    }

    document.body.innerHTML = document.body.innerHTML.replace(/qual_categoria/g, categoria)

    coDesReplace(".header", data)
    coDesReplace(".apresentacao", data[categoria]["projetos"][projeto])
    coDesReplace(".secoes2", data[categoria]["projetos"][projeto])
    coDesReplace(".secao-imagem2", data[categoria]["projetos"][projeto])
    coDesReplace(".about", data[categoria]["projetos"][projeto])
    coDesReplace(".galeria-figure", data[categoria]["projetos"][projeto])
    coDesReplace(".secoes", data[categoria])
  })
})