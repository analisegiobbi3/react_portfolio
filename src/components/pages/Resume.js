import React from 'react';

const styles = {
    resume: {
        textAlign: 'center'
    },
    skills: {
        fontSize: '30px'

    }

}

function Resume(){
    return(
        <div className='columns'>
            <div className='columns'>
                <a className='button is-primary' href={process.env.PUBLIC_URL + "/AGiobbi_Resume_2023.pdf"}
                    target="_blank" rel="noreferrer" >
                    <h1>Resume</h1>
                </a>

                <hr />
                <div className='column'>
                    <p className='content is-medium' style={styles.skills}>Skills:</p>
                    <hr />
                    <h2>Front-End</h2>
                    <span>
                        HTML, CSS, Javascript, React, BootStrap, NPM, UI test Automation
                    </span>
                    <h2>Back-End</h2>
                    <span>
                        API testing, mongoDB, SQL, Express, NodeJS, GraphQL, 
                    </span>
                    <h2>Languages</h2>
                    <span>
                        Javascript/Typscript, Swift
                    </span>
                    <h2>Tools</h2>
                    <span>
                        Git, Insomnia 
                    </span>
                </div>
                <p className='content is-medium' style={styles.resume}>

                </p>
            </div>
        </div>

    )
}

export default Resume;