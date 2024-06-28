import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
  const formRef = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_svkwfot',
        'template_93khqgj',
        formRef.current,
        'xW-fknwNi5pJqpmq5',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To </span>
          <span>Level Up </span>
        </div>
        <div>
          <span>Your Body </span>
          <span className="stroke-text">With Us</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={formRef} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
