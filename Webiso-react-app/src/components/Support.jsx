import React from 'react'
import '../styles/Support.css'

import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiCoffee } from "react-icons/pi";


function Support() {
  return (
    <>
      <div className='support-section'>
        <div className="support-content">
          <div className="support-maintitle">Get in touch</div>
          <div className="support-title">Need more
            <span className='support-title-gradiant'> Help & Support</span>
            ?
          </div>
        </div>
      </div>
      <div className="support-cardsection">
        <div className="support-card1">
          <div className="support-card1bg">
            <HiOutlineChatBubbleLeftRight className='support-chatIcon' />
          </div>
          <div className="support-card1title">Customer Support</div>
          <div className="support-card1content">Mus quisque non ridiculus sed himenaeos adipiscing consectetur fusce tempus lectus pretium.</div>
          <button className="support-card-button">Chat now</button>
        </div>
        <div className="support-card2">
          <AiOutlineMail className='support-mailIcon' />
          <div className="support-card2title">Ticket Support</div>
          <div className="support-card2content">Mus quisque non ridiculus sed himenaeos adipiscing consectetur fusce tempus lectus pretium.</div>
          <button className="support-card-button2">Send message</button>
        </div>
        <div className="support-card3">
          <div className="support-card3bg">
            <PiCoffee className='support-cupIcon' />
          </div>
          <div className="support-card3title">Free Insight
          </div>
          <div className="support-card3content">Mus quisque non ridiculus sed himenaeos adipiscing consectetur fusce tempus lectus pretium.</div>
          <button className="support-card-button">Read article</button>
        </div>
      </div>
    </>
  )
}

export default Support