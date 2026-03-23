//tipos primitivos
// boolean
// var boolean = false;
// console.log("Texto "  + boolean + " text");
// console.log(`a variável ${boolean} tem o tipo ${typeof(boolean)}`);

// var numero = 1
// console.log(`a variável ${numero } tem o tipo ${typeof(numero)}`);

// var; //variavel global ou local - valor inicial pode ser nulo
// let; //variavel local de bloco - valor inicial pode ser nulo
// const; //variavel local de bloco - valor inicial é obrigatorio

// var professor = 'lucas'

// let sobrenome = 'Sousa'

// sobrenome = 'Borges de sousa'
// const profissao = 'professor'

// Usando variavel global
var nome = 'Emily';

// Usando variavel local
function nomeDaFuncao() {
 var sobrenome = 'Rebeca';
 console.log(sobrenome); 
}

console.log(nome);
nomeDaFuncao();

// Operadores de comparacao
var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Operadores aritimeticos


var mult = 5 * 9;
console.log(mult);

var div = 15 / 3;
console.log(div);

// maior ou igual
var maiorOuIgual = 5 >= 16;
console.log(maiorOuIgual);

var diferente = 5 != 8;
console.log(diferente)

// Operadores logicos
// && = E, || - outerHeight, ! - nao 
var e = true && true;
console.log(e);

var ou = true || false || false;
console.log(ou);

var nao = !true;
console.log(nao)
