import React from 'react';

export default function Footer() {
  return (
    <section id="footer" >
        <div class="main-footer">
                <div class="logoinfo" data-aos="fade-up">
                        <h2>Logo</h2>
            
                        <div class="contact-details">
                            <h1>Contact Us</h1>
                            <li>
                                <div class="fa fa-phone"></div><a href="tel:+910000000000">+91 0000000000</a>
                            </li>
                            <li><div class="fa fa-envelope"></div><a href="mailto:@gmail.com">@gmail.com</a></li>
                           
                        </div>
                </div>
             
                <div class="com" data-aos="fade-up">
                    <h1>About</h1>
                 <ul>
               <li> <a href="#" >Home</a></li>
               <li> <a href="#about">About</a></li>
               <li> <a href="#">Projects</a></li>
               <li> <a href="#">Contact</a></li>
            </ul>   
            </div>
            <div class="info" data-aos="fade-up">
                <h1>Social Media</h1>
                <div class="sociallogos">
                    <div class="logobox">
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-youtube-play"></a>
                    </div>
                </div>
            </div>
            </div>
        <footer>&copy; Your Copyright 2021 All Rights Reserved</footer>
    </section>
  );
}