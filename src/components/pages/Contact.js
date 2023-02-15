import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css'

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
        <div>
            <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail}>
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
                <button className='contact-btn' type='submit'>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}