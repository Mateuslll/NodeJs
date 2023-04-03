let insAtivo = false;
console.log(insAtivo);

insAtivo = true;
console.log(insAtivo);

insAtivo = 1;
console.log(!!insAtivo);   // ! representa negaçao , !! duas vezes negado representa verdadeiro.

console.log('os verdadeiros...')
console.log(!!3);
console.log(!!-1);   // todos os numeros reais sao true , tirando 0 
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(insAtivo = true);

//////////////////// VALORES FALSOS ///////////////////////////

 console.log("os falsos abaixo");
 console.log(!!0);
 console.log(!!"");
 console.log(!!null);
 console.log(!!NaN);
 console.log(!!undefined);
 console.log(!!(insAtivo = false));

 // finalizando
console.log("Finalizando")
console.log(('' || null || 0 || 'epa' || 123124124)); //  string vazia ou nullo ou zero ou string com caractere

let nome = 'Lucas';

console.log(nome || "Desconhecido");


