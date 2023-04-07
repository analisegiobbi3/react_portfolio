import React from 'react'

const styles = {
    cardStyle: {
        width: '18rem',
    }
}

function Project(props) {

    return(
        <div>
            {props.projects.map((projects) => (
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
            ))}
        </div>
    )
}

export default Project;
