import { useState } from 'react';
import { NavItem } from './NavItem';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

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

    return (
        <div>
            <NavItem currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}