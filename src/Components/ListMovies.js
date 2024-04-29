import { useState } from "react"
import CardMovie from "./CardMovie"
import AddMovie from "./AddMovie"

const ListMovie=({movies,setMovies})=>{
    

    const [recherche,setRecherche] = useState("")
    var x =  movies.filter((el,i,t)=> el.name.toLowerCase().includes(recherche.toLowerCase()) )
    return(
        <div>
            <input type="text" onChange={(e)=> setRecherche(e.target.value)}/>
            <AddMovie movies={movies} setMovies={setMovies}/>
            <div className="elvige">
                {
                   x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                }
            </div>
        </div>
    )
}

export default ListMovie