fetch = require('node-fetch')
fetch("http://imdb-api.com/en/API/Top25@movies/k_ykkxbjw3")
.then(response => {
    return response.json()
})
.then((data)=>{
    data.items.forEach((movie)=>{
        if(movie.year =="2020")
        {
            console.log(movie.title)
            console.log(movie.imDbRating)
        }
    })
})
.catch(err =>{
    console.error(err);
})