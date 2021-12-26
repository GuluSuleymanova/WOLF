var myinput = document.querySelector('.my-input');
var mybutton = document.querySelector('.my-button');
var todolist = document.querySelector('.todo-list');
todolist.addEventListener("click",del);
mybutton.addEventListener("click",addTodo);
// var raf=[]
// localStorage.getItem("gulu")
function addTodo() {
    //event.preventDefault();
    if (myinput.value != "") {
        let div = document.createElement('div')
        div.classList.add('my-div')

        let list = document.createElement('li')
        list.classList.add('my-list')

        list.innerText=myinput.value

        div.appendChild(list)

        let delbutton = document.createElement('button')
        delbutton.classList.add('trash')

        delbutton.innerHTML ='<i class="fas fa-trash"></i>'

        div.appendChild(delbutton)

        

        todolist.appendChild(div)
        myinput.value = ''

        list.addEventListener('dblclick',function() {
            list.classList.toggle('filter')
            
        })
        // raf.push(list.innerText)
        // localStorage.setItem("gulu",raf)
        
    }
    
}

function del(e) {
    const item = e.target;

    if (item.classList.contains('trash')) {
        const todo = item.parentElement;
        
        todo.remove();
        //Animaton
        // todo.classList.add("fall");
        // todo.addEventListener('transitionend', function(){
           
        // });
    }
    
}

