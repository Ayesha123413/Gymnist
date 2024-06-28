import React, { useState } from 'react'
import './Header.css'
import bars from '../../assets/bars.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  const mobile = window.innerWidth <= 786 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            background: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
          onClick={() => {
            setMenuOpened(true)
          }}
        >
          <img
            src={bars}
            alt=""
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <a
              onClick={() => {
                setMenuOpened(false)
              }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenuOpened(false)
              }}
              href="#programs"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenuOpened(false)
              }}
              href="#reasons"
            >
              Reasons
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenuOpened(false)
              }}
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenuOpened(false)
              }}
              href="#join-us"
            >
              Join Us
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
