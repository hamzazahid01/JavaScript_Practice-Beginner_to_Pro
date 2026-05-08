let url = "https://official-joke-api.appspot.com/random_joke";

// fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     });

async function getJoke(){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.setup);
    console.log(data.punchline);
}
getJoke();