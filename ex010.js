const nomeArquivo = 'Foto da Familia.png';

function validarImagem(nomeArquivo) {
    let localPonto = formato.lastIndexOf(".")
    formato = formato.slice(localPonto + 1)
    console.log(formato)
    if (formato == 'jpg' || formato == 'jpeg' || formato == 'gif' || formato == 'png') {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}
let formato = nomeArquivo;

validarImagem(nomeArquivo)