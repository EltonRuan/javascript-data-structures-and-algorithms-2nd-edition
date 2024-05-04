var num = 5;
if (num == 1) {
    console.log('O número é 1');
} else {
    console.log('O número NÃO é 1');
}

(num === 3) ? num-- : num++;
console.log(num);


var month = 5;
if (month === 1) {
    console.log('O mês é janeiro');
} else if (month === 2) {
    console.log('O mês é fevereiro');
} else if (month === 3) {
    console.log('O mês é março');
} else {
    console.log('O mês não é janeiro, fevereiro ou março');
}

switch (month) {
    case 1:
        console.log('O mês é janeiro');
        break;
    case 2:
        console.log('O mês é fevereiro');
        break;
    default:
        console.log('O mês não é janeiro nem fevereiro');
}
