import React, { useEffect, useState } from 'react'

function Movie() {
    const movieApi = "https://api.themoviedb.org/3/movie/popular?api_key=a5531f013824e2e60d416bd5e88fade9";
   
    const [movieList, setmovieList] = useState([])
    //fetch,axios,ajax
    useEffect(() => {
            fetch(movieApi).then(m => m.json()).then(x => setmovieList(x))
    }, [])
    console.log(movieList)
    return (
        <div className="container">
        <div className='row'>

            {movieList.length !=0  ? movieList.results.map(movie => (
                <div key={movie.id} className='col-lg-4 movie-detail'>
                    <img className='img-fluid' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    <h4>{movie.original_title}</h4>
                </div>
            )) : (<p>yüklenir...</p>)}
        </div>
        </div>
    )
}

export default Movie
