
let subAthlete = document.getElementById("subAthlete")
let resName = document.getElementById("resName")
let subSport = document.getElementById("subSport")
let resSport = document.getElementById("resSport")
const subAge = document.getElementById("subAge")
let resAge = document.getElementById("resAge")

subAthlete.addEventListener("click", function(){
    responseUser = prompt ("Type Name")
    resName.innerText = responseUser
    console.log(responseUser)
    
})

subClean.addEventListener("click", function(){
    resName.innerText = ""
})
subSport.addEventListener("click", function(){
    responseUser = prompt ("Type Sport")
    resSport.innerText = responseUser
    console.log(responseUser)
})

subClean.addEventListener("click",function(){
    resSport.innerText =""
})

subAge.addEventListener("click" ,function(){
    let responseUser = subAge.value//no me sale
    let responseUser1 = Number(responseUser)
    responseUser =prompt("Type Age")
    resAge.innerText = responseUser
    console.log(responseUser)

})

subClean.addEventListener("click", function(){
    resAge.innerText =""
})

let subMoto = document.getElementById("subMoto")
let resMoto = document.getElementById("resMoto")
let SubCylinder = document.getElementById("SubCylinder")
let resCylinder = document.getElementById("resCylinder")
let subWeigth = document.getElementById("subWeigth")
let resWeigth = document.getElementById("resWeigth")

subMoto.addEventListener("click", function(){
    responseUser = prompt ("Type Name")
    resMoto.innerText = responseUser
    console.log(responseUser)
})

subClean.addEventListener("click", function(){
    resMoto.innerText = ""

})
SubCylinder.addEventListener("click", function(){
    responseUser = prompt ("Type Cylinder")
    resCylinder.innerText = responseUser
    console.log(responseUser)

})

subClean.addEventListener("click", function(){
    resCylinder.innerText = ""
})

subWeigth.addEventListener("click", function(){
    responseUser = prompt ("Type Weigth")
    resWeigth.innerText = responseUser
    console.log(responseUser)
})

subClean.addEventListener("click", function(){
    resWeigth.innerText = ""
})

let subBand = document.getElementById("subBand")
let resBand = document.getElementById("resBand")
let subType = document.getElementById("subType")
let resType = document.getElementById("resType")
let subEpoch = document.getElementById("subEpoch")
let resEpoch = document.getElementById("resEpoch")

subBand.addEventListener("click", function(){
    responseUser = prompt ("Write Band Name")
    resBand.innerText = responseUser
    console.log(responseUser)

})

subClean.addEventListener("click",function(){
    resBand.innerText = responseUser = ""
})

subType.addEventListener("click", function(){
    responseUser = prompt ("Gender Type")
    resType.innerText = responseUser
    console.log(responseUser)

})

subClean.addEventListener("click", function(){
    resType.innerText = ""
})

subEpoch.addEventListener("click", function(){
    responseUser = prompt ("Founded")
    resEpoch.innerText = responseUser 
    console.log(responseUser)

})

subClean.addEventListener("click", function(){
    resEpoch.innerText = ""
})
