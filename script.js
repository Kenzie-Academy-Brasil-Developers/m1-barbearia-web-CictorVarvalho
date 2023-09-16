const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for(let i = 0; i < barbearia.cortes.length; i++){
        if(barbearia.cortes[i].id === id){
            return barbearia.cortes[i]
        }
    }
}

function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length; i++){
        if(barbearia.barbas[i].id === id){
            return barbearia.barbas[i]
        }
    }
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return `Estamos abertos`
    } else {
        return `⁠Estamos fechados`
    }
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    buscaCortePorId 


    const pedido = {
        nome: `João`,
        pedidoCorte: `Militar`,
        pedidoCortePreco: 20,
        pedidoBarba: `Capitão Jack`,
        pedidoBarbaPreco: 20
    }
}

function atualizarServico(lista, id, valor, tipo) {
    for(let i = 0; i < lista.length; i++){
        if(id == lista[i].id || (tipo == null || preco == null)){
            lista[i].tipo = tipo;
            lista[i].valor = preco;
            return lista[i]
        }
    }
}

function calculaTotal(pedido) {
    let total = 0
    for(let i = 0; i < pedido.length; i++){
        total += 
    }
}
  
  
