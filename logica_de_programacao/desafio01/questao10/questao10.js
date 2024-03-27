let salario = prompt(`Digite o salário do colaborador: R$`);
salario = parseFloat(salario);
let novo_salario = salario;

if (salario <= 2000){
    novo_salario = salario + (salario * 0.1);

}else if (salario > 5000 && salario < 10000){
    novo_salario = salario + (salario * 0.05);

}else if (salario > 10000 && salario < 15000){
    novo_salario = salario + (salario * 0.02);

}

alert(`NOVO SALÁRIO R$ ${novo_salario}\nANTIGO SALÁRIO R$ ${salario}`);
