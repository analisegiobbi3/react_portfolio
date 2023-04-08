import React from 'react';

const styles = {
    resume: {
        textAlign: 'center'
    },
    skills: {

    }

}

function Resume(){
    return(
        <div className='columns'>
            <div className='columns'>
                <h1>Resume</h1>

                <hr />
                <div className='column'>
                    <p className='content is-medium'>Skills:</p>
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
                    <a className='button is-primary' href={process.env.PUBLIC_URL + "/AGiobbi_Resume_2023.pdf"}
                    target="_blank" rel="noreferrer" >
                    <span >Download Resume</span>
                    </a>
                </p>
            </div>
        </div>

    )
}

export default Resume;