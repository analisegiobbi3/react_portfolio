import React from 'react'
import Project from './Project'
import Books from '../../img/books.png'
import Adopt from '../../img/adopt.png'
import noteTaker from '../../img/noteTaker.png'
import Weather from '../../img/weather.png'
import Readme from '../../img/readmegen.png'
import Social from '../../img/social.png'
import StepItUp from '../../img/StepItUp.png'


const style = {
    header: {
        textAlign: 'center',
        color: '#A4C3B2',
        fontFamily: 'Georgia',
        fontSize: '50px',
    },
    background: {
        backgroundColor: '#738290'
    }
}


function Portfolio() {
    const projects = [
        {
            id: 0,
            name:'Just Read It',
            description:'An app for tracking the books you love to read',
            github: 'https://github.com/analisegiobbi3/Just_Read_It',
            image: Books,
            link: 'https://warm-cove-40506.herokuapp.com/',
        },
        {
            id: 1,
            name:'NoSQL Social Network API',
            description:'Backend project to demo skills using mongoDB',
            github: 'https://github.com/analisegiobbi3/NoSQL_Challenge_Social_Network_API',
            image: Social,
            link:'https://bootcampspot.instructuremedia.com/embed/8e8a929a-2fbc-458c-b7fc-975ba50aa9cc'
        },
        {
            id: 2,
            name:"Adopt Don't Shop",
            description:'Project showing skills applying third party api data',
            github: 'https://github.com/analisegiobbi3/adopt_dont_shop',
            image: Adopt,
            link: 'https://analisegiobbi3.github.io/adopt_dont_shop/',
        },
        {
            id: 3,
            name:'Weather Dashboard',
            description:'Dashboard for searching locations and retrieving weather data',
            github: 'https://github.com/analisegiobbi3/Weather_Dashboard',
            image: Weather,
            link: 'https://analisegiobbi3.github.io/Weather_Dashboard/',
        },
        {
            id: 4,
            name:'Note Taker',
            description:'App for Taking notes',
            github: 'https://github.com/analisegiobbi3/Note_taker_app',
            image: noteTaker,
            link: 'https://thawing-bastion-65947.herokuapp.com/',
        },
        {
            id: 5,
            name:'README Generator',
            description:'Uses NodeJS to create a readme generator',
            github: 'https://github.com/analisegiobbi3/Professional_ReadME_Gen',
            image: Readme,
            link: 'https://bootcampspot.instructuremedia.com/embed/cdebd7b5-33be-49af-90b0-5511d1bc0afd',
        },
        {
            id: 6,
            name:'Step It Up',
            description:'Fitness app that uses react and graphQL',
            github: 'https://github.com/analisegiobbi3/Step_IT_Up',
            image: StepItUp,
            link: 'https://step-it-up.herokuapp.com/',
        }
    ]

    return (
        <div className='projects' style={style.background}>
            <h2 style={style.header}>My Projects</h2>
            <div className='container-fluid d-flex justify-content-center projectList'>
                    <div>
                        <Project projects={projects}/>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio