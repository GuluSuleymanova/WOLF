function lgfunction() {
    
    document.getElementsByClassName('yazi')[0].innerHTML="DUR!"
  
  
    var gulu=document.getElementById('svet-q')
    gulu.classList.toggle("red1")

    var gulu1=document.getElementById('svet-y')
    if (gulu1.classList.contains("yellow1")) {
        gulu1.classList.remove("yellow1")
  
    } 

    var greenl = document.getElementById('svet-g')

     if (greenl.classList.contains("green1")) {
        greenl.classList.remove("green1")
        
    }

}

function lgfunction1() {
    document.getElementsByClassName('yazi')[0].innerHTML="HAZIRLAS !"




    var gulu1=document.getElementById('svet-y')
    gulu1.classList.toggle('yellow1')
    var cargo=document.getElementById('my-car')
    cargo.classList.toggle('car-go')

    var gulu=document.getElementById('svet-q')
    if (gulu.classList.contains("red1")) {
        gulu.classList.remove("red1")
        
    }
    
    var greenl = document.getElementById('svet-g')

     if (greenl.classList.contains("green1")) {
        greenl.classList.remove("green1")
        
    }

    
}
function lgfunction2() {

    document.getElementsByClassName('yazi')[0].innerHTML = "GETDIK"

    var greenl = document.getElementById('svet-g')
    greenl.classList.toggle('green1')

    var cargogr =document.getElementById('my-car')
    cargogr.classList.add('car-go-gr')

    var gulu=document.getElementById('svet-q')
    if (gulu.classList.contains("red1")) {
        gulu.classList.remove("red1")
        
    }

    var gulu1=document.getElementById('svet-y')
    if (gulu1.classList.contains("yellow1")) {
        gulu1.classList.remove("yellow1")
  
    } 


    
}

function dark() {
    // var darkmode=document.getElementsByClassName('dark')[0]

    // for (let i = 0; i < darkmode.length; i++) {
        
        
    // }
    // darkmode.classList.toggle('dark-mode')
    
   
     var darkmode1=document.getElementsByClassName('dark1')[0]
     darkmode1.classList.toggle('dark-mode1')
    
     var darkmode2=document.getElementsByClassName('dark1')[1]
     darkmode2.classList.toggle('dark-mode1')

     var darkmoderoad=document.getElementsByClassName('dark-road')[0]
     darkmoderoad.classList.toggle('dark-road1')

     var buttonzona1=document.getElementsByClassName('container')[0]
     buttonzona1.classList.toggle('dark-mode')

     var moon1 = document.getElementById('moon')
     moon1.classList.toggle('moon-go')

     var sun1 = document.getElementById('sun')
     sun1.classList.toggle('sun-go')


}
  
