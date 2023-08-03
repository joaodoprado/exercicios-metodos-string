const celular = 99918888;

let string = celular.toString()

if (string.length == 10) {
    let celularComDdd = string.replace(/(\d{2})(\d{4})(\d{4})/, "($1) 9 $2-$3")
    
    console.log(celularComDdd)
 } else if (string.length == 8) {
    let celularSemDdd = string.replace(/(\d{4})(\d{4})/, "9 $1-$2")
    console.log(celularSemDdd)
 }