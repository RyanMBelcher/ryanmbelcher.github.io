// import React from 'react';
import Intro from '../Intro'
import '../../styles/AboutMe.css'

export default function AboutMe() {
    return (
        <div className='about-me'>
            <Intro />
            <h2 className='section-header'>About Me</h2>

            <p  className='section-wrapper'>
                I am a full stack web developer with a bias towards front end development. I recently earned a full stack web development certificate
                from the University of Pennsylvania, where I developed skills in HTML, CSS, JS, OOP, MVC, ORM, SQL, MongoDB, React.JS, and
                responsive web design.
                <br />
                I have a background in the banking and mortgage industries which helped to develop my problem solving skills which I am excited to
                now bring to the software development world.
                <br />
                In my spare time, I enjoy running, traveling, cooking, and chilling with my wife.
                <br />
                If you want to connect, my links are below or you can reach out to me here.
            </p>
        </div>
    )
}