import React from 'react';
import './styles.scss'

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-icon">
      icon 1
      </div>
    <div className="footer-text">
      <p className="p">Endereço da igreja</p>
      <small className="s">Rua João Paulo I, <br/> Rio de Janeiro</small>
    </div>
    <div className="footer-icon">
      icon 2
      </div>
    <div className="footer-text">
      <p className="p">Sobre a igreja</p>
      <small className="s">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</small>
    </div>
    <div className="footer-icon">
      icon 3
      </div>
    <div className="footer-text">
      <p className="p">Entre em contato <br/>conosco</p>
      <small className="s">(55) 32001-3955</small>
    </div>

  </footer>
)

export default Footer;