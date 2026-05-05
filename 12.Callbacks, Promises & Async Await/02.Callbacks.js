

function dataFetch(dataProcessing){
    setTimeout(()=>{
        console.log("Data Fetched.");
        dataProcessing();
    }, 2000)
}

function dataProcess(){
    console.log("Data has been processed.");
}

console.log("Data is Fetching");
dataFetch(dataProcess);