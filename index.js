const facebookShare = document.getElementById('facebook-share')
const twitterShare = document.getElementById('twitter-share')
const instagramShare = document.getElementById('instagram-share')
const menuItems = document.querySelectorAll('.menu-item');
const listaEpisodios = document.getElementById('lista-episodios')



// Exercicio 4 - 5 - 6
const episodios = [
    {
        id: 1,
        episodio: 'T1:01',
        tempo: '24min'
    },
    {
        id: 2,
        episodio: 'T1:02',
        tempo: '26min'
    },
    {
        id: 3,
        episodio: 'T1:03',
        tempo: '29min'
    }
]

episodios.forEach(episodio => {
const cardEpisodio = document.createElement('div')
cardEpisodio.className = 'card-episodio'

cardEpisodio.innerHTML = `
<span>${episodio.episodio}</span>
<span>${episodio.tempo}</span>
`

cardEpisodio.addEventListener('click', function(){
    alert(`Episodio ${episodio.episodio} clicado`)
})

listaEpisodios.appendChild(cardEpisodio)

})




// Exercicio 3
menuItems.forEach(item => {
    item.addEventListener('click', function(){
        alert('Página em construção')
    })
})
// Exercicio 2
facebookShare.addEventListener('click', function(event) {
    event.preventDefault()
    shareOnFacebook()
})

twitterShare.addEventListener('click', function(event) {
    event.preventDefault()
    shareOnTwitter()
})

instagramShareShare.addEventListener('click', function(event) {
    event.preventDefault()
    shareOnInstagram()
})

function shareOnFacebook(){
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href
    window.open(url)
}

function shareOnTwitter(){
    const url = 'https://twitter.com/intent/tweet?url=' + window.location.href
    window.open(url)
}

function shareOnInstagram(){
    const url = 'https://www.instagram.com/' + window.location.href
    window.open(url)
}