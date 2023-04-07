import React from 'react';
import '../styles/Footer.css'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'

const styles = {
    image: {
        width: '3%',
        height: '3%',

    }
}

function Footer() {
    return(
        <div className='footer'>
            <div className='social'>
            <a href="https://github.com/analisegiobbi3/" target='_blank' rel="noopener noreferrer">
                <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/analise-giobbi-405223117" target='_blank' rel="noopener noreferrer">
                <LinkedinIcon />
            </a>
                <p>&copy; 2023</p>
            </div>
            
        </div>
    )
}


export default  Footer;