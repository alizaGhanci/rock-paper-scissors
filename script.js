let userscore = 0;
let compuser = 0;


const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userscore");
let compuserScore = document.querySelector("#compscore");


 const showwinners = (winshow , userchoice , compchoice)=>{
   
    if(winshow){
        userScore.innerText = ++userscore;
        
        msg.innerText = `you have win ${userchoice} beats ${compchoice} `;
        msg.style.  backgroundColor = "green";
      

    }
    else {
        compuserScore.innerText = ++compuser;
        msg.innerText = `you have Loss ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "red";

    }

       
 }
const drawgame = () =>{

   msg.innerText = "Game was Please try again!";
   msg.style.backgroundColor = "black";

}
const gencompchoice = () =>{


    let option = ["rocks", "paper", "scissors"];
   let rndx =  Math.floor(Math.random()*3);
   return option[rndx];

}

function playgame(userchoice){


    // Generate computer choice //
    let compchoice = gencompchoice();
  
    if(compchoice === userchoice) { 
     drawgame();

    }
    else{
        let winshow = true;

        if(userchoice === "rocks"){

        //    sciccors paper
        winshow = compchoice === "paper" ? false : true;


               
        }
        else if (userchoice === "paper"){

            winshow = compchoice === "scissors" ? false : true;
        }
        else {

            winshow = compchoice === "rocks" ? false : true;
        }
        showwinners(winshow , compchoice , userchoice)
    }


}

choices.forEach((choice) => {
choice.addEventListener("click" ,() => {
let userchoice = choice.getAttribute("id");
 
 playgame(userchoice);


  


})
});