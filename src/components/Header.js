import React, { useState } from 'react';
import AboutMe from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavTabs from './NavTabs'

import '../styles/Header.css'



function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('AboutMe')

    const renderPage = () => {
        if (currentPage === 'AboutMe'){
            return <AboutMe />;
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

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <header>
                <h1>Portfolio</h1>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
        </div>
    )
}

export default PortfolioContainer;
