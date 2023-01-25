import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
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

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h2>Contact</h2>
            <form>
                <input
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                />
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                />
                <input
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Message'
                />
                <button type='button' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}