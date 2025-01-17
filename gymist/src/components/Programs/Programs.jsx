import React from 'react'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import { programsData } from '../../data/programdata'
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="program-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => {
          return (
            <div className="category">
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Programs
