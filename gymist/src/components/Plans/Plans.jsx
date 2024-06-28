import React from 'react'
import './Plans.css'
import whitetick from '../../assets/whiteTick.png'
import { plansData } from '../../data/plansdata'
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="program-header" style={{ gap: '2rem' }}>
        <span>Joing US Now</span>
        <span className="stroke-text">Achieve your Goals</span>
        <span>together</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan) => {
          return (
            <div className="plan">
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature) => (
                  <div className="feature">
                    <img src={whitetick} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <span>See more benefits --> </span>
              </div>
              <button className="btn">join now</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans
