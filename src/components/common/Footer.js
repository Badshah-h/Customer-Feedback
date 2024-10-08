// Footer.js
import React, {useEffect, useRef} from 'react';
import logo from '../../assets/images/New Project (2).png';

const Footer = () => {

    const socialLinksRef = useRef(null);

    useEffect(() => {
        if (socialLinksRef.current) {
            const socialLinks = socialLinksRef.current.querySelectorAll('.social-link');

            socialLinks.forEach((link) => {
                link.addEventListener('mouseover', () => {
                    link.style.transform = 'scale(1.1)';
                    link.style.color = '#ccc';
                });

                link.addEventListener('mouseout', () => {
                    link.style.transform = 'scale(1)';
                    link.style.color = '#000000';
                });
            });
        }
    }, []);
    return (
            <div className="footer px-4 flex flex-col sm:flex-row justify-between py-6 px-8 mt-10 rounded-lg">
                <div className="footer-column mb-4 sm:mb-0">
                    <img
                        src={logo}
                        alt="Al Yalayis Logo"
                        className="max-w-[200px] mb-4"
                    />
                    <p className="text-sm text-gray-400">
                        Copyright 2023 Al Yalayis. All rights reserved.
                    </p>
                </div>
                <div className="footer-column mb-4 sm:mb-0 text-center sm:text-left">
                    <div className="contact-info space-y-2">
                        <div>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            <span>DIP2, Dubai, UAE</span>
                        </div>
                        <div>
                            <i className="fas fa-phone-alt mr-2"></i>
                            <a href="tel:+97142223333">+971 4 222 3333</a>
                        </div>
                        <div>
                            <i className="fas fa-envelope mr-2"></i>
                            <a href="mailto:info@yalayis.com">info@yalayis.com</a>
                        </div>
                        <div>
                            <i className="fas fa-globe mr-2"></i>
                            <a
                                href="https://alyalayis.com/nw/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://alyalayis.com/nw/
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-column mb-4 sm:mb-0 text-center sm:text-left">
                    <div className="about mb-10">
                        <strong>About Al Yalayis</strong>
                        <p>Al Yalayis Government Transaction Center provides a comprehensive range of government
                            services under one roof, making it easier for citizens to access the services they need.</p>
                    </div>
                        <div className="social-icons mt-10" ref={socialLinksRef}>
                            <a
                                href="https://www.facebook.com/alyalayis/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://twitter.com/alyalayis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/alyalayis/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/alyalayis/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                </div>
            </div>

    );
};

export default Footer;