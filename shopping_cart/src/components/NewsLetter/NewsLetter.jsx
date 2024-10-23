import React from 'react';
import './newsletter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive Offers on your Email</h1>
      <p>Subscribe to our newletter and stay updated</p> 
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter;
