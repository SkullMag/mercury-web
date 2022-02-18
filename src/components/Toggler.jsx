import React from "react";
import "../styles/Toggler.css"


function Toggler() {
    return (
        <div className="card toggler">
            <div className="userCollections">
                <button className="collectionType">Your</button>
            </div>
            <div className="likedCollections">
                <button className="collectionType">Liked</button>
            </div>
            <div className="topCollections">
                <button className="collectionType">Top 100</button>
            </div>
        </div>
    )
}


export default Toggler;