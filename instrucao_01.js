    /*
    function cadastrar() {
    var numeros = [ ];

//O primeiro elemento (o de índice 0) recebe o retorno da função que solicita o primeiro número
numeros[0] = soliticaPrimeiroNumero();

//O segundo elemento (o de índice 1) recebe o retorno da função que solicita o segundo número
numeros[1] = soliticaSegundoNumero();

 //Declaração de atribuição de valor à variável que armazenará o resultado da divisão
 //O resultado da divisão virá da função 'divida' (esse função recebe como parâmetro o array 'numeros')
 var resultadoDivisao = divisao(numeros);

 //Exibindo o resultado da divisão na tela
 alert('O resultado da divisão é igual a: ' + resultadoDivisao);
}
    function PrimeiroNumero(){
     var numero1 = prompt("Insira o primeiro número: ");
        if(numero1 < 0){
            alert("O número precisa ser inteiro e positivo");
         return PrimeiroNumero();

        }else{
         return numero1;
     }
    }
     function SegundoNumero(){
     var numero2 = prompt("Insira o segundo número: ");
        if(numero2 < 0){
            alert("O número precisa ser inteiro e positivo");
         return SegundoNumero();
     }else{
         return numero2;
     }
 }*/
    function divisao(numero1, numero2) {
        var numero1 = prompt("Insira o primeiro numero: ");
        var numero2 = prompt("Insira o segundo numero: ");
        var resultado = numero1 / numero2;
            return  alert('O resultado da divisão e igual a: ' + resultado);
    }
    function multiplicacao(numero1, numero2) {
        var numero1 = prompt("Insira o primeiro numero: ");
        var numero2 = prompt("Insira o segundo numero: ");
        var resultado = numero1 * numero2;
            return alert('O resultado da multiplicacão e igual a: ' + resultado);
    }
    function adicao(numero1, numero2) {
        var numero1 = parseInt(prompt("Insira o primeiro numero: "));
        var numero2 = parseInt(prompt("Insira o segundo numero: "));
        var resultado = numero1 + numero2;
            return alert('O resultado da adição e igual a: ' + resultado);
    }
    function subtracao(numero1, numero2) {
        var numero1 = prompt("Insira o primeiro numero: ");
        var numero2 = prompt("Insira o segundo numero: ");
        var resultado = numero1 - numero2;
            return alert('O resultado da subtração e igual a: ' + resultado);
    }
