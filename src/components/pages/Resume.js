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
                    <h2>Front End</h2>
                    <ul>
                        <li>HTML, CSS, Javascript</li>
                        <li>Insomnia, API Testing</li>
                        <li>mongoDB, SQL</li>
                        <li>Git</li>
                        <li>React</li>
                    </ul>
                    <h2>Back End</h2>
                    <ul>
                        <li>HTML, CSS, Javascript</li>
                        <li>Insomnia, API Testing</li>
                        <li>mongoDB, SQL</li>
                        <li>Git</li>
                        <li>React</li>
                    </ul>
                    <h2>Languages</h2>
                    <ul>
                        <li>Javascript/Typscript</li>
                        <li>Swift</li>

                    </ul>

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