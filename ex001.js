const comentario = "Esse COVID é muito perigoso!";

if(comentario.includes("PANDEMIA") || comentario.includes("COVID") || comentario.includes("covid") || comentario.includes("pandemia") || comentario.includes("Covid") || comentario.includes("Pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
}