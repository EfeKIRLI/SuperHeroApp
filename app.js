
const SUPERHERO_TOKEN = '10223569763528853/'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const getHero = document.getElementById('getHeroBtn')
const heroImageDiv = document.getElementById('heroImage')
const searcBtn = document.getElementById('searchBtn')
const searchElInput = document.getElementById('input')

const getRandomSuperHero = (id,name)=> { 
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
         console.log(json)
         getStatsHTML(json)
         const name = `<h2>${json.name}</h2>`
         const powerstats = `
         <p>🧠İntelligence: ${json.powerstats.intelligence}</p>
         <p>👊combat: ${json.powerstats.combat}</p>
         <p>🛡️durability: ${json.powerstats.durability}</p>
         <p>💥power: ${json.powerstats.power}</p>
         <p>🚤speed: ${json.powerstats.speed}</p>
         <p>💪strength: ${json.powerstats.strength}</p>
         `
         heroImageDiv.innerHTML += ` ${name}<img src ="${json.image.url}"> ${powerstats}`

        //  document.querySelector('body').innerHTML += `<img src ="${json.image.url}">` both of two works
        })
}

const getStatsHTML = (character)  =>{
    console.log(Object.keys(character.powerstats)) // returning array 
    for (stat in character.powerstats){
        console.log(stat)
    }
}
//name 👉 base_url/search/batman
    // id : 👉base_url/id
    //https://www.superheroapi.com/api.php/10223569763528853/search/spider-man
    // json.image.url
    // json.results[0].image.url
const getSearchedSuperHero = (name)=>{
    // const searchingHero = searchElInput.value
    console.log(searchElInput.value,searchElInput)
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
    getSearchedSuperHero(searchElInput.value) // 'thanos'
})

console.log(Math.floor(Math.random()*732)+1) // get the hero randomly.


// 07:08:30






