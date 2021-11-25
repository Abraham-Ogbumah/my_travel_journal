import React from "react"
import Globe from "../images/globe.png"

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-img-container">
                <img src={Globe} alt="Globe"/>
            </div>
            <div className="header-img-text">
                 <spam>My Travel Journal</spam>
            </div>
            
        </div>
    )
}