let chatICon=document.querySelector(".close-icon")
let chat=document.querySelector("#Chat")
let chatMini=document.querySelector("#chat-mini")
let input=document.querySelector("#text-input")



chatICon.addEventListener("click",function(){
   chat.classList.add("active") 
})
chatMini.addEventListener("click",function(){
    chat.classList.remove("active")
})

input.addEventListener("keypress",function(e){
    if(e.keyCode==13){
        e.preventDefault();
    }

})
input.addEventListener("keyup",function(e){
if(e.keyCode==13){
    let userInput=this.value.trim();
    if(userInput.length){
        if(userInput[0].toUpperCase()==userInput[0]){
            AddMessage(userInput,"support")
        }else{

            AddMessage(userInput,"user")

        }
    }

    
}
})
function AddMessage(inp,className){
    let div=document.createElement("div");
    div.className="message "+className;
    let ptag=document.createElement("p")
    ptag.innerHTML=inp;
    div.appendChild(ptag);
    document.querySelector("main").appendChild(div)
    input.value=""
}
