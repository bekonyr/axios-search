// https://dog.ceo/api/breeds/list/all
const breeds = document.querySelector(".breeds")
const breedImg = document.querySelector(".breedImg")
const option = document.querySelector(".dog")
const search = document.querySelector(".search")
const input = document.querySelector(".input")


function getAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
.then((res) => {
        console.log(Object.keys(res.data.message))
        Object.keys(res.data.message).map(el => {
            breeds.innerHTML += `<button class="btn-breed btn">${el}</button>`
        })
    })
        .then(() => btn())
}
getAll()

function btn() {
    const breedBtn = document.querySelectorAll(".btn-breed")
    breedBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            getImg(btn.innerHTML)
        })
    })
}

function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res)=>{
            breedImg.innerHTML =` <img src="${res.data.message}" width="300" alt="img">`
        })
}
getImg()

function optDog() {
    axios(`https://dog.ceo/api/breeds/list/all`)
.then((res) => {
        Object.keys(res.data.message).map(el => {
            option.innerHTML += `<option value="${el}">${el}</option>`
        })
    })
}
optDog()


function opClick() {


option.addEventListener("change", (e)=>{
    const option = event.target.value
    getImg(option)

})
}
opClick()



search.addEventListener('click', () => {
    getImg(`${input.value.trim()}`)
})


function searchInput(){
    input.addEventListener('input'  , () =>{
        getImg(`${input.value.trim()}`)
    })
}
searchInput()
