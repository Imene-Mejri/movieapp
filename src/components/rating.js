



import React from 'react'

export default function rating({ setRating }) {
    const stars = Array(5).fill(<i className="fas fa-star"></i>)
    return (
        <div className='rate'>
            {stars.map((el, i) => <button onClick={() => setRating(i + 1)} className="stars">{el}</button>)}

        </div>
    )
}


