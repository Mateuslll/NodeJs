//Json = formato textual, javascript object notacion
// { } significa um objeto, ja [] é um array//

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 500.00
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço !!!!

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        botoes: 1,
        obj: {
            blabla: 2
        }
    }


}

// transformando o objeto em json

'{"nome": "Camisa Polo", "preco": 79.90}'


// objeto e um conjunto de chaves e valor
console.log(prod2)