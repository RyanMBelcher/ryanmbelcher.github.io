import React, {useState} from 'react';
import { NavItem } from './NavItem';
import Hamburger from './Hamburger';
import '../styles/Header.css';
import '../styles/Hamburger.css';
import { useWindowSize } from '../hooks/useWindowSize';

export function Header({ currentPage, handlePageChange }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const { width } = useWindowSize();

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    const isMobile = width <= 821;

    return (
        <div className='navigation'>
            <header>
                {isMobile ?
                     <div className='hamburger-wrapper' onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div> 
                : null}
                {hamburgerOpen || !isMobile ?
                    <ul className='header-list'>
                        <NavItem content='About Me' onClick={() => handlePageChange('AboutMe')} page='AboutMe' currentPage={currentPage} />
                        <NavItem content='Portfolio' onClick={() => handlePageChange('Portfolio')} page='Portfolio' currentPage={currentPage} />
                        <NavItem content='Contact' onClick={() => handlePageChange('Contact')} page='Contact' currentPage={currentPage} />
                        <NavItem content='Resume' onClick={() => handlePageChange('Resume')} page='Resume' currentPage={currentPage} />
                    </ul>
                : null}
                <style jsx>
                {`
                    @media (max-width: 821px) {
                        .navigation {
                            background-color: rgba(230, 134, 75, ${hamburgerOpen ? .8 : 0});
                            transition: background-color 1s ease-out; 
                        }
                        .header-svg {
                            height: 68px;
                            width: 68px;
                        }
                    }
                `}
                </style>
            </header>


        </div>
    );
};