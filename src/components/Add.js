import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
Modal.setAppElement('#root');

export default function Add({addhandler }) {


    const [show, setshow] = useState(false);

    const toggle = () => {
        setshow(!show)
    }
    const [title, settile] = useState('');
    const [rate, setrate] = useState("");
    const [img, setimg] = useState('');
    const [description, setdescription] = useState('');


    
  const addfilm = (e) => {
      e.preventDefault()
    addhandler ({
      id: Math.random(),
      title: title,
      rate: rate,
      img1: img,
      description: description
    });
  

    }
    return (
        <div className='Add'>
            <button onClick={toggle} className='btn-add' ><i class="fas fa-plus-square"></i></button>
         
            <Modal isOpen={show}>
                <form className='modalform'>
                    <h1>Add new movie</h1>

                    <br />
                    <input onChange={(e) => settile(e.target.value)}
                        className='inputAdd' type='text'
                        placeholder='enter your movie'
                    >

                    </input>
                    <br />

                    <input onChange={(e) => setrate(e.target.value)}
                        className='inputAdd'
                        type='text'
                        placeholder='the rate'

                    />
                    <br />


                    <input onChange={(e) => setimg(e.target.value)}
                        className='inputAdd'
                        type="text"
                        placeholder="add Poster Link "

                    />
                    <br />
                    <input onChange={(e) => setdescription(e.target.value)}
                        className='inputAdd'
                        type="text"
                        placeholder="add description"

                    />
                    <br />
                    <div className='btnadd'>
                        <button className='Addbutton' onClick={toggle}>Close</button>
                        <button  onClick={addfilm}>Addmovie</button>
                    </div>
                </form>
            </Modal>


        </div>
    )
}
