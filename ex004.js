let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if(identificador.length < 6) {
    identificador = identificador.padStart(6, "000000")
}
let nomeFormatado = "";
let arrayNome = nome.split(" ");
for(let item of arrayNome) {
    let primeiraLetra = item.slice(0, 1);
    let restoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restoNome + " ";
}

email = email.trimStart()


console.log(identificador)
console.log(nomeFormatado.trim())
console.log(email)