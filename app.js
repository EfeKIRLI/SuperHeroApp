
const SUPERHERO_TOKEN = '10223569763528853/'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const getHero = document.getElementById('getHeroBtn')
const heroImageDiv = document.getElementById('heroImage')

const getSuperHero = (id,)=> { 
    fetch(`${BASE_URL}${id}`)
    .then(response => response.json())
    .then(json => {
         console.log(json)
         heroImageDiv.innerHTML += `<img src ="${json.image.url}">`

        //  document.querySelector('body').innerHTML += `<img src ="${json.image.url}">` both of two works
        })
}

// getSuperHero(60)

// getHero.onclick = () => getSuperHero(RandNum)
// const RandNum = Math.floor(Math.random()*732)+1

// both of two fucntions works
    
getHero.addEventListener('click',(e)=>{
    const RandNum = Math.floor(Math.random()*732)+1
    e.preventDefault()
    getSuperHero(RandNum)
    
    
})

console.log(Math.floor(Math.random()*732)+1) // get the hero randomly.






