var p=0;
$("div[type='button']").click(function(eve){
    var clr=eve.target.id;
    console.log(clr);
    $("#"+clr).addClass("pressed");
    setTimeout(function(){
        $("#"+clr).removeClass("pressed");
    },150);
    if(p===1){colCheck(clr);} else{startGame();}
});

var start;
var q;
var round=0;
var Count=0;
var colArr=[];
var score=0;
var rt=1500;

function startGame(){
    p=1;
    round++;
    q=0;
    Count=0;
    colArr=[];
    $("#level-title").text("Level "+round);
    if(rt>1000){
        rt=rt-100;
    }
    else if(rt>500){
        rt=rt-50;
    }
    else{
        rt=rt-25;
    }
    start=setInterval(ranColor,rt);
}
function ranColor(){
    if(Count===round){
        clearInterval(start);
        return ;
    }
    else{
        Count+=1;
    }
    var rc=Math.floor(Math.random()*4)+1;
    switch(rc){
        case 1:
            $(".green").animate({opacity:0.2});
            setTimeout(function(){
                $(".green").animate({opacity:1});
            },200);
            colArr.push("green");
            break;
        case 2:
            $(".red").animate({opacity:0.2});
            setTimeout(function(){
                $(".red").animate({opacity:1});
            },200);
            colArr.push("red");
            break;
        case 3:
            $(".yellow").animate({opacity:0.2});
            setTimeout(function(){
                $(".yellow").animate({opacity:1});
            },200);
            colArr.push("yellow");
            break;
        case 4:
            $(".blue").animate({opacity:0.2});
            setTimeout(function(){
                $(".blue").animate({opacity:1});
            },200);
            colArr.push("blue");
            break;
        default:
            console.log("Unexpected Random Value : "+rc);
    }
    console.log(rc);
}
function colCheck(pcol){
    if(pcol===colArr[q]){
        q++;
        if(q===round){
            startGame();
        }
        score++;
        console.log(round+":"+score+" "+colArr+" "+q);
    }
    else{
        stopGame()
        console.log("Error: Wrong Button "+colArr);
        $("#level-title").text("Game Over, Press any Key to Restart")
        reset();
        //$("div[type='button']").click(reset);
        return ;
    }
}

function stopGame(){
    console.log("Game Over");
    console.log(round+" "+score);
}
function reset(){
    q=0;
    Count=0;
    round=0;
    colArr=[];
    score=0;
    count=0;
    p=0;
}



