
var todoList = document.querySelector('.todo') 
var tituloItem = document.querySelector('input')

var listaDeTarefas = [];
var id;

function adicionarItem(objeto) {
    var nome = objeto.title;
    var item = `<li><i id='${objeto.id}' job="check" class="${objeto.completed ? 'far fa-check-circle check' : 'far fa-circle check'}"></i>${nome}<i id='${objeto.id}' job="delete" class="far fa-times-circle delete"></i></li>`;
    todoList.insertAdjacentHTML("beforeend", item); 
    tituloItem.value = '';  
}


function carregarLista() {
    var tarefasDoLocalStorage = localStorage.getItem('TODO');

    if (tarefasDoLocalStorage !== null && JSON.parse(tarefasDoLocalStorage).length) {
        listaDeTarefas = JSON.parse(tarefasDoLocalStorage)
        id = listaDeTarefas[listaDeTarefas.length - 1].id + 1;
    } else {
        id = 0;
    }

    listaDeTarefas.forEach(function(item) {
        adicionarItem(item)
    })
}

tituloItem.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        var texto = event.target.value;
                
        var meuObjeto = { 
            id: id,
            title: texto,
            completed: false,
        }
        adicionarItem(meuObjeto); 

        listaDeTarefas.push(meuObjeto);
        id = id + 1;
        salvarArrayNoLocalStorage (listaDeTarefas)
    }
})

todoList.addEventListener('click', function(event){
    var alvo = event.target;
    var valorDoATributo = alvo.getAttribute('job');
    var itemId = listaDeTarefas.findIndex(function(item) { return item.id === Number(alvo.id); });

    if (valorDoATributo === 'delete') {
        todoList.removeChild(alvo.parentNode);
        listaDeTarefas.splice(itemId, 1);
        salvarArrayNoLocalStorage (listaDeTarefas)
    }

    if (valorDoATributo === 'check') {
        var itemDoArray = listaDeTarefas[itemId];

        if (itemDoArray.completed === true){
            itemDoArray.completed = false;
            alvo.classList.remove('fa-check-circle')
            alvo.classList.add('fa-circle')
        } else {
            itemDoArray.completed = true;
            alvo.classList.add('fa-check-circle')
            alvo.classList.remove('fa-circle')
        }
        salvarArrayNoLocalStorage (listaDeTarefas) 
    }
})

function salvarArrayNoLocalStorage (arrayTodo) {
    localStorage.setItem('TODO', JSON.stringify(arrayTodo));    
}

carregarLista ()