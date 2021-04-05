import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import jeopardy from '../assets/jeopardy.png'

const Home = () => {

    return ( 
        <div>
            <Header />
            <div className="container">

            <div className="about row align-items-center">
                <div className="col">
                    <h2>About Me 👩‍💻</h2>
                    <p>I'm a full stack software engineer with a focus on solid software craftsmanship and continuous learning. I have a passion for solving problems and tackling challenges like climate change through software engineering.</p>
                </div>
                <div className="col">
                    <h2>Skills</h2>
                    <p>icons</p>
                </div>            
            </div>
            <br/>
            <div className="container-fluid mb-4">
                    <h2 className="text-center">Projects</h2>

            <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

                <div className="card m-4">
                <img className="card-img-top" src={jeopardy} alt="Jeopardy"/>
                <div className="card-body">
                <Link to="/jeopardy" className="card-link">Jeopardy Browser Game</Link>
                </div>
                </div>

                <div className="card m-4">
                <img className="card-img-top" src={jeopardy} alt="Jeopardy"/>
                <div className="card-body">
                <Link to="/jeopardy" className="card-link">Jeopardy Browser Game</Link>
                </div>
                </div>

                </div>
            </div>

            </div>

        </div>
    )
}

export default Home;