import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Khushpreet Kaur (ਖੁਸ਼ਪ੍ਰੀਤ ਕੌਰ)</h2>
        <p><a href="mailto:khushpreetk363@gmail.com">khushpreetk363@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Khushpreet. I like building things.
        I am a postgraduate from <a href="https://puchd.ac.in/">Panjab University, Chandigarh</a>, and
        current working in <a href="https://www.sony.co.in/">Sony India Software Centre </a> as a Technical Lead. 
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Khushpreet&apos;Kaur.</p>
    </section>
  </section>
);

export default SideBar;
