import React from 'react';

import '../styles/pages/landing.css';
import logImg from '../images/Logo.svg';
import {FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <div id="pages-landing">
        <div className="content-wrapper">
          <img src={logImg} alt="happy"/>
          <main>
            <h1>Leve Felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
            <div className="location">
              <strong>Fortaleza</strong>
              <span>Ceara</span>
            </div>
            <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
            </Link>
        </div>
      </div>
    );
}
export default Landing;