
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    img1: "./images/pic1.jpg",
    watch:
      <iframe
        src='https://youtu.be/8YjFbMbfXaQ' title='youtube film'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>,

    description: "Movies coming in 2021 from Netflix, Marvel, HBO and more - CNET"
  },
  {
    id: Math.random(),
    title: " The Little Mermaid",
    rate: 3,
    img1: "./images/pic2.jpg",
    watch:
      <iframe
        src='https://youtu.be/dSYzxH00awE' title='youtube film'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>,

    description: "Nonton Bioskop Online The Little Mermaid (2018) Subtitle Indonesia Little mermaid",


  },
  {
    id: Math.random(),
    title: "2The Rock",
    rate: 4,
    img1: './images/pic3.jpeg',
    watch:
      <iframe
        src='https://youtu.be/3tQsTyoaCqg' title='youtube film'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>,

    description: "The film, loosely based on the video-game series"
  },
  {
    id: Math.random(),
    title: "Mission impossible",
    rate: 2,
    img1
      : './images/pic4_.jpg',
    watch:
      <iframe
        src='https://youtu.be/wb49-oV0F78' title='youtube film'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>,


    description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."
  },
  {
    id: Math.random(),
    title: "Fair game",
    rate: 3,
    img1: './images/pic5.jpeg',
    watch:
      <iframe
        src='https://youtu.be/4SLn4a5W3lY' title='youtube film'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>,

    description: "Sometimes truth is harder to believe than fiction.  The real life story of Valerie Plame, a former CIA Agent publicly exposed during the early days of the war against Iraq, unfolds like a James Bond movie.  What unfolds in “Fair Game” is that the justification to use unbridled political power is a temptation that is kept in check only by a vigilant and involved public."
  },
  {
    id: Math.random(),
    title: "Twilight",
    rate: 3,
    img1: './images/pic6.jpg',
    watch:
      <iframe
        src='https://youtu.be/LqHql4e-5wU' title='youtube film'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>,


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

        <Route path='/Trailer/:ID' />
            <Trailer movies={movies} />
      
      </Router>


    </div>
  );
}

export default App;
