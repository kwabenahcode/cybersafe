import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './signup.css'

function SignUp() {
    const navigate = useNavigate()
  return (
    <div>
        <div className='login-main-div'>
            <div className='login-first-div'>
            </div>
            <div className='login-second-div'>
                <Link onClick={() => navigate(-1)}>
                    <ArrowLeft />
                </Link>
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
                        <label className="login__form__label">Password</label>
                        <br />
                        <input
                        type="email"
                        className="login__input"
                        id="password"
                        placeholder="********"
                        />
                    </Form>

                    <Form>
                        <label className="login__form__label">Confirm Password</label>
                        <br />
                        <input
                        type="email"
                        className="login__input"
                        id="Confirmpassword"
                        placeholder="********"
                        />
                    </Form>

                    <div>
                        <Link to='/'>
                            <Button className='sign_btn'>Sign up</Button>
                        </Link>
                    </div>
                    <label>You have an account already?<Link to='/login'>Sign in</Link></label>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default SignUp