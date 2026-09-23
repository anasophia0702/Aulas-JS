// let idade = 18

// if (idade >= 18) {
//     console.log("maior de idade")

// } else {
//     console.log("menor de idade")

// }

// let media = 7;

// if (media >= 7) {
//     console.log ("aprovado");

// } else if (media == 5 || media == 6) {
//     console.log("recuperação")

// }else{
//     console.log("Reprovado")
// }

// ----------ESTRUTURAS DE REPETIÇÃO -------------
// console.log ("1")
// console.log ("2")
// console.log ("3")
// console.log ("4")
// console.log ("5")
// console.log ("6")
// console.log ("7")
// console.log ("8")
// console.log ("9")
// console.log ("10")



//FOR 
// for (variavel; condicao; incremento) {
// }


//INCREMENTO
// for (let index = 0; index < 10; index++) {
//     console.log(index);  
// }


//DECREMENTO
// for (let index = 10; index >= 0; index--) {
//     console.log(index);  
// }


//INCREMENTO PERSONALIZADO
// for (let index = 10; index >= 0; index-=5) {
//     console.log(index);  
// }

//EXERCICIOS

//Exercício 01- Contador
//Crie um programa que ultilize por exibir no console os numeros 1 até 20

// for (let index = 1; index <= 20; index++) {
//     console.log(index);  
// }

//Exercicio 02 - Múltiplos
//Ultilize um for para exibir no console os multiplos de 5 entre 5 e 50


// for (let index = 5; index <= 50; index+=5) {
//     console.log(index);  
// }

//Exercicio 03 - Decremento
//Ultilize um for para exibir no console uma contagem regressiva de 10 até 0
//e depois uma mensagem "Contagem finalizada"

// for (let index = 10; index >= 0; index--) {
//     console.log(index) 
    
// }
// console.log("contagem finalizada"); 

//-----WHILE
// let contador = 0;
// while (contador <= 10) {


// console.log(contador);

//     contador++;
// }


//Exercício 01 - Contagem
//Ultilize while para exibir no console os números de 10 até 20.

// let contador = 10;
// while (contador <= 20) {


// console.log(contador);

//     contador++;
// }


//Exercício 02 - Números pares
//Ultilize while para exibir os numeros pares de 2 até 20

// let contador = 2;
// while (contador <= 20) {
    

//     console.log(contador);

//     contador+=2;
// }

// ------ DO.... WHILE


// let n = 10;
// while( n < 5){
//     console.log("WHILE");

// }

// do {
//     console.log("DO...WHILE");


// }while (n < 5); 
    

// let contador = 0;
// do {
//     console.log(contador);

//     contador++


// }while (contador <= 10);


//Exercicios

//Exercício 01 - Contagem
//Ultilize do...while para exibir os números de 10 até 100

// let contador = 10;
// do{
//     console.log(contador);

//     contador++;


// }while (contador <= 100);



//Exercício 02 - Contagem Regressiva
//Ultilize do..while para exibir uma contagem regressiva de 10 até 1

// let contador = 10;
// do{
//     console.log(contador);

//     contador--;


// }while (contador >=1)


//----------ARRAY (LISTA)----------
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
