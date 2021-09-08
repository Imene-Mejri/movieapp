
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactPlayer from 'react-player'

import Movieslist from './components/Movieslist';
import Search from './components/search';
import { useState } from 'react';
import Rating from './components/rating'
import Trailer from './components/trailer';


function App() {
  const [movies, setmovies] = useState([{
    id: Math.random(),
    title: "ETERNEL",
    rate: 2,
    img1: "https://cimalina.com/wp-content/uploads/2021/04/Ashampoo_Snap_2021.04.29_11h48m47s_005_.png",
    watch:'https://youtu.be/jDcaajh7_aY?t=10'
      ,

    description: "Movies coming in 2021 from Netflix, Marvel, HBO and more - CNET"
  },
  {
    id: Math.random(),
    title: " The Little Mermaid",
    rate: 3,
    img1: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Little_Mermaid_2018_poster.jpg",
    watch:'https://youtu.be/e4UP-bFNKWQ?t=24',

    description: "Nonton Bioskop Online The Little Mermaid (2018) Subtitle Indonesia Little mermaid",


  },
  {
    id: Math.random(),
    title: "2The Rock",
    rate: 4,
    img1: 'https://i0.wp.com/www.heyuguys.com/images/2012/01/Journey-2-UK-Poster.jpg',
    watch:'https://youtu.be/3tQsTyoaCqg',

    description: "The film, loosely based on the video-game series"
  },
  {
    id: Math.random(),
    title: "Mission impossible",
    rate: 2,
    img1
      : 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg',
    watch:'https://www.imdb.com/video/vi2629352217?playlistId=tt4912910&ref_=tt_ov_vi',
      

    description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."
  },
  {
    id: Math.random(),
    title: "Fair game",
    rate: 3,
    img1: 'https://upload.wikimedia.org/wikipedia/ar/3/3e/Fair_Game_Poster.jpg',
    watch:'https://youtu.be/4SLn4a5W3lY'
      ,

    description: "Sometimes truth is harder to believe than fiction.  The real life story of Valerie Plame, a former CIA Agent publicly exposed during the early days of the war against Iraq, unfolds like a James Bond movie.  What unfolds in “Fair Game” is that the justification to use unbridled political power is a temptation that is kept in check only by a vigilant and involved public."
  },
  {
    id: Math.random(),
    title: "Twilight",
    rate: 3,
    img1: 'data:image/jpeg;base64,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',
    watch: 'https://youtu.be/LqHql4e-5wU',
    


    description: " high quality reproduction poster by Pop Culture Graphics. Printed in the USA. Perfect for framing."
  },



  ]);
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState("");

  const addhandler = (newmovie) => {

    setmovies(
      [...movies, newmovie])
  }

  return (
    
    
    <div className="App">
     <Router>
       
        <Route exact path='/' >
          <Search setsearch={setSearch} />


          <Rating setRating={setRating} />

          <Movieslist movies={movies} search={search} addhandler={addhandler} rating={rating} />

        </Route>
        <Route path="/Trailer/:ID">
        
            <Trailer movies={movies} />
     
          </Route>

            </Router>
    </div>
     
  );
}

export default App;
