function soma_salarios(salarios){
    let soma = 0;
    for (let i = 0; i<salarios.length; i++){
        soma += salarios[i];

    }
    return soma;

}

let salarios = [];
let qtd_funcionarios = prompt(`Digite a quantidade de funcionários sobre os quais deseja calcular o salário:`);

for (let i = 0; i<qtd_funcionarios; i++){
    salario = prompt(`Digite o salário do ${i+1}º funcionário: `);
    salarios.push(parseFloat(salario)); 
    console.log(salarios[i]);

}

let total_salarios = soma_salarios(salarios);
console.log(total_salarios);

alert(`Soma total dos salários: R$ ${total_salarios}`);

