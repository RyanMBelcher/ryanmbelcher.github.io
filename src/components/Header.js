import React, {useState} from 'react';
import { NavItem } from './NavItem';
import Hamburger from './Hamburger';
import '../styles/Header.css'
import '../styles/Hamburger.css'

export function Header({ currentPage, handlePageChange }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    // const isMobile = kljekljre;

    return (
        <div className='navigation'>
            <header>
                <ul className='header-list'>
                    <NavItem content='About Me' onClick={() => handlePageChange('AboutMe')} page='AboutMe' currentPage={currentPage} />
                    <NavItem content='Portfolio' onClick={() => handlePageChange('Portfolio')} page='Portfolio' currentPage={currentPage} />
                    <NavItem content='Contact' onClick={() => handlePageChange('Contact')} page='Contact' currentPage={currentPage} />
                    <NavItem content='Resume' onClick={() => handlePageChange('Resume')} page='Resume' currentPage={currentPage} />
                </ul>
                <div className='hamburger' onClick={toggleHamburger}>
                    <Hamburger />
                </div>
                <style jsx>
                { `
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        height: 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: absolute;
                    }
                    `}</style>
            </header>


        </div>
    );
};