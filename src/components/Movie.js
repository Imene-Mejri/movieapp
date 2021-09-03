import React from 'react'

export default function Movie({ film }) {


    const rate = []
    const rest = []
    rate.length = film.rate
    rest.length = 5 - film.rate

    return (
        <div className='movie'>
           <div className='front'>
            <img className="image" src={film.img1} />
            </div>
            <div className='back'>
            {/*<img className="image" src={film.img2} />*/}
            </div>
            <h3 className="title">{film.title}</h3>
            <br/>
            <div className='star-btn'>
                {rate.fill(<i class="fas fa-star"></i>).concat(rest.fill(<i class="far fa-star"></i>))}
            </div>
            <br/>
            <p className="description">{film.description}</p>
        </div>
    );
};


