'use strict'; //O JS acusa mais erros


//var x let 

//var tem escopo abrangente
//let tem escopo reduzido

function withVar(){
    for(var i = 0; i < 10; i++){
        console.log('var' + i);
    }

    i = 20;
    console.log(i);
}



//testei via console

function withLet(){
    for(let i = 0; i < 10; i++){
        console.log('let' + i);
    }

    //i = 20; o valor nao mudara, por let possuir o escopo reduzido
    //console.log(i);
}

withVar();
withLet();

//const: nao podemos reatribuir

//exemplo

//const c = 10;
//c = 20;

const d = [];
console.log(d);

d.push(1);
console.log(d);

//functions x arrow functions

function sum(a,b){
    return a + b;
}

//outra forma de declarar uma function sem o arrow function

const sum2 = function(a,b){ //function anonima, a variavel tem uma funcao atribuida a ela
    return a + b;
};

//arrow function

const sum3 = (a,b) => {
    return a + b;
};

//arrow function reduzida

const sum4 = (a,b) => a + b; //basta imaginar um mapping de um conjunto X real a um conjunto Y real, onde f(x) = x. ou apenas, x => f(x). igual na matematica
 
console.log(sum(2,3));
console.log(sum2(2,3));
console.log(sum3(2,3));
console.log(sum4(2,3));