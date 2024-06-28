import React from 'react'
import './Hero.css'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition = { type: 'tween', duration: '2' }
  const mobile = window.innerWidth <= 1080 ? true : false
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '138px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={transition}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* the hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Transform Your Body, Unleash Your Potential!Join Our Gym and Be a
              Part of a Thriving Fitness Community!
            </span>
          </div>
        </div>
        {/*  figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={100} start={50} delay="4" preFix="+" />
            </span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={210} start={150} delay="4" preFix="+" />
            </span>
            <span>Member joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={47} start={25} delay="4" preFix="+" />
            </span>
            <span>Fitness Courses</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
        >
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>110 bpm</span>
        </motion.div>
        <img src={hero_img} alt="" className="hero-image" />
        <motion.img
          src={hero_img_back}
          alt=""
          className="hero-image-back"
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
        />
        {/* calories */}
        <motion.div
          className="calories"
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
        >
          <img src={calories} />
          <div>
            <span>Calories Burned</span>
            <span>200 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
