
var todoList = document.querySelector('.todo') 
var tituloItem = document.querySelector('input')


function adicionarItem(event) {
    if (event.keyCode === 13) {
        var nome = event.target.value;
        var item = "<li><i class='far fa-circle'></i>" + nome + "<i class='fas fa-trash'></i></li>"; 
        todoList.insertAdjacentHTML("beforeend", item);  
        tituloItem.value = '';      
    }
} 



tituloItem.addEventListener("keyup", adicionarItem)




