import React, { useState } from 'react'
// import { validateEmail } from '../../../utils/helpers';

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    function handleInputChange(e){
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email'){
            setEmail(inputValue)
        }else if(inputType === 'message'){
            setMessage(inputValue)
        }else{
            setName(inputValue)
        };
    };

    function handleFormSubmit (e){
        e.preventDefault()
        // if (!validateEmail(email)){
        //     setErrorMessage('Email is invalid')
        // }
        alert('Request Submitted')
        setEmail('')
        setMessage('')
        setName('')
    }

    return(
        <div className='container mt-5 contact'>
            <h2 className='mb-3'>Contact Me!</h2>
            <form className="form">
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                        Name
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
                        Email
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
                        Message
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
                <button className='btn btn-danger' type='submit' onClick={()=> handleFormSubmit()}>Submit</button>
            </form>
            <div>
                {/* <p className='error-text'>{errorMessage}</p> */}
            </div>
        </div>
    )

}

export default Contact;
