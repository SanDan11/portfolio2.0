import React from "react";
import "../styles/Home.css"

function Home() {
    return (
        <div>
            <h1 className="name-logo">Daniel Sanchez</h1>

            <div className="left-container">
                <p>I am Left</p>
            </div>

            <div className="center-container">
                <p>I am center</p>
            </div>
            
            <div className="right-container">
                <p>I am right</p>
            </div>

        </div>
    );
}

export default Home;