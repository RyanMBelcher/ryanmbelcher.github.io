import React from 'react';
import '../../styles/Resume.css'

export default function Resume() {
    return (
        <section id='resume'>
            <h2 className='section-header'>Resume</h2>
            <p>Download my <a className='resume-link' href='https://docs.google.com/document/d/1qyMVf2lJNgzssp95yTidSJWnpzRig2LNC3b4osdRMvM/edit?usp=sharing' target='_blank'>resume</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQeury</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    )
}