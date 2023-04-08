import React from 'react';
import '../styles/Footer.css'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram';

//contains github and linkedin links
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
            <a href="https://www.instagram.com/argiobbi/" target='_blank' rel="noopener noreferrer">
                <InstagramIcon />
            </a>
                <p>&copy; 2023</p>
            </div>
            
        </div>
    )
}


export default  Footer;