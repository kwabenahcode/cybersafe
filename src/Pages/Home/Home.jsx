import React from 'react'
import { Button, Card, CardBody, CardTitle, Container } from 'react-bootstrap'
import './home.css'
import firstImg from '../../Images/homeImages/firstImg.jpeg'
import Frame11 from '../../Images/homeImages/Frame 11.png'
import padlock from '../../Images/homeImages/padlock.png'
import load from '../../Images/homeImages/load.png'
import warning from '../../Images/homeImages/excli.png'

function Home() {
  return (
    <div>
        <Container className='home-first-session-main-div'>
            <div className='home-fist-session'>
                <h2>Comprehensive Cybersecurity Guidance for Everyone"</h2>
                <p className='first-session-p'>
                In an increasingly connected world, protecting your personal information online 
                is crucial. CyberSafe Hub provides 
                you with the essential knowledge, tools, and resources to safeguard your digital life.
                </p>
                <Button className='getStarted_btn'>Get Started</Button>
            </div>
            <div className='first-img-div'>
                <img src={firstImg} alt="" className='first-img-div'/>
            </div>
        </Container>


        <div className='second-section-main-div'>
            <Container className='second-section-container'>
                <div className='second-image-div'>
                    <img src={Frame11} alt="" className='second-image'/>
                </div>
                <div>
                    <div className='home-second-section'>
                        <h2>Discover Your Cybersecurity Strengths and Weaknesses</h2>
                        <p className='second-session-p'>
                        How safe are you online? Find out with our quick and easy Personal Risk 
                        Assessment. In just a few minutes, you'll receive a clear overview of your 
                        cybersecurity strengths and areas for improvement, along with tailored tips to boost your online safety.
                        </p>
                        <Button className='risk_btn'>Risk Assesment</Button>
                    </div>
                </div>
            </Container>
        </div>


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
                                </div>
                        </div>
                    </div>
                </Container>
                
            <div className='section-four-div'> 
                <Container>
                    <h2>Featured Courses</h2>
                    <p>Explore our most popular courses designed to improve your <br />cybersecurity skills. 
                        Start learning today and protect your digital life.
                    </p>
                    <div>

                    </div>
                </Container>
            </div> 
        
    </div>
  )
}

export default Home