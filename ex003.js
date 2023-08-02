const texto = "Aprenda programar do zero na Cubos Academy";
let url = texto

while (url !== url.replace(" ", "-")) {
    url = url.replace(" ", "-")
}


console.log(url.toLowerCase())