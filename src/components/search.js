import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';



export default function Search({setsearch }) {
    return (
        <div>
            <form className='form'>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                id='search'
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                onChange={(e)=>setsearch(e.target.value)}
                            />
                             
                          
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </form>
        </div>
    )
}
