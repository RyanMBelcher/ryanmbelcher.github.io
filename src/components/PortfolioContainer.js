import { useState } from 'react';
import { Header } from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    console.log(currentPage);
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);
    console.log('handle page change from parent', handlePageChange);

    return (
        <div>
            <Header handlePageChange={handlePageChange} currentPage={currentPage} />
            {renderPage()}
        </div>
    );
}