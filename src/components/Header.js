import { NavItem } from './NavItem';
import '../styles/Header.css'

export function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <ul>
                <NavItem content='About Me' onClick={() => handlePageChange('AboutMe')} page='AboutMe' />
                <NavItem content='Portfolio' onClick={() => handlePageChange('Portfolio')} page='Portfolio' />
                <NavItem content='Contact' onClick={() => handlePageChange('Contact')} page='Contact' />
                <NavItem content='Resume' onClick={() => handlePageChange('Resume')} page='Resume' />
            </ul>
        </header>
    );
};