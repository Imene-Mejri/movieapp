import React from 'react'
import { Link ,  useParams} from "react-router-dom";


export default function Trailer({movies}) {
    console.log(movies)
   
    const {ID}=useParams();
    return (
        <div className='tailer'>
          
           <Link to='/' ><button> let me back to movieslist</button></Link>
               <h1>i am trailer</h1>
              
              
            
               {/* {
              movies.filter(el => el.id == ID).map((movies,index)=>(
                  <div key={index} className='information'>
                      <h1>{movies.title}</h1>
                      <p>{movies.decrcription}</p>
                      <span>{movies.watch}</span>

                  </div> */}
              ))
           <div className='TrailerImg'>
                <img src={(movies.find(movie=>movie.id==ID)).img1}/>
            </div>
            <div className='TrailerDetails'>
                <h2>{(movies.find(movie=> movie.id==ID)).title}</h2>
                <p >{(movies.find(movie=> movie.id==ID)).description}</p>
                <span>{(movies.find(movie=> movie.id==ID)).watch}</span>
            </div>  

              </div>
              
       
    )
}
