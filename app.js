
var todoList = document.querySelector('.todo') 
var tituloItem = document.querySelector('input')

var listaDeTarefas = [];

function adicionarItem(objeto) {
    var nome = objeto.title;
    var item = "<li><i class='far fa-circle'></i>" + nome + "<i job='delete' class='far fa-times-circle delete'></i></li>"; 
    todoList.insertAdjacentHTML("beforeend", item); 
    tituloItem.value = '';  
}


function carregarLista() {
    var tarefasDoLocalStorage = localStorage.getItem('TODO');

    if (tarefasDoLocalStorage !== null) {
        listaDeTarefas = JSON.parse(tarefasDoLocalStorage)
    }

    listaDeTarefas.forEach(function(item) {
        adicionarItem(item)
    })
}

tituloItem.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        var texto = event.target.value;
                
        var meuObjeto = { 
            title: texto,
            completed: false,
            trash: false
        }
        adicionarItem(meuObjeto); 

        listaDeTarefas.push(meuObjeto);
        localStorage.setItem('TODO', JSON.stringify(listaDeTarefas))    
    }
})

todoList.addEventListener('click', function(event){
    var alvo = event.target;
    var valorDoATributo = alvo.getAttribute('job')
    if (valorDoATributo === 'delete') {
        todoList.removeChild(alvo.parentNode);
    }
})

carregarLista ()