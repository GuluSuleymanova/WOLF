
var btn=document.querySelector("#dark-menu1")
btn.addEventListener("click",dark)
var icon=document.querySelector("#my-icon")
var darkmode = document.querySelector('.container')
//var button = document.querySelector("#dark-icon")




function dark() {
    
    darkmode.classList.toggle('dark-menu')
    
    
    var par =document.querySelector('.text1')
    par.classList.toggle('textt1')

   // document.getElementsByTagName('p')[0].innerHTML= "Portfolio"

    var headtext2 =document.querySelector('.text2')
    headtext2.classList.toggle('textt2')
    // document.getElementsByTagName('h1')[0].innerHTML= "About"
    // document.getElementsByTagName('h1')[1].innerHTML= "Contact"
    btn.classList.toggle("whit")
    icon.classList.toggle("whit")

    if (darkmode.classList.contains("dark-menu")) {
        btn.innerHTML='<i class="fas fa-times"></i>'
       // document.querySelector("btn").style.color = "#ff0000";
        
        
        
    }
    else{
        btn.innerHTML='<i class="fa fa-ellipsis-h"></i>'
    }

    // if (icon.classList.contains('fa fa-ellipsis-h')) {
    //     icon.classList.add("fas fa-times")
        
    // }
    // else{

    //     icon.classList.add('fa fa-ellipsis-h')
    // }

    
}