function myFunction(smallImg) {

    var bigimg = document.querySelector('#big-img');
    bigimg.src = smallImg.src; 
    
}

const minusbtn = document.querySelector('.minus');
const plusbtn = document.querySelector('.plus');
const counterrr = document.querySelector('.count');
plusbtn.addEventListener('click',addone);
minusbtn.addEventListener('click',clearone);
let number =1;

function addone() {
  number++;
  counterrr.innerHTML = number;  
}

function clearone() {
    if (number>0) {

        number--;
        counterrr.innerHTML = number;
        
    }
    
}