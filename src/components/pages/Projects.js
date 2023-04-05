import React from 'react'

function Projects(props) {

    return(
        <div>
            <div className="columns is-justify-content-center is-flex-wrap-warp is-flex-direction-row">
                {props.projects.map((projects) => {
                    <div className="card" style="width: 18rem;">
                        <img src={projects.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{projects.name}</h5>
                            <p className="card-text">{projects.description}</p>
                        </div>
                            <a href={projects.github} className="card-link">Github</a>
                        </div>
                })}
            </div>
        </div>

    )
}

export default Projects;