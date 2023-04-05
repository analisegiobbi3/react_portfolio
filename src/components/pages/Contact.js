import React, { useState } from 'react'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        alert('Request Submitted')
        setEmail('')
        setMessage('')
        setName('')
    }

    return(
        <div>
            <p>Feel Free to Reach Out!</p>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Name'
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder='Email'
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Your Message Here'
                />
                <button type="button" onClick={()=> handleFormSubmit()}>Submit</button>
            </form>
        </div>
    )

}

export default Contact;