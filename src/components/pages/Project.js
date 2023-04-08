import React, { useState, useRef } from 'react'
import '../../styles/Project.css'
import GithubIcon from '@material-ui/icons/GitHub'


function Project(props) {
    return(
    <div className='row projectItem'>
        {props.projects.map((projects) => (
        <div className='col-4 parentDiv'>
            <div className='card text-center childDiv'>
                <div className='overflow'>
                    <img src={projects.image} className="card-img-top" alt="..."/>
                </div>
                <div className='card-body text-dark'>
                    <h5 className="card-title">{projects.name}</h5>
                    {/* <p className="card-text text-secondary">{projects.description}</p> */}
                </div>
                    <a className='link' href={projects.github} target='_blank' rel="noopener noreferrer">
                    <GithubIcon />
                    </a>
            </div>
        </div>
        ))}
    </div>
)

}

export default Project;



