import React from 'react'

function Card(prop) {
    return(
        <div className="container">
            <div className="card">
                <img className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">Project: {prop.name}</h5>
                    <p className="card-text">Description: {prop.description}</p>
                    <a href={prop.link} className="btn btn-primary">
                        <img src="../../assets/github-logo.png"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;