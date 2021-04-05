import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {

    return ( 
        <div>
            <Header />
            <div class="container">
            <div class="about row align-items-center">
                <div class="col">
                    <h2>About Me</h2>
                    <p>lorem ipsum</p>
                </div>
                <div class="col">
                    <h2>Skills</h2>
                    <p>icons</p>
                </div>            
            </div>
            </div>
        </div>
    )
}

export default Home;