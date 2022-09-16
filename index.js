function saque(num) { 
    let notas = {100:0,50:0,10:0,5:0,1:0}; 
    let total = num; 
    let retirada = num; 
    while(retirada > 0) { 
        if (retirada >= 100) { //A cada loop subtrai 100 da variável retirada, até que retirada seja menor que 100.
            retirada -= 100;   //
            notas[100] += 1;   //A cada loop soma 1 ao valor do elemento 100, no objeto notas.
        } 
        else if (retirada >= 50) { //------------------------------------------------------------------
            retirada -= 50;        //
            notas[50] += 1;        //
        } 
        else if (retirada >= 10) { //
            retirada -= 10;        //
            notas[10] += 1;        //
        }                         //   Aqui repete-se o mesmo processo que ocorre com as notas de 100
        else if (retirada >= 5) { //
            retirada -= 5;        //
            notas[5] += 1;        //
        } 
        else if (retirada >= 1) { //
            retirada -= 1;        //
            notas[1] += 1;        //--------------------------------------------------------------------
        } 
    }; 
 
    var recibo =  `Valor sacado:
   
    R$ ${total} 
     
  Notas retiradas: 
   
    ${notas[100]}x 100 Reais 
    ${notas[50]}x 50 Reais 
    ${notas[10]}x 10 Reais 
    ${notas[5]}x 5 Reais 
    ${notas[1]}x 1 Real` 
    
    // Acima, a variável recibo, uma string de várias linha feita com template literal, indica o valor sacado no caixa e quanto de cada cédula compõe essa quantia.
    
    return Number.isInteger(num) && num > 0 ? recibo : 'Operação Inválida' // Testa se a quantia solicitada para saque (O argumento)
                                                                           // é um valor válido (Número inteiro e positivo), se verdadeiro
                                                                           // retornar o recibo, do contrário informa que a operação é inválida.
 
}
