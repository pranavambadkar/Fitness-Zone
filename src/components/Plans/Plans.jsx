import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import { Link } from 'react-scroll';

const Plans = () => {
    return (
        <div className="plans-container" id='membership'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            
            <div className="programs-header">
                <span>MEMBERSHIP TODAY,</span>
                <span className='stroke-text'>PROGRESS TOMORROW</span>
            </div>

            {/* Plans Card */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>&#8377; {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See More Benefits -></span>
                        </div>
                        <button className="btn j-btn"><Link
                            to='join-us'
                            span={true}
                            smooth={true}
                        >Join Now</Link></button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plans;