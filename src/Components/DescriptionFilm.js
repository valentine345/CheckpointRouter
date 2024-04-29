import { useParams } from "react-router-dom"

const DescriptionFilm=({movies})=>{
    const {nom} = useParams()

    const film = movies.find((el,i,t)=> el.name == nom)
    return(
        <div>
            <h1>{film.name}</h1>
            <iframe width="560" height="315" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default DescriptionFilm