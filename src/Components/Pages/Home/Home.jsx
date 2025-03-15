import React from "react"
import {Header} from "../../Layouts/Header/Header"
import "./Home.css"

export const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-section">
        <img 
          src="/perfil.jpg" 
          alt="Foto de perfil con uniforme del SENA" 
          className="profile-image"
        />
      </div>
      <div className="description-section">
        <h1 className="title">Hola, soy Diego Alejandro Giraldo.</h1>
        <p className="description">
          Soy desarrollador frontend de 18 años y soy aprendiz del Sena y mi objetivo es salir adelante para perseguir mi verdadero sueño.
        </p>
        
        <div className="skills-section">
          <h2 className="skills-title">Especializaciones</h2>
          <div className="skills-list">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="contact-title">Contacto</h2>
          <a href="mailto:hffjdkksfk835@gmail.com" className="email-link">
            hffjdkksfk835@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}