function refresh(roll,p){
    if(roll===1){
        h.firstElementChild.children[p].querySelector("img").setAttribute("src","images/dice1.png");
    }
    else if(roll===2){
        h.firstElementChild.children[p].querySelector("img").setAttribute("src","images/dice2.png");   
    }
    else if(roll===3){
        h.firstElementChild.children[p].querySelector("img").setAttribute("src","images/dice3.png");   
    }
    else if(roll===4){
        h.firstElementChild.children[p].querySelector("img").setAttribute("src","images/dice4.png");   
    }
    else if(roll===5){
        h.firstElementChild.children[p].querySelector("img").setAttribute("src","images/dice5.png");   
    }
    else if(roll===6){
        h.firstElementChild.children[p].querySelector("img").setAttribute("src","images/dice6.png");   
    }    
}
var h=document.firstElementChild.lastElementChild;
var roll1=Math.floor(Math.random()*6)+1;
var roll2=Math.floor(Math.random()*6)+1;
refresh(roll1,1);
refresh(roll2,2);
if(roll1>roll2){
    h.querySelector("h1").innerHTML="Player 1 wins";
}
else if(roll1<roll2){
    h.querySelector("h1").innerHTML="Player 2 wins";
}
else{}
