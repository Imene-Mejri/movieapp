import React from 'react'
import { Link ,  useParams} from "react-router-dom";


export default function Trailer({movies}) {
    console.log(movies)
   
    const {ID}=useParams();
    const movie=movies.find(movie=>movie.id==ID)
   
    
    return (
        <div className='tailer'>
            <h1 className='text'> My trailer</h1>
          
           <Link to='/' ><button> let me back to movieslist</button></Link>
               
              
               <div className='TrailerImg'>
                <img src={movie && movie.img1}/>
            </div>
            <div className='TrailerDetails'>
                <h3>{movie && movie.title}</h3>
                <p>{ movie && movie.description}</p>
               <iframe   src={movie && movie.watch} title='trailer'>   </iframe>
    </div>  
            
        </div>
    )

}

