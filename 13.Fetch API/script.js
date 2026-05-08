let url = "https://official-joke-api.appspot.com/random_joke";

let setupLine = document.querySelector("#setup");
let punchLine = document.querySelector("#punchline");
let btn = document.querySelector("#btn");

window.addEventListener("load",()=>{
    async function getJoke(){
        try{
            const response = await fetch(url);
            let data = await response.json();
            console.log(data);
            sLine=data.setup;
            pLine=data.punchline;

            setupLine.innerText = data.setup;
            punchLine.innerText = "";

            btn.addEventListener("click",()=>{
              punchLine.innerText = data.punchline;
            })
  

        } catch(error){
            console.log("Error Alert");
            console.log(error);
        }
    }
    getJoke();
});
