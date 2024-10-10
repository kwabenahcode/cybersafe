import React, { useState } from 'react'
import './login.css'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    
    // State to hold email, password, and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setErrorMessage(''); // Clear previous error messages

        try {
            const response = await fetch('http://localhost:8000/api/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: email,  // Use the field that your backend expects
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Assuming you get tokens in the response (adjust according to your API)
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);

                // Navigate to the homepage or another page after login
                navigate('/');
            } else {
                // Display error message from the backend
                setErrorMessage(data.detail || 'Login failed. Please try again.');
            }
        } catch (error) {
            // Handle any network or other errors
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div>
            <div className='login-main-div'>
                <div className='login-first-div'></div>
                <div className='login-second-div'>
                    <Link onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </Link>
                    <div className='form-class'>
                        <h2>You are welcome</h2>

                        {/* Show error message if login fails */}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                        <Form onSubmit={handleSubmit}>
                            <label className="login__form__label">Email</label>
                            <br />
                            <input
                                type="email"
                                className="login__input"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <br />
                            <label className="login__form__label">Password</label>
                            <br />
                            <input
                                type="password"
                                className="login__input"
                                id="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />
                            <Button type="submit" className='sign_btn'>Sign in</Button>
                        </Form>

                        <label>Don't have an account? <Link to='/signup'>Sign up</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;