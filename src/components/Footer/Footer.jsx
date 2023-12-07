import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="footer-l">
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
                <div className="text">
                    <p>At Fitness Zone, we believe in the transformative power of fitness to enhance lives, savor-worthy healthy meals, seamless mental fitness through yoga, and hassle-free lifestyle care.</p>
                </div>
            </div>

            <div className="footer-c">
                <div className="company">
                    <h4>Company</h4>
                    <div className='menu-list'>
                        <li><Link
                            activeClass='active'
                            to='home'
                            span={true}
                            smooth={true}
                        >Home</Link></li>
                        <li><Link
                            to='programs'
                            span={true}
                            smooth={true}
                        >Programs</Link></li>
                        <li><Link
                            to='reasons'
                            span={true}
                            smooth={true}
                        >Why Us</Link></li>
                        <li><Link
                            to='membership'
                            span={true}
                            smooth={true}
                        >Plans</Link></li>
                        <li><Link
                            to='testimonials'
                            span={true}
                            smooth={true}
                        >About Us</Link></li>
                    </div>
                </div>
                
                <div className="support">
                    <h4>Support</h4>
                    <div className='menu-list'>
                        <li><Link
                            to='join-us'
                            span={true}
                            smooth={true}
                        >FAQ</Link></li>
                        <li>Policy</li>
                        <li>Careers</li>
                        <li>Business</li>
                    </div>
                </div>   
            </div>

            <div className="footer-r">
                <h4>Follow Us</h4>
                <a href='https://github.com/pranavambadkar'><img src={Github} alt="" /></a>
                <a href='https://www.linkedin.com/in/pranav-ambadkar-25298520a/'><img src={Linkedin} alt="" /></a>
                <a href='https://www.instagram.com/pranav__232/?igshid=ZDc4ODBmNjlmNQ%3D%3D'><img src={Instagram} alt="" /></a>

                <hr />
                <div className="copyright">
                    <p>&copy; 2023 Fitness Zone. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;