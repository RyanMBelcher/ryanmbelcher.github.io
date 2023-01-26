import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [touched, setTouched] = useState({ name: false, email: false, message: false })

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

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h2>Contact</h2>
            <form>
                <div className='input-container'>
                    <label for='name'> Name </label>
                    <input
                        value={name}
                        name='name'
                        id='name'
                        onBlur={handleOnBlur}
                        // onClick={() => setTouched((prevState) => ({ ...prevState, name: true }))}
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Name'
                    />

                </div>
                <div className='input-container'>
                    <label for='email'> Email </label>
                    <input
                        value={email}
                        name='email'
                        id='email'
                        // onClick={() => setTouched((prevState) => ({ ...prevState, email: true }))}
                        onBlur={handleOnBlur}
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                    />

                </div>
                <div className='input-container'>
                    <label for='message'> Message </label>
                    <textarea
                        value={message}
                        name='message'
                        id='message'
                        // onClick={() => setTouched((prevState) => ({ ...prevState, message: true }))}
                        onBlur={handleOnBlur}
                        onChange={handleInputChange}
                        rows={10}
                        cols={10}
                        placeholder='Message'
                    />
                </div>
                <button className='contact-btn' type='button'>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}