import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavTabs from './NavTabs'

import '../styles/Header.css'


//holds the tabs and switches based on what tab is selected 
function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />;
        }
        if (currentPage === 'Resume'){
            return <Resume />
        }
    }

    //Main page will be the About tab but this will handle the page changes and show the proper page based on what is set
    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <header className='header'>
                <h1>Analise Giobbi</h1>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
        </div>
    )
}

export default PortfolioContainer;
