import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

/* Animations */
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
import { Link } from 'react-scroll';

const Hero = () => {

    const transition = {type: 'spring', duration: 3};
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>

                <div className="slogan">
                    <motion.div 
                    initial={{left: mobile? '160px': '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}} 
                    ></motion.div>
                    <span>The Best Fitness Center in the City</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>At Fitness Zone, we believe in the transformative power of fitness to enhance lives.</span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={130} start={90} delay='4' preFix='+' />
                        </span>
                        <span>Expert Trainers</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={984} start={800} delay='4' preFix='+' />
                        </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={60} start={0} delay='4' preFix='+' /> 
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <buttons className="btn"><Link
                        to='join-us'
                        span={true}
                        smooth={true}
                    >Get Started</Link></buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>

            </div>
            <div className="right-h">
                <button className="btn"><Link
                    to='join-us'
                    span={true}
                    smooth={true}
                >Join Now</Link></button>

                <motion.div
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>112 bpm</span>
                </motion.div>

                {/* Hero image */}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className='hero-image-back'/>
            
                {/* Calories Card */}
                <motion.div
                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Bured</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero