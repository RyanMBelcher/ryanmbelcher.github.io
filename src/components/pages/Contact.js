import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log('send email fired');

        try {
            const result = await emailjs.sendForm(
                // service ID
                'service_9sknkth',
                // template ID,
                'template_bmugvlw',
                form.current,
                // public key
                'd2cqSDVz1vZZfUyZ1',
            )
            console.log(result);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'user_name') {
            setName(inputValue);
        } else if (inputType === 'user_email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    };

    const handleOnBlur = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name is required');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Your email is invalid');
            return;
        }

        if (!message) {
            setErrorMessage('Message is required');
            return;
        }
    };

    return (
        <section id='contact'>
            <h2 className='section-header'>Contact</h2>
            <div className='section-wrapper'>
                <form ref={form} onSubmit={sendEmail} id='contact-form' className='form-horizontal'>
                    <div className='input-container'>
                        <label htmlFor='user_name'> Name </label>
                        <input
                            value={name}
                            name='user_name'
                            id='user_name'
                            onBlur={handleOnBlur}
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Name'
                        />

                    </div>
                    <div className='input-container'>
                        <label htmlFor='user_email'> Email </label>
                        <input
                            value={email}
                            name='user_email'
                            id='user_email'
                            onBlur={handleOnBlur}
                            onChange={handleInputChange}
                            type='email'
                            placeholder='Email'
                        />

                    </div>
                    <div className='input-container'>
                        <label htmlFor='message'> Message </label>
                        <textarea
                            value={message}
                            name='message'
                            id='message'
                            onBlur={handleOnBlur}
                            onChange={handleInputChange}
                            rows={10}
                            cols={10}
                            placeholder='Message'
                        />
                    </div>
                    <button className='send-btn' type='submit'>
                        <div className='alt-send-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" /></svg>                            <span className='send-text'>Send</span>
                        </div>
                    </button>
                </form>
                <div className='direct-contact-container'>
                    <ul className='contact-list'>
                        <li className='list-item'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" /></svg>
                            <span className='contact-text place'> Philadelphia, PA</span>
                        </li>
                        <li className='list-item'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" /></svg>
                            <a href='tel:1-304-222-2431'>
                                <span className='contact-text phone'> (304) 222-2431</span>
                            </a>
                        </li>
                        <li className='list-item'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" /></svg>
                            <a href='mailto:ryanmbelcher@gmail.com'>
                                <span className='contact-text gmail'> ryanmbelcher86@gmail.com</span>
                            </a>
                        </li>
                    </ul>


                    <ul className='social-media-list'>
                        <li>
                            <a href='https://github.com/RyanMBelcher' target='_blank' className='contact-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/theryanmbelcher/' target='_blank' className='contact-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/ryanmbelchermba/' target='_blank' className='contact-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    );
}