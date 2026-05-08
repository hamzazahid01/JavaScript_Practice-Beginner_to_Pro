let url = "https://official-joke-api.appspot.com/randm_joke";

// fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     });

async function getJoke(){
    try{
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);
        console.log(data.setup);
        console.log(data.punchline);
    } catch(error){
        console.log("Error Alert");
        console.log(error);
    }
}
getJoke();