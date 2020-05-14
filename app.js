
var todoList = document.querySelector('.todo') 
var tituloItem = document.querySelector('input')

var listaDeTarefas = [{
    title: "teste",
    completed: false, 
    trash: false
}];

function adicionarItem(objeto) {
    var nome = objeto.title;
    var item = "<li><i class='far fa-circle'></i>" + nome + "<i job='delete' class='fas fa-trash'></i></li>"; 
    todoList.insertAdjacentHTML("beforeend", item);          tituloItem.value = '';      
}


function carregarLista() {
    listaDeTarefas.forEach(function(item) {
        adicionarItem(item)
    })
}

tituloItem.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        var texto = event.target.value;
        console.log('enter', texto);
        adicionarItem({
            title: texto,
            completed: false,
            trash: false
        })
    }
})

todoList.addEventListener('click', function(event){
    var alvo = event.target;
    var valorDoATributo = alvo.getAttribute('job')
    console.log('clicou.....', valorDoATributo)
    if (valorDoATributo === 'delete') {

    todoList.removeChild(alvo.parentNode);    
    }
})

carregarLista ()