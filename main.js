document.querySelector("#getButton").addEventListener("click",apiRequest)

async function apiRequest(){
    const alienName = document.querySelector("input").value
    try{
        const response = await fetch(`https://startrek-api.onrender.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById("alienName").innerText = data.speciesName
        document.getElementById("alienWorld").innerText = data.homeworld
        document.getElementById("alienFeatures").innerText = data.features
        document.getElementById("alienFacts").innerText = data.interestingFact
        document.getElementById("notableExamples").innerText = data.notableExamples


        document.querySelector("img").src = data.image

    }catch(error){
        console.log(error)
    }
}