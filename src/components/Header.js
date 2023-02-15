import { NavItem } from './NavItem';
import '../styles/Header.css'

export function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Ryan M Belcher</h1>
            <ul className='header-list'>
                <NavItem content='About Me' onClick={() => handlePageChange('AboutMe')} page='AboutMe' currentPage={currentPage} />
                <NavItem content='Portfolio' onClick={() => handlePageChange('Portfolio')} page='Portfolio' currentPage={currentPage} />
                <NavItem content='Contact' onClick={() => handlePageChange('Contact')} page='Contact' currentPage={currentPage} />
                <NavItem content='Resume' onClick={() => handlePageChange('Resume')} page='Resume' currentPage={currentPage} />
            </ul>
        </header>
    );
};