import React from 'react';
import Movie from './Movie';
import Add from './Add';




function Movieslist({ movies,search,addhandler,rating } ) {
    console.log(search)



    return (
        <div >
            <div className='Movielist' >
            { 
                movies
                .filter(el=> el.title.toLowerCase().includes(search.toLowerCase().trim()) && el.rate >= rating  
                )
                .map(el => <Movie film={el} />)
            }
            </div>
            
            
            <Add addhandler={addhandler} />

        </div>
    )
}

export default Movieslist
