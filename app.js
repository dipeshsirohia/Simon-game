let gameSeq=[]
let userSeq=[]
let btns=["yellow","red","green","blue"];
let started=false
let level=0;
let h2=document.querySelector("h2");
 

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started")
    started=true

    levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
    
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
    
}

function levelup(){
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`;
    

    let randIndex=Math.floor(Math.random()*3);
    let randColor=btns[randIndex]
    let randbtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnflash(randbtn);

}
function CheckAns(index){
    // let index=level-1
    if(gameSeq[index]==userSeq[index]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over ! press any key to continue and<br> <b>your score is ${level}</b>`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500)
        
        reseT();
        
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor)
    CheckAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reseT(){
    started=false
    level=0;
    gameSeq=[]
    userSeq=[]
}

