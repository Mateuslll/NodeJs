const nome = "Rebeca"
const concatenacao = "Olá " + nome + '!'       // Crase ( ` ) utilizada para template, concatenacao
const template = `     
    Olá
    ${nome}!` 
console.log(concatenacao,template);

// o que ta entre chaves ele vai interpolar

console.log(`1 + 1 = ${1+1}`);                        //Soma Matematica

const up  = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)                   // Expressao dentro de um template string começa com abre e fecha chaves.

