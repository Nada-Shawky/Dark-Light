// left ---------> headline
let sahm = document.getElementById("sahm")
let headline = document.getElementById("headline")
let ul = document.getElementById("ul")

headline.onclick = function(){
    if(sahm.getAttribute('class')=="fa-solid fa-angle-down"){
            sahm.setAttribute('class' , 'fa-solid fa-angle-up');
            ul.style.display="block";

    }
    else if(sahm.getAttribute('class')=="fa-solid fa-angle-up"){
            sahm.setAttribute("class" , "fa-solid fa-angle-down");
            ul.style.display="none";
        
    }
    
}

// ------> dashboard
let sahm2 = document.getElementById("sahm2")
let Dashboard = document.getElementById("Dashboard")
let ul2 = document.getElementById("ul2")

Dashboard.onclick = function(){
    if(sahm2.getAttribute('class')=="fa-solid fa-angle-down"){
            sahm2.setAttribute('class' , 'fa-solid fa-angle-up');
            ul2.style.display="block";

    }
    else if(sahm2.getAttribute('class')=="fa-solid fa-angle-up"){
            sahm2.setAttribute("class" , "fa-solid fa-angle-down");
            ul2.style.display="none";
        
    }
    
}

// dark mood
let icon = document.getElementById("moon");
let bod = document.getElementById("body");
// <i class="fa-solid fa-sun"></i> 
// <i class="fa-solid fa-moon"></i>
icon.onclick= function(){
    bod.classList.toggle("dark")
    if(icon.getAttribute("class")=="fa-solid fa-moon"){
        icon.setAttribute("class", "fa-solid fa-sun")
    }else{
        icon.setAttribute("class", "fa-solid fa-moon")
    }
}

//  click
/* <i class="fa-solid fa-align-justify" id="align"></i>
 <i class="fa-solid fa-align-right"></i> */
let control=document.getElementById("control"),
    left=document.getElementById("left"),
    big=document.getElementById("big");

    control.onclick = function(){
        left.classList.toggle("left2")
        big.classList.toggle("big2")
        
        if(control.getAttribute("class")=="fa-solid fa-align-justify"){
            control.setAttribute("class", "fa-solid fa-align-right")
        }else{
            control.setAttribute("class", "fa-solid fa-align-justify")
        }
    }
