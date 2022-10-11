const URL = "https://api.thecatapi.com/v1/images/search";
const btnGenerate = document.getElementById('btn-generate')
const imgCard = document.getElementById('img-card')

btnGenerate.addEventListener('click',getApis)

function getApis() {
    fetch (URL)
    .then (response => response.json())
    .then (data => imgCard.src = data[0].url);
}