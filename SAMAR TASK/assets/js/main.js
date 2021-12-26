var project1 = setInterval(countNumber1,10)
var project2 = setInterval(countNumber2,10)
var project3 = setInterval(countNumber3,10)
var project4 = setInterval(countNumber4,10)

let count1 = 8000;
let count2 = 7000;
let count3 = 6000;
let count4 = 1;


function countNumber1() {
    count1++;
    document.querySelector(".counter1").innerHTML = count1;

    //stop at given if

    if (count1==9875) {
        clearInterval(project1)
        
    }
    
}

function countNumber2() {
    count2++;
    document.querySelector(".counter2").innerHTML = count2;

    //stop at given if

    if (count2==8765) {
        clearInterval(project2)
        
    }
    
}

function countNumber3() {
    count3++;
    document.querySelector(".counter3").innerHTML = count3;

    //stop at given if

    if (count3==7894) {
        clearInterval(project3)
        
    }
    
}

function countNumber4() {
    count4++;
    document.querySelector(".counter4").innerHTML = count4;

    //stop at given if

    if (count4==65) {
        clearInterval(project4)
        
    }
    
}

    
