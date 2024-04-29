import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovies';
import { useState } from "react"
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import DescriptionFilm from './Components/DescriptionFilm';
function App() {
  const [movies,setMovies] = useState(
    [
        {name : "BlackPanther", description : "Black Panther: Wakanda Forever ou Black Panther : Longue vie au Wakanda au Québec est un film de super-héros américain coécrit et réalisé par Ryan Coogler, sorti en 2022.", image : "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",trailer : "https://www.youtube.com/embed/xjDjIWPwcPU?si=89NzQyDciEIeeXdF"},
        {name : "Moicapitaine", description : "Seydou et Moussa, deux jeunes sénégalais de 16 ans, décident de quitter leur terre natale pour rejoindre l'Europe, mais sur leur chemin les rêves et les espoirs d'une vie meilleure sont très vite anéantis par les dangers de ce périple. Leur seule arme dans cette odyssée restera leur humanité.", image :"https://fr.web.img5.acsta.net/pictures/23/10/11/09/12/4467686.jpg",trailer :"https://www.youtube.com/embed/peOwMyk0FRk?si=fF1QLfQpEJ725U1Q" },
        {name : "Fences", description : "À Pittsburgh dans les années 50, Troy habite une maison ouvrière avec sa famille. Cet éboueur a toujours rêvé devenir joueur de baseball professionnel et il est convaincu qu'il a été victime de racisme à cause de la couleur de sa peau.", image :"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13098062_p_v8_ak.jpg", trailer : "https://www.youtube.com/embed/spCxVd9ctFs?si=fzsq837hRYUJDyzy" },
        
    ]
)
  return (
    <div>
      <NavMovie/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alhassane' element={<ListMovie movies={movies} setMovies={setMovies}/>}/>
        <Route path='/Description/:nom' element={<DescriptionFilm movies={movies}/>}/>
       </Routes>
    </div>
  );
}

export default App;
