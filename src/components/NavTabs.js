import React from 'react';

const styles = {
    tabs: {
        color: '#cad2c5',
    }

}


//function to handle the changing of the tabs. Depending on the tab name, that corresponding page will appear
function NavTabs ({ currentPage, handlePageChange }){
    return(
        <ul className="nav nav-tabs" >
            <li className="nav-item">
                <a style={styles.tabs} href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a style={styles.tabs} href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a style={styles.tabs} href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <a style={styles.tabs} href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
    )
}

export default NavTabs;