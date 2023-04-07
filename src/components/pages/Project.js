import React from 'react'
import '../../styles/Project.css'

function Project(props) {

    return(
        <div className='row'>
            {props.projects.map((projects) => (
            <div className='col-4'>
                <div className='card text-center'>
                    <div className='overflow'>
                        <img src={projects.image} className="card-img-top" alt="..."/>
                    </div>
                    <div className='card-body text-dark'>
                        <h5 className="card-title">{projects.name}</h5>
                        <p className="card-text text-secondary">{projects.description}</p>
                    </div>
                        <a href={projects.github} className="btn btn-outline-success">Github</a>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Project;
