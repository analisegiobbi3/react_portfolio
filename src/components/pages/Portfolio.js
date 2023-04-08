import React from 'react'
import Project from './Project'

const style = {
    header: {
        textAlign: 'center',
        color: '#84a98c',
        fontFamily: 'Georgia',
        marginTop: '5px'
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
            image: '/img/books.png'
        },
        {
            id: 1,
            name:'NoSQL Social Network API',
            description:'Backend project to demo skills using mongoDB',
            github: 'https://github.com/analisegiobbi3/NoSQL_Challenge_Social_Network_API',
            image: '/img/social.png'
        },
        {
            id: 2,
            name:"Adopt Don't Shop",
            description:'Project showing skills applying third party api data',
            github: 'https://github.com/analisegiobbi3/adopt_dont_shop',
            image: '/img/adopt.png'
        },
        {
            id: 3,
            name:'Weather Dashboard',
            description:'Dashboard for searching locations and retrieving weather data',
            github: 'https://github.com/analisegiobbi3/Weather_Dashboard',
            image: '/img/weather.png'
        },
        {
            id: 4,
            name:'Note Taker',
            description:'App for Taking notes',
            github: 'https://github.com/analisegiobbi3/Note_taker_app',
            image: '/img/noteTaker.png'
        },
        {
            id: 5,
            name:'README Generator',
            description:'Uses NodeJS to create a readme generator',
            github: 'https://github.com/analisegiobbi3/Professional_ReadME_Gen',
            image: '/img/readmegen.png'
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