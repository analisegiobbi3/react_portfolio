import React from 'react';
import '../../styles/Resume.css'
import DescriptionIcon from '@material-ui/icons/Description';

const styles = {
    resume: {
        textAlign: 'center'
    },
    skills: {
        fontSize: '30px'
    },
    icon: {
        color: '#cad2c5',
        marginBottom: '20px',
    }
}

function Resume(){
    return(
        <div className='columns resume'>
            <div className='columns'>
                <div className='column'>
                    <h1 className='content is-large' style={styles.skills}>Skills Summary</h1>
                    <hr />
                    <h3>Front-End</h3>
                    <span>
                        HTML, CSS, Javascript, React, BootStrap, NPM, UI test Automation
                    </span>
                    <h3>Back-End</h3>
                    <span>
                        API testing, mongoDB, SQL, Express, NodeJS, GraphQL, 
                    </span>
                    <h3>Languages</h3>
                    <span>
                        Javascript/Typscript, Swift
                    </span>
                    <h3>Tools</h3>
                    <span>
                        Git, Insomnia 
                    </span>
                </div>
            </div>
            <hr />
            <button className='downloadButton'>
                <a className='button is-primary' href={process.env.PUBLIC_URL + "/AGiobbi_Resume_2023.pdf"}
                    target="_blank" rel="noreferrer" style={styles.icon}>
                    Download <DescriptionIcon />    
                </a>
            </button>

        </div>

    )
}

export default Resume;