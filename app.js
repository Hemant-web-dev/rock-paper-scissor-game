let boxes = document.querySelectorAll("#box")
let resetbtn = document.querySelector(".reset")
let mess = document.querySelector(".msg")
let newgame = document.querySelector(".newgame")
let you=document.querySelector(".you")
let comp=document.querySelector(".comp")
let coChoice =document.querySelector(".coChoice")
let choice= ["rock","paper","scissor"]
let countuser=0;
let countcomp=0;
let userInput;
let compInput;
boxes.forEach ((box) =>{
    box.addEventListener("click",()=>{
        userInput= box.getAttribute("class")
      
        randomInt=Math.floor(Math.random()*3)
    
        compInput = choice[randomInt]
       console.log(`${userInput} ${compInput}`)
      
       showwinner();
       buttondisable();

     
    })
    })
    const showwinner = () =>{
        if(userInput===compInput){
            msgdraw(); }
        else if(userInput==="rock"&&compInput==="scissor" || userInput==="paper"&&compInput==="rock"||userInput==="scissor"&&compInput==="paper")
            {
msgwin();
        }
        else{
            msglose();
        }
    }

newgame.addEventListener("click",()=>{
    buttonenable();
    mess.innerText=""
    coChoice.innerText=""
})


resetbtn.addEventListener("click",()=>{
    buttonenable();
    countcomp=0;
    countuser=0;
    mess.innerText=""
    you.innerText=`You = ${countuser}`
    comp.innerText=`Computer = ${countcomp}`
    coChoice.innerText=""
})

    const msgdraw =()=>{
        mess.innerText=`Draw`
        coChoice.innerText=`Computer choice is ${compInput}`
        
    }

    const msgwin =()=>{
        mess.innerText="User wins"
        countuser++;
        you.innerText=`YOU = ${countuser}`
        coChoice.innerText=`Computer choice is ${compInput}`


    }
    const msglose=()=>{
        mess.innerText="Computer wins"
        countcomp++;
        comp.innerText=`COMPUTER = ${countcomp}`
        coChoice.innerText=`Computer choice is ${compInput}`
        

    }
const buttondisable =()=>{
    boxes.forEach((b)=>{
        b.disabled = true;
        })
}
const buttonenable =()=>{
    boxes.forEach((b)=>{
        b.disabled = false;
        })
}









