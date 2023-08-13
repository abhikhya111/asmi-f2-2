import React from 'react'
import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                        <div class="single-cta">
                        <i class="bi bi-geo-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>New Delhi, India</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                        <div class="single-cta">
                        <i class="bi bi-telephone-inbound"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+91-987-654-3210</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                        <div class="single-cta">
                        <i class="bi bi-envelope"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>info@mail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src='./asmistudio.svg' className='img-fluid' alt="" /></a>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="bi bi-facebook" alt="Facebook"></i></a>
                                <a href="#"><i class="bi bi-linkedin" alt="Linkedin"></i></a>
                                <a href="#"><i class="bi bi-instagram" alt="Instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                <input type="text" name="" id="" placeholder='Subscribe to Our Newsletter'/>
                                    <button><i class="bi bi-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-lg-left">
                        <div class="copyright-text">
                            <p>&copy; 2023 Asmi Studio. All rights reserved.</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-lg-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer