import React from 'react'
import './login.css'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
  return (
    <div>
        <div className='login-main-div'>
            <div className='login-first-div'>
            </div>
            <div className='login-second-div'>
                <Link onClick={()=> navigate(-1)}>
                    <ArrowLeft />
                </Link>
                <div className='form-class'>
                <h2>You are welcome</h2>
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
                        id="email"
                        placeholder="********"
                        />
                    </Form>

                    <div>
                        <Link to='/'>
                            <Button className='sign_btn'>Sign in</Button>
                        </Link>
                    </div>
                    <label>Don't have an account? <Link to='/signup'>Sign up</Link></label>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Login