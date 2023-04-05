import React from 'react'
import Projects from './Projects'


function Portfolio() {
    const projects = [
        {
            id: 0,
            name:'Just Read It',
            description:'An app for tracking the books you love to read',
            github: 'https://github.com/analisegiobbi3/Just_Read_It',
            image: '../../assets/books.png'
        },
        {
            id: 1,
            name:'NoSQL Social Network API',
            description:'Backend project to demo skills using mongoDB',
            github: 'https://github.com/analisegiobbi3/NoSQL_Challenge_Social_Network_API',
            image: '../../assets/social.png'
        },
        {
            id: 2,
            name:"Adopt Don't Shop",
            description:'Project showing skills applying third party api data',
            github: 'https://github.com/analisegiobbi3/adopt_dont_shop',
            image: '../../assets/adoptions.png'
        },
        {
            id: 3,
            name:'Weather Dashboard',
            description:'Dashboard for searching locations and retrieving weather data',
            github: 'https://github.com/analisegiobbi3/Weather_Dashboard',
            image: '../../assets/weather.png'
        }
    ]

    return (
        <div>
            <h2>Portfolio</h2>
            <Projects projects={projects}/>
        </div>
    )
}

export default Portfolio