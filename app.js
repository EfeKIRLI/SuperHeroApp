
const SUPERHERO_TOKEN = '10223569763528853/'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const getHero = document.getElementById('getHeroBtn')
const heroImageDiv = document.getElementById('heroImage')
const searcBtn = document.getElementById('searchBtn')
const searchElInput = document.getElementById('input').innerText

const getRandomSuperHero = (id,name)=> { 
    fetch(`${BASE_URL}${id}`)
    .then(response => response.json())
    .then(json => {
         console.log(json)
         heroImageDiv.innerHTML += `<img src ="${json.image.url}">`

        //  document.querySelector('body').innerHTML += `<img src ="${json.image.url}">` both of two works
        })
}
const getSearchedSuperHero = (name)=>{
    //name 👉 base_url/search/batman
    // id : 👉base_url/id
    //https://www.superheroapi.com/api.php/10223569763528853/search/spider-man
    // json.image.url
    // json.results[0].image.url
    console.log(searchElInput)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        
        const hero = json.results[0]
        console.log(hero)
        heroImageDiv.innerHTML = `<img src ="${hero.image.url}">`
    })
}
// getRandomSuperHero(60)

// getHero.onclick = () => getRandomSuperHero(RandNum)
// const RandNum = Math.floor(Math.random()*732)+1

// both of two fucntions works
    
getHero.addEventListener('click',(e)=>{
    const RandNum = Math.floor(Math.random()*732)+1
    e.preventDefault()
    getRandomSuperHero(RandNum)
    
    
})

searcBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    getSearchedSuperHero('thanos')
})

console.log(Math.floor(Math.random()*732)+1) // get the hero randomly.


// 07:08:30






