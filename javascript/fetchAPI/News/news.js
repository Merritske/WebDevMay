//apikey 12d5aa8adb054735a1e86de6ee07d71f

var apiKey = '12d5aa8adb054735a1e86de6ee07d71f'
var baseURL = 'https://newsapi.org/v2'
var result = document.querySelector('.results')
var modalTitle = document.querySelector('.modal-title')
var published = document.querySelector('.date')
let image = document.querySelector('.image')
var content = document.querySelector('.content')
// fetch(`${baseURL}/everything?q=javascript&sortBy=popularity&language=en&apiKey=${apiKey}`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data.articles)
//        data.articles.forEach(news=>console.log(news.title))
// })

async function getAllNews() {
    let res = await fetch(`${baseURL}/everything?q=Belgium&sortBy=popularity&language=nl&apiKey=${apiKey}`)
    return res.json()
}

// function getAllNews2(){
//     return new Promise((resolve, reject)=>{
//         fetch(`${baseURL}/everything?q=javascript&sortBy=popularity&language=en&apiKey=${apiKey}`)
// .then(res=>res.json())
// .then(data=>{
//   resolve(data)
// })
//     })
// }
function getDetail(news) {
    modalTitle.innerHTML = news.title
    published.innerHTML = news.publishedAt 
    image.src = news.urlToImage
    content.innerHTML = news.description
    // console.log(news)
}

getAllNews()
    .then(results => {
    console.log(results)
        results.articles.map((news, index) => {

            let newsLink = `<a href="${news.url}"  target="_blank"
    data-bs-toggle="modal" 
    data-bs-target="#staticBackdrop"
    data-id="${index}" > ${news.title}</a><br>`
            console.log(newsLink)
            result.innerHTML += newsLink
        }
        )
        document.querySelectorAll('a').forEach(link => {
            //console.log(link)
            link.addEventListener('click', (e) => {
                let id = e.target.getAttribute('data-id');
                let singleNews = results.articles
               // console.log(id)
                getDetail(singleNews[id])
            })
        })
    })
