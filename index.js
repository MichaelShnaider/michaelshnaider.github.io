
var circles = document.querySelectorAll("#todoListSmall");
var mainCircle = document.getElementsByClassName("mainCircle");
var currentlyActive="aboutMe";

document.querySelector(".todoListContainer").style.display="none";
document.querySelector(".uniRankerContainer").style.display="none";
document.querySelector(".neuroPsychContainer").style.display="none";
document.querySelector(".tapContainer").style.display="none";
document.querySelector(".colorGuessContainer").style.display="none";
document.querySelector(".yelpCampContainer").style.display="none";




document.getElementById("todoListSmall").addEventListener("click",function(){
    if(currentlyActive !== "todoList"){
        mainCircle[0].classList.add('todoListCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".todoListContainer").style.display="block";
        currentlyActive="todoList"
    }
});
document.getElementById("aboutMeSmall").addEventListener("click",function(){
    if(currentlyActive !== "aboutMe"){
        mainCircle[0].classList.add('aboutMeCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".aboutMeContainer").style.display="block";
        currentlyActive="aboutMe"
    }
});
document.getElementById("uniRankerSmall").addEventListener("click",function(){
    if(currentlyActive !== "uniRanker"){
        mainCircle[0].classList.add('uniRankerCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".uniRankerContainer").style.display="block";
        currentlyActive="uniRanker"
    }
});
document.getElementById("neuroPsychSmall").addEventListener("click",function(){
    if(currentlyActive !== "neuroPsych"){
        mainCircle[0].classList.add('neuroPsychCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".neuroPsychContainer").style.display="block";
        currentlyActive="neuroPsych"
    }
});
document.getElementById("tapSmall").addEventListener("click",function(){
    if(currentlyActive !== "tap"){
        mainCircle[0].classList.add('tapCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".tapContainer").style.display="block";
        currentlyActive="tap"
    }
});
document.getElementById("colorGuessSmall").addEventListener("click",function(){
    if(currentlyActive !== "colorGuess"){
        mainCircle[0].classList.add('colorGuessCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".colorGuessContainer").style.display="block";
        currentlyActive="colorGuess"
    }
});
document.getElementById("yelpCampSmall").addEventListener("click",function(){
    if(currentlyActive !== "yelpCamp"){
        mainCircle[0].classList.add('yelpCampCircle');
        mainCircle[0].classList.remove(currentlyActive+"Circle");
        document.querySelector("."+currentlyActive+"Container").style.display="none";
        document.querySelector(".yelpCampContainer").style.display="block";
        currentlyActive="yelpCamp"
    }
});
