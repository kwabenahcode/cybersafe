import React from 'react'
import { Button, Card, CardBody, CardTitle, Container } from 'react-bootstrap'
import Header from '../../Components/Navbar/Header'
import padlock from '../../Images/homeImages/padlock.png'
import load from '../../Images/homeImages/load.png'
import warning from '../../Images/homeImages/excli.png'
import Footer from '../../Components/Footer/Footer'

function Tips() {
  return (
    <div>
        <Header />
        <Container className='section-three-container'>
                <h2>Quick Tip for Staying Safe Online</h2>
                <p>
                    Explore our most popular courses designed to improve your cybersecurity skills. <br /> 
                    Start learning today and protect your digital life.
                </p>
                <div className='section-three-cards'>
                        <div>
                                <div className='div-flex'>
                                    <div className='card-flex'>
                                        <div>
                                            <img src={padlock} alt="" className='padlock-img'/>
                                        </div>
                                        <div>
                                        <div className='card-title'>Always Use Strong Password</div>
                                            <div className='card-body'>
                                                Always use strong, unique passwords for each of your accounts. 
                                                Avoid using easily guessable information like your name or birthdate. 
                                                Instead, create complex passwords with a mix of letters, numbers, 
                                                and special characters.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='card-flex'>
                                        <div>
                                            <img src={load} alt="" className='padlock-img'/>
                                        </div>
                                        <div>
                                        <div className='card-title'>Update Software Regularly</div>
                                            <div className='card-body'>
                                            Keep your software, including operating systems and applications, up to date. 
                                            Regular updates patch security vulnerabilities and protect you from new threats.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='card-flex'>
                                        <div>
                                            <img src={warning} alt="" className='padlock-img'/>
                                        </div>
                                        <div>
                                        <div className='card-title'>Be Wary of Phishing Emails</div>
                                            <div className='card-body'>
                                            Keep your software, including operating systems and applications, up to date. 
                                            Regular updates patch security vulnerabilities and protect you from new threats.
                                            </div>
                                        </div>
                                    </div>
                                        

                                    <div className='card-flex'>
                                        <div>
                                            <img src={padlock} alt="" className='padlock-img'/>
                                        </div>
                                            <div>
                                            <div className='card-title'>Enable Two-Factor Authentication (2FA)</div>
                                                <div className='card-body'>
                                                Enhance your account security by enabling two-factor authentication wherever possible. 
                                                This adds an extra layer of protection by requiring a second form of 
                                                verification in addition to your password.
                                                </div>
                                            </div>
                                    </div>

                                    <div className='card-flex'>
                                        <div>
                                            <img src={padlock} alt="" className='padlock-img'/>
                                        </div>
                                            <div>
                                            <div className='card-title'>Enable Two-Factor Authentication (2FA)</div>
                                                <div className='card-body'>
                                                Enhance your account security by enabling two-factor authentication wherever possible. 
                                                This adds an extra layer of protection by requiring a second form of 
                                                verification in addition to your password.
                                                </div>
                                            </div>
                                    </div>

                                    <div className='card-flex'>
                                        <div>
                                            <img src={padlock} alt="" className='padlock-img'/>
                                        </div>
                                            <div>
                                            <div className='card-title'>Enable Two-Factor Authentication (2FA)</div>
                                                <div className='card-body'>
                                                Enhance your account security by enabling two-factor authentication wherever possible. 
                                                This adds an extra layer of protection by requiring a second form of 
                                                verification in addition to your password.
                                                </div>
                                            </div>
                                    </div>
                                </div>

                                <div className='card-flex'>
                                        <div>
                                            <img src={padlock} alt="" className='padlock-img'/>
                                        </div>
                                            <div>
                                            <div className='card-title'>Enable Two-Factor Authentication (2FA)</div>
                                                <div className='card-body'>
                                                Enhance your account security by enabling two-factor authentication wherever possible. 
                                                This adds an extra layer of protection by requiring a second form of 
                                                verification in addition to your password.
                                                </div>
                                            </div>
                                    </div>
                        </div>
                    </div>
                </Container>

     <Footer />          
    </div>
  )
}

export default Tips