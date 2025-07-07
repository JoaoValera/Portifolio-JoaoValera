let carrinho = []

document.querySelectorAll('.mercadinho').forEach(botao =>{
    botao.addEventListener('click',function(){
        let nome = this.getAttribute('data-nome');
        let tipo = this.getAttribute('data-tipo');
    let preco = parseFloat(this.getAttribute('data-preco'));


let itemExistente = carrinho.find(item => item.nome === nome)
 if(itemExistente){
    itemExistente.quantidade++;
 }else{

 }
carrinho.push({nome:nome, tipo:tipo,preco:preco ,quantidade: 1})
    console.log(`Carrinho atualizado de compras ${JSON.stringify(carrinho)}`)

    atualizarCarrihno()
    
    })
})

function atualizarCarrihno(){
    let listadecarrinho = document.getElementById('lista-carrinho')
    let carrinhodiv = document.getElementById("carrinho")
    listadecarrinho.innerHTML = "";

    if(carrinho.length ===0 ){
        carrinhodiv.style.display = 'none';
    }else{
        carrinhodiv.style.display = 'block';
    }
carrinho.forEach((mercado,index)=>{
    let item = document.createElement('li')
    item.textContent =`${mercado.tipo} ${mercado.nome}  R$ ${mercado.preco} x ${mercado.quantidade}` ;

    let botaoRemover = document.createElement('button')
    botaoRemover.textContent = 'Remover'
    botaoRemover.style.marginLeft = '10px'
    botaoRemover.onclick = () =>{
        carrinho.splice(index,1);
        atualizarCarrihno()
    }
    let inputQuantidade = document.createElement('input')
    inputQuantidade.type = 'number';
    inputQuantidade.value = mercado.quantidade;
    inputQuantidade.min = 1;
    inputQuantidade.style.marginLeft = '10px';
    inputQuantidade.addEventListener('change',()=>{
        mercado.quantidade =parseInt(inputQuantidade.value)
        atualizarCarrihno()
    });

item.appendChild(inputQuantidade)
item.appendChild(botaoRemover)
listadecarrinho.appendChild(item)

});

let total = 0;
carrinho.forEach(item =>{
    total+= item.preco *item.quantidade;
});

let totalElement =document.getElementById('total')
if(!totalElement){
    totalElement.document.createElement('div')
    totalElement.id = 'total';
    carrinhodiv.appendChild(totalElement)
}
totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

}

