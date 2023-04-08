import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';
import SendIcon from '@material-ui/icons/Send';
import '../../styles/Contact.css'
import EmailIcon from '@material-ui/icons/Email';

function Contact(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    const [errorMessage, setErrorMessage] = useState('')


    function handleInputChange(e){
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email'){
            setEmail(inputValue)
        }else if (inputType === 'name'){
            setName(inputValue)
        }else{
            setMessage(inputValue)
        }
    };

    function handleFormSubmit (e){
        e.preventDefault();

        if (!validateEmail(email)){
            setErrorMessage ('Please enter a valid email')
            return
        }else if(!email || !name || !message){
            setErrorMessage ('Please fill out all fields to submit a request')
            return
        }

        alert(`${name}, your request has been submitted!`)

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');

    }

    return(
        <div className='container mt-5 contactForm'>
            <h2 className='mb-3 contactTitle'>Contact Me!</h2>
            <form className="form">
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                    </label>
                    <input
                        className='form-control'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Name'
                        required
                    />                
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>
                    </label>
                    <input
                        className='form-control'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder='Email'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='message'>
                    </label>
                    <textarea
                        className='form-control'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Your Message Here'
                        required
                    />
                </div>
                <button className="submitButton" type="button" onClick={handleFormSubmit}>
                    Submit <SendIcon />
                </button>
            </form>
            <a className='email' href="mailto:analise.giobbi@gmail.com"><EmailIcon /></a>
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
        </div>
    )

}

export default Contact;
