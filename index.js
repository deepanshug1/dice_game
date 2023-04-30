var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;



var nname="images/dice"+randomNumber1+".png";
var nname2="images/dice"+randomNumber2+".png";

var el=document.querySelectorAll("img")[0];
el.setAttribute("src",nname);

var el2=document.querySelectorAll("img")[1];
el2.setAttribute("src",nname2);

if(randomNumber1>randomNumber2){
    won="Winner is Player 1";
}
else if(randomNumber1<randomNumber2){
    won="Winner is Player 2";
}
else {
    won="Tie!!!"
}

var win=document.querySelector("h1");
win.innerHTML=won;