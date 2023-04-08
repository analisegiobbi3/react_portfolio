import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'


//calls main pages which are header and footer
function App() {
    return(
        <div className='App'>
            <Header />
            <Footer />
        </div>
    )
}

export default App;