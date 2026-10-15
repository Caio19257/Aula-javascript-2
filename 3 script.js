function informacao() {
    let nome = prompt("digite seu nome:");
    alert("Bem vindo " + nome + " vamos informar os seus dados");
    
    let salariomensal = parsefloat(prompt("Digite seu salário mensal"));
    alert("Seu salário mensal é R$ " + salariomensal.tofixed(2));

    let alimentacao = parsefloat(prompt("digite seu gasto com alimentação mensal"));
    alert("Seu gasto com alimentação é R$ " + alimentacao.toFixed(2));
    
    let saldo = salario - alimentacao;
    alert("Seu saldo é de R$ " + saldo.toFixed(2));
 
}