const fetchData =()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=countries=>{
    const countryHtml=countries.map(country=>countryData(country));
    const countryHtmlJoin = countryHtml.join(' ')
    document.getElementById('content').innerHTML = countryHtmlJoin;

}
const countryData=country=>{
    return `
    <div class="card m-3 " style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${country.flag}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
            <h3>${country.name}</h3>
            <h2>Capital : ${country.capital}</h2>
      </div>
    </div>
  </div>
</div>`
    // return `<div class="col container text-center">
    //             <h3>${country.name}</h3>
    //             <h2>Capital : ${country.capital}</h2>
    //             <div class="w-50 h-50 text-center">
    //                 <img class="img-fluid "src="${country.flag}" alt="">
    //             </div>
    //         </div>
            
    // `
}

fetchData();
