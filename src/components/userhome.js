import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation()

    return (
        <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the home</h1>
            <div className="sidebar">
                <a className="active" href="/userlogin">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Home