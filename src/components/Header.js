import React from 'react';
import { NavItem } from './NavItem';
import myAvatar from '../images/myavatar.png'
import '../styles/Header.css'

export function Header({ currentPage, handlePageChange }) {
    return (
        <>
            <header>
                <container id='header-container'>
                    <h1>Ryan M Belcher</h1>
                    <img src={myAvatar} alt='avatar of me' id='my-avatar'></img>
                    <p id='my-intro'> Greetings and welcome to my portfolio! My name is Ryan Belcher and I am a full stack web developer.
                        Please take a look around and hit me up if you have any questions.</p>
                </container>
                <ul className='header-list'>
                    <NavItem content='About Me' onClick={() => handlePageChange('AboutMe')} page='AboutMe' currentPage={currentPage} />
                    <NavItem content='Portfolio' onClick={() => handlePageChange('Portfolio')} page='Portfolio' currentPage={currentPage} />
                    <NavItem content='Contact' onClick={() => handlePageChange('Contact')} page='Contact' currentPage={currentPage} />
                    <NavItem content='Resume' onClick={() => handlePageChange('Resume')} page='Resume' currentPage={currentPage} />
                </ul>
            </header>


        </>
    );
};