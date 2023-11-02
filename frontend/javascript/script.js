// // Operações Básicas
// console.log("===[Operações Básicas]===");
// const valor1 = 10;
// const valor2 = 2;

// console.log("Soma", valor1 + valor2);
// console.log("Subtração", valor1 - valor2);
// console.log("Multiplicação", valor1 * valor2);
// console.log("Divisão", valor1 / valor2);

// console.log("\n");

// // Condicionais
// console.log("===[Condicionais]===");
// const idade = 25;

// if (idade > 18) {
//   console.log("Maior que 18");
// } else {
//   console.log("Menor que 18");
// }

// const nota = 7;

// switch (nota) {
//   case nota < 5:
//     console.log("Abaixo da média");
//     break;
//     case nota > 5:
//     console.log("Na média");
//     break;
//     default:
//     console.log("Acima da média");
// }

// console.log("\n");

// // Ternario
// console.log("===[Ternario]===");

// nota > 5 ? console.log("aprovado") : console.log("Reprovado");

// console.log("\n");

// Tipo de variáveis
// console.log("===[Tipo de variáveis]===");

// const nome = 'Pablo'
// let aprovado = true
// var nota = 8 // não é recomendado utilizar
// Boolean = true
// null = Nulo
// undefined =
// Number = 42
// String = "Howdy"

// Laços de repetições
// console.log("===[Laços de repetições]===");

// console.log("FOR")
// for (let i = 1; i <= 10; i++){
//   if (i % 2 == 0) {
//     console.log(`5 X ${i} = ${i * 5}`);
//   }
// }

// console.log("\n")

// console.log("WHILE")
// let x = 1;
// while(x <= 10){
//   console.log(`5 X ${x} = ${x * 5}`);
//   x++;
// }

// console.log("\n")

// console.log("FOREACH")

// const valores = [1,2,3,4,5,6,7,8,9,10];

// valores.forEach((value, index) =>
// {
//   console.log(`5 X ${value} = ${value * 5}`);
// })

// console.log("\n")

// console.log("MAP")

// const valores2 = [1,2,3,4,5,6,7,8,9,10];
// const resultado = valores2.map((value) =>
// {
//   return value * 5;
// })
// console.log(resultado);

// console.log("\n")

// console.log("===[Arrow Functions]===");

// const subtrair = ( num1, num2) => num1 - num2;

// const somar = ( num1, num2) => num1 + num2;

// const resultado =  somar(10, 5);

// console.log("Resultado = ", resultado);

// console.log("\n");

// console.log("===[Arrays]===");

// const alunos = [
//   { nome: "Pablo", idade: 25 },
//   { nome: "Jose", idade: 19 },
// ];

// alunos.push({nome:"Joao", idade:35})
// alunos.pop(2)

// console.log(alunos[1].idade)


console.log("\n");

console.log("===[Funcionalidades ES6]===");
console.log("\nFilter\nfind\nfindIndex\nreduce\nsome\nevery")
console.log("\n");

//Filter
const alunos = [
  { nome: "Pablo", idade: 25 },
  { nome: "Jose", idade: 19 },
  { nome: "Roberto", idade: 16 }
];

const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.table(alunosFiltrados)


//Find
const alunoRoberto = alunos.find(aluno => aluno.nome == "Roberto" )
console.log(alunoRoberto)


//findIndex
const alunoRobertoIndex = alunos.findIndex((aluno) => aluno.nome == "Roberto" )
console.log("Index", alunoRobertoIndex)



//Reduce
const idades = alunos.reduce((acc, aluno)=>{
  return acc + aluno.idade
},0);

console.log("Soma de idades", idades)


//Some
const acimaDeNove = alunos.some(alunos => alunos.idade < 10)
console.log("acimaDeNove", acimaDeNove)

//Every
const menoQueNoventa = alunos.every(alunos => alunos.idade < 90)
console.log("menoQueNoventa", menoQueNoventa)


//Manipulando a DOM
window.document.getElementById("title");
window.document.getElementById("title").remove();

window.document.getElementsByTagName("div");
window.document.getElementsByTagName("div").remove();

window.document.querySelector("div");
window.document.querySelectorAll("div");
window.document.querySelectorAll("#title");
window.document.querySelectorAll("input[name]");
window.document.querySelectorAll(".item, .flex");
