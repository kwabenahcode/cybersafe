import React from 'react'
import './login.css'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className='login-main-div'>
            <div className='login-first-div'>
            </div>
            <div className='login-second-div'>
                <div className='form-class'>
                <h2>Let's get started</h2>
                    <Form>
                        <label className="login__form__label">Email</label>
                        <br />
                        <input
                        type="email"
                        className="login__input"
                        id="email"
                        placeholder="name@example.com"
                        />
                    </Form>

                    <Form>
                        <label className="login__form__label">Email</label>
                        <br />
                        <input
                        type="email"
                        className="login__input"
                        id="email"
                        placeholder="********"
                        />
                    </Form>

                    <div>
                        <Link to='/'>
                            <Button className='sign_btn'>Sign in</Button>
                        </Link>
                    </div>
                    <label>You don't have an account? <Link to='/'>Sign up</Link></label>
                    
                    
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Login