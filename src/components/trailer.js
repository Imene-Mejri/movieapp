import React from 'react'
import { Link ,  useParams} from "react-router-dom";


export default function Trailer({movies}) {
   
    const {ID}=useParams();
    return (
        <div className='tailer'>
          
           <Link to='/' ><button> let me back to movieslist</button></Link>
               <h1>i am trailer</h1>
              
              
            
              {
              movies.filter(el => el.id == ID).map((movies,index)=>(
                  <div key={index} className='information'>
                      <h1>{movies.title}</h1>
                      <p>{movies.decrcription}</p>
                      <span>{movies.watch}</span>

                  </div>
              ))
           /* <div className='TrailerImg'>
                <img src={(film.find(film=>film.id==ID)).img}/>
            </div>
            <div className='TrailerDetails'>
                <h2>{(film.find(el=> el.id==ID)).title}</h2>
                <p >{(film.find(el=> el.id==ID)).description}</p>
                <span>{(film.find(el=> el.id==ID)).watch}</span>
            </div>   */}

              </div>
              
       
    )
}
