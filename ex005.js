const numeroCartao = '1111222233334444';

let primeirosNum = numeroCartao.slice(0,4);
let ultimosNum = numeroCartao.slice(-4);
let cartaoFormatado = primeirosNum.padEnd(16, " **** ") + ultimosNum

console.log(cartaoFormatado)