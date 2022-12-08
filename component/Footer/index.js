import React from 'react';

export default function Footer() {
  return (
    <section id="footer" >
        <div className="main-footer">
                <div className="logoinfo" data-aos="fade-up">
                        <h2>Logo</h2>
            
                        <div className="contact-details">
                            <h1>Contact Us</h1>
                            <li>
                                <div className="fa fa-phone"></div><a href="tel:+910000000000">+91 0000000000</a>
                            </li>
                            <li><div className="fa fa-envelope"></div><a href="mailto:@gmail.com">@gmail.com</a></li>
                           
                        </div>
                </div>
             
                <div className="com" data-aos="fade-up">
                    <h1>About</h1>
                 <ul>
               <li> <a href="#" >Home</a></li>
               <li> <a href="#about">About</a></li>
               <li> <a href="#">Projects</a></li>
               <li> <a href="#">Contact</a></li>
            </ul>   
            </div>
            <div className="info" data-aos="fade-up">
                <h1>Social Media</h1>
                <div className="sociallogos">
                    <div className="logobox">
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-youtube-play"></a>
                    </div>
                </div>
            </div>
            </div>
        <footer>&copy; Your Copyright 2021 All Rights Reserved</footer>
    </section>
  );
}