import { useState } from 'react';
import { Header } from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Content from './Content';
import '../styles/PortfolioContainer.css'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = (curPage) => {
        if (curPage === 'AboutMe') {
            return <AboutMe />
        }
        if (curPage === 'Contact') {
            return <Contact />
        }
        if (curPage === 'Portfolio') {
            return <Portfolio />
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='portfolio-container'>
            <Header handlePageChange={handlePageChange} currentPage={currentPage} />
            <Content>
                {renderPage(currentPage)}
            </Content>
        </div>
    );
}

