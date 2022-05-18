"use strict"

// meu comentário
/*
    ssdfasdfas
    asdfasdfasdf
    asdfasdf
*/
// string boll float object number
let ferias = '30'; // undefined
let idade = 85; // number
let nomeCompleto = 'Pablo da Silva'; //string
let $salario = ""; // number
let _contrato = 1; // boolean ( true / false )
const DATA_DE_NASCIMENTO = '20/05/2020'; // string


let tipo = typeof ferias;
let calculoDeFerias = Number(ferias) + 2;
let convertToNumber = Number(_contrato);
let convertToString = String(_contrato);
let convertToBolean = Boolean($salario);


calculoDeFerias = ferias + 2; // 302 (+ concatena)

let dadosDoFunc = nomeCompleto + ' idade ' + idade + 'anos';

// operadores  aritmeticos : * / - + % resto ** expoente

// let calculo = '2' + 2;
let calculo = 2 ** 3; // 2x2x2


// concatenação

let i = 0;
//i = i + 1;
//i++;
//i--;

let nome = 'Jonas';
let sobreNome = ' Da Silva';

nome = nome + sobreNome;
nome += sobreNome;


/*
>
<
>=
<=
==  igual a
=== igual a considera o tipo
!=
!== diferente de considera o tipo
*/
let compare = true == 1;


let nota = 7;

// if (nota >= 7 ) {
//     console.log('Aluno aprovado');
// } else {
//     console.log('Aluno Reprovado');
// }

// if (nota >= 6) {
//     console.log('Primeiro test');
//     if (nota <= 8) {
//         console.log('Alunos de recuperação');
//     }
//     else {
//         console.log('segundo test');
//     }
// }
// else {
//     console.log('terceiro test');
//     if (nota > 2) {
//         console.log('quarto test');
//     }
// }

/* Operadores logicos:  */
// Ou "||"
// E "&&"
// Não !
let nota2 = 10;
// if (nota2 >= 6 || nota2 <= 8) {
//     console.log('Entrou no test');
// }
let contrato = false;

if (!contrato) {
    console.log('Entrou aqui');
}