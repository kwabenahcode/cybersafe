import React from 'react'
import Header from '../../Components/Navbar/Header'
import vidimg from '../../Images/homeImages/imgFive.png'
import imgvid from '../../Images/homeImages/vid-img.png'
import './courses.css'
import { Container } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer'

function Courses() {
  return (
    <div className='div'>
        <Header />
        <div className='courses-main-div'>
            <Container >
            <h3>Current Courses</h3>
            <div className='courses-div-flex'>
                <div className='courses-div'>
                    <img src={vidimg} alt="" />
                    <div>
                    <h4>Introduction to Cybersecurity</h4>
                    <p className='courses-p'>
                        Learn the fundamentals of cybersecurity and protect yourself online. 
                        This beginner-friendly course covers essential topics like recognizing threats, 
                        creating strong passwords, and safe browsing practices.
                    </p>
                    </div>
                </div>
            </div>
            </Container>
        </div>

        <div className='recommended-courses-div'>
            <Container>
                <div>
                    <h2>Recommended Courses</h2>
                    <div className='recommended-flex'>
                        <div className='recommended-card'>
                            <img src={imgvid} alt="" />
                            <div>
                                <h5>Introduction to Cybersecurity</h5>
                                <p className='recommended-p'>Learn the fundamentals of cybersecurity and protect yourself online. 
                                This beginner-friendly course covers essential topics like recognizing threats, 
                                creating strong passwords, and safe browsing practices.
                                </p>
                            </div>
                        </div>

                        <div className='recommended-card'>
                            <img src={imgvid} alt="" />
                            <div>
                                <h5>Introduction to Cybersecurity</h5>
                                <p className='recommended-p'>Learn the fundamentals of cybersecurity and protect yourself online. 
                                This beginner-friendly course covers essential topics like recognizing threats, 
                                creating strong passwords, and safe browsing practices.
                                </p>
                            </div>
                        </div>

                        <div className='recommended-card'>
                            <img src={imgvid} alt="" />
                            <div>
                                <h5>Introduction to Cybersecurity</h5>
                                <p className='recommended-p'>Learn the fundamentals of cybersecurity and protect yourself online. 
                                This beginner-friendly course covers essential topics like recognizing threats, 
                                creating strong passwords, and safe browsing practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <Footer />
    </div>
  )
}

export default Courses