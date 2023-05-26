// window.scroll(0, 0);

const hero = document.querySelector(".hero");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const select = document.querySelector("select");

let all = null;
// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/name/{name}

function getAPI(API) {
	axios(`https://restcountries.com/v3.1/${API}`).then((res) => {
		all = res.data;
		console.log(res.data);
		view(all);
		alphabet();
	});
}
getAPI("all");

function view(data) {
	window.scroll(0, 0);

	hero.innerHTML = "";
	data.slice(0, 10).map((el) => {
		hero.innerHTML += `<div  class="box">
        <img src="${el.flags.svg}" width="100"  alt="img">
        <h1 class="name" >${el.name.common}</h1>
        <h2 class="area">continents:   ${el.continents}
        <h2 class="area">Жер аянты:   ${el.area} KB<sup>2</sup></h2>
        <h2 class="population"> Калкынын саны:    ${el.population}</h2>
        <h4 class="capital"> Борбор шаары:   ${el.capital}</h4>
        <a  href="${el.maps.googleMaps}" target="_blank" class="map"> Картадан көрүү</a>

        </div>`;
	});
}

btn.addEventListener("click", () => {
	getAPI(`name/${input.value}`);
});

input.addEventListener("input", (e) => {
	getAPI(`name/${e.target.value}`);
});

select.addEventListener("change", (e) => {
	let target = e.target.value;
	
	if (target === "area") {
		all.sort((a, b) => b.area - a.area);
		view(all);
	} else if (target === "population") {
		all.sort((a, b) => b.population - a.population);
		view(all);
	} else if (target === "A-Z") {
		alphabet()
	} else if (target === "Z-A") {
	    all.sort((a, b) => b.name.common.localeCompare(a.name.common));
		view(all);
	}else{
        getAPI(`region/${target}`)
    }
});

function alphabet() {
    all.sort((a, b) => a.name.common.localeCompare(b.name.common));
		view(all);
}