// ----------ARRAY (LISTA)----------
// let nome = "Levi";
// let nome2 = "Duda";
// let nome3 = "Gustavo";
// let nome4 = "Bernado";

// //             0        1          2           3
// let nomes = ["Levi" , "Duda" , "Gustavo" , "Bernado"];//Criação do Array/Lista

// console.log(nomes);//Mostra a lista completa na mesma linha

// console.log(nomes[1]);//Mostra o item da posição mencionada entre colchetes

// nome4 = "Ana";
// nomes[3] = "Ana"; // Altero o valor na posição especificada

// console.log (nomes.length);// Mostra o tamanho do Array

// Exercício 07 - Lista de Frutas
//Crie um array chamado frutas contendo 5 frutas
//Depois:
//1.    Exiba o array completo
//2.    Exiba a primeira fruta
//3.    Exiba a terceira fruta 
//4.    exiba a quantidade de frutas

// let frutas = ["Maça" , "Banana" , "Manga" , "Uva" , "Pera" ]

// console.log(frutas)
// console.log(frutas[0])
// console.log(frutas[2])

// console.log (frutas.length)

//Exercício 08 - Lista de cidades
//1.    Crie um array contendo 5 cidades brasileiras
//2.    Altere a segunda cidade
//3.    Exiba a segunda cidade completo
//4.    Exiba a quantidade de cidades.

// let cidades = ["São Paulo" , "Rio de Janeiro" , "Brasília" , "Fortaleza" , "Salvador"];
// console.log (cidades)
// cidades[1] = "Curitiba"; 
// console.log (cidades [1])
//  console.log (cidades.length)


// -----------ARRAY + ESTRUTURA DE REPETIÇÃO----------
// let cidades = ["São Paulo" , "Santo André" , "São Caetano" ,"Mauá" , "Pindamonhangaba" , "Salvador"];
// //console.log(cidades[0]);
// //console.log(cidades[1]);
// //console.log(cidades[2]);
// //console.log(cidades[3]);
// //console.log(cidades[4]);

// for (let index = 0; index < 5; index++) {
//     console.log(cidades[index]);
    
// }


// for (let index = 0; index < cidades.length; index++) {
//     console.log(cidades[index]);
    
// }

//Exercícios
//Exercício 09 - Nomes
//Crie um array com 6 nomes
//Ultilize um fo para exibir todos os nomes no console

// let nomes = ["Yasmin" , "Larah" , "Anna" , "Maya" , "Odirlei" , "Julia"]
// console.log(nomes)

//Exercício 10 - Preços 
//Crie un array, um contendo 5 preços de produtos
//Ultilize um for para exibir todos os preços

// let precos = [8 , 50 , 9 , 4 , 20 ];
// for (let index = 0; index < precos.length; index++) {
//     console.log( precos[index]);
    
// }

// Exercício 11 - Produtos e Preços
// Crie dois arrays, um contendo 5 nomes de produtos e
// outro contendo 5 preços de produtos
// Ultilize um for para exibir todos os nomes e preços

// let produtos = ["Rimel" , "Blush" , "Gloss" , "Creme" , "Corretivo"]
// let precos = [ 10 ,  25 ,  15 ,  30 ,  40]

// for (let index = 0; index < produtos.length; index++) {
//     console.log( produtos   [index] ,   precos  [index] );
    
// }
 

//---------- Estrutura de Repetição + Estrutura de Decisão -------------

// for (let index = 0; index <= 10; index++) { // contando de 0 a 10

//     if (index >=5) {// verificando se é maior ou igual a 5
//         console.log(index);// mostro o número
//     };
    
// }

// let numeros = [5 , 9 , 10 , 2 , 20 , 32 , 7 , 17 , 9 , 12]
// for (let index = 0; index < numeros.length; index++) { // lendo o array

//     if (numeros[index] >=10) {// verificando se é maior ou igual a 10
//         console.log(numeros[index]);// mostro o número do array
//     };
    
// }

// let numeros = [5 , 9 , 10 , 2 , 20 , 32 , 7 , 17 , 9 , 12]
// for (let index = 0; index < numeros.length; index++) { // lendo o array
//     let sobra = numeros[index] % 2;

//    if (sobra == 0) {
//     console.log(" O número " + numeros [index] + " é par ");
    
// } else {
//     console.log(" O número " + numeros [index] + "  é impar ");
//    }
    
// }

//Exercício 01 - Notas
//Crie um array com 8 notas 
//Ultilize for para percorrer as notas e if/else para informar:
// - Nota maior ou igual a 7 -- "Aprovado"
// - Nota menor que 7 -- "Reprovado"

// let notas = [5 , 9 , 6 , 8 , 3 , 8 , 7 , 2]
// for (let index = 0; index < notas.length; index++) {


//      if (notas [index] >= 7) {
//         console.log (  " Aprovado " + notas [index])


//      } else {
//         console.log (" Reprovado " + notas [index])
//      }
    
// }


//Exercício 02 - Temperaturas
//Crie um array contendo 7 temperaturas
//Percorra o array
// - Maior que 30 -- "Quente"
// - Entre 20 e 30 -- "Agradável"
// - Menor que 20 -- "Frio"

let temperaturas = [13 , 31 , 8 , 23 , 9 , 25 , 32 ]

 for (let index = 0; index < temperaturas.length; index++) {

    if (temperaturas [index] > 30 ) {
        console.log (" Quente " + temperaturas [index])

    } else if (temperaturas [index] >= 20 && temperaturas [index] < 30 ) {
        console.log (" Agradável " + temperaturas [index])
        
    }else 
        console.log (" Frio " + temperaturas [index])
    
 }
 