const logDiv=document.getElementById("log");
const stateDiv=document.getElementById("state");
const startBtn=document.getElementById("startbtn");
const stopBtn=document.getElementById("stopbtn");

 startBtn.addEventListener("click",()=>{  //this function will determine that,which key is pressed
document.addEventListener("keydown",handleDown);
document.addEventListener("keyup",handleUp);
startBtn.disabled=true;
stopBtn.disabled=false;
 })


 stopBtn.addEventListener("click",()=>{   
    stopBtn.disabled=true;
    startBtn.disabled=false;
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleUp) ;
    logDiv.textContent="";
    stateDiv.textContent="";
  
    
     })

function handleDown(e)  //all the info which is pressed will be stored in argument e 
{
  logDiv.textContent=`Key ${e.key} pressed down`; 
  stateDiv.textContent="key is down";
}

function handleUp(e)  
{
  logDiv.textContent=`Key ${e.key} pressed up`; 
  stateDiv.textContent="key is up";
}