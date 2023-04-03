const valores_da_aula =[7.7, 8.9, 6.3, 9.2]
console.log(valores_da_aula[0], valores_da_aula[2])
console.log(valores_da_aula[4])  // nao da erro verificar o array que nao existe, da Undefined

valores_da_aula[4] = 10 // adicionando elemento 4 com conteudo 10

console.log(valores_da_aula)
console.log(valores_da_aula.length)  // funcao length = tamanho do vetor

valores_da_aula.push( {id:3}, false, null, "teste") // Js linguagem fracamente tipada e pode comportar qualquer tipo de dado
console.log(valores_da_aula)

console.log(valores_da_aula.pop())  // excluiu o ultimo elemento no caso o teste
delete valores_da_aula[0]   // deletando o primeiro elemento.
console.log(valores_da_aula)

console.log(typeof valores_da_aula) // tipo do array, tipo object