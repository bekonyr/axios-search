// const { default: axios } = require("axios");
const title = document.querySelector('div')

let all = null


function getAPI(){
    axios(`https://jsonplaceholder.typicode.com/users`)

    .then((res) => {
        all = res.data;
        console.log(res.data);
        view(all)
    })

}
getAPI("all");

function view(data){
    data.map(el => {
        title.innerHTML += `<div class=" d  "> 
            <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="img" /> 

        <h1 style="color: #fff ; font-size: 20px;">  ${el.name} </h1>
        <h2 style="color: #fff ;"> ${el.username}</h2>
        <a href="">${el.email}</a>
        <a href="">${el.phone}</a>
           </div>`
    })
}