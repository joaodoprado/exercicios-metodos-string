const nome = 'Guido Cerqueira';

let nickname = nome.slice(0,13).replace(" ", "").toLowerCase()
nickname = nickname.replace(/(\d{0})/, "@")
console.log(nickname)