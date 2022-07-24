//sequencia de febonnaci
let fibonnaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
//verifica se o numero esta na sequencia
function verificaFibonnaci(numero) {
    for (let i = 0; i < fibonnaci.length; i++) {
        if (numero == fibonnaci[i]) {
            return true;
        }
    }
    return false;
}
console.log(verificaFibonnaci(8));
//vetor para faturamento
let faturamento = [0, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//calcula o faturamento
function calculaFaturamento(dia, faturamento) {
    let soma = 0;
    for (let i = 0; i < faturamento.length; i++) {
        soma += faturamento[i];
    }
    return soma * dia;
}
console.log(calculaFaturamento(3, faturamento));
//verificar qual dia tem o maior faturamento
function verificaDia(faturamento) {
    let maior = 0;
    let dia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > maior) {
            maior = faturamento[i];
            dia = i;
        }
    }
    return dia;
}
console.log(verificaDia(faturamento));
//verificar qual dia tem o menor faturamento
function verificaDiaMenor(faturamento) {
    let menor = 0;
    let dia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] < menor) {
            menor = faturamento[i];
            dia = i;
        }
    }
    return dia;
}
console.log(verificaDiaMenor(faturamento));
//valor de faturamento de uma destribuidora
let SP = 67.836;
let RJ = 36.678;
let MG = 29.229;
let ES = 27.164;
let outros = 19.849;
//calculando o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
function calculaPercentual(estado, valor) {
    return (estado / valor) * 100;

}
console.log(calculaPercentual(SP, outros));
console.log(calculaPercentual(RJ, outros));
console.log(calculaPercentual(MG, outros));
console.log(calculaPercentual(ES, outros));
console.log(calculaPercentual(outros, outros));
//comparativo de contribuicao
function comparativo(estado1, estado2) {
    if (estado1 > estado2) {
        return "O estado 1 teve maior contribuição";
    } else if (estado1 < estado2) {
        return "O estado 2 teve maior contribuição";
    } else {
        return "Os estados tem a mesma contribuição";
    }
}
console.log(comparativo(RJ, SP));
console.log(comparativo(SP, MG));
console.log(comparativo(ES, SP));
console.log(comparativo(SP, outros));
console.log(comparativo(RJ, MG));
console.log(comparativo(RJ, ES));
console.log(comparativo(RJ, outros));
console.log(comparativo(MG, ES));
console.log(comparativo(MG, outros));
console.log(comparativo(ES, outros));
//isso aqui lembra um pouco de matrizes e colunas do ensino medio(Indice i e j)
//cara eu resoovi colocar o desafio do codigo tudo em um unico local espero que nao seja um problema
//invertendo os caracteres de uma string desafio 5)
function inverteString(string) {
    let invertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}
console.log(inverteString("abcdefg"));