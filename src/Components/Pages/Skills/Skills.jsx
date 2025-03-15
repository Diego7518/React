import React from 'react'
import './Skills.css'

export const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Mis Habilidades</h1>

      <div className="skills-grid">
        {/* Habilidades Sociales */}
        <div className="skill-category">
          <h2 className="category-title">
            <i className="fas fa-users"></i> Habilidades Sociales
          </h2>
          <div className="skill-items">
            <div className="skill-item">
              <span className="skill-name">Trabajo en Equipo</span>
              <div className="skill-bar" style={{"--percent": "90%"}}></div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Honestidad</span>
              <div className="skill-bar" style={{"--percent": "95%"}}></div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Responsabilidad</span>
              <div className="skill-bar" style={{"--percent": "90%"}}></div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Puntualidad</span>
              <div className="skill-bar" style={{"--percent": "95%"}}></div>
            </div>
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <div className="skill-category">
          <h2 className="category-title">
            <i className="fas fa-code"></i> Habilidades Técnicas
          </h2>
          <div className="skill-items">
            <div className="skill-item">
              <span className="skill-name">HTML</span>
              <div className="skill-bar" style={{"--percent": "85%"}}></div>
            </div>
            <div className="skill-item">
              <span className="skill-name">CSS</span>
              <div className="skill-bar" style={{"--percent": "80%"}}></div>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript</span>
              <div className="skill-bar" style={{"--percent": "75%"}}></div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Git</span>
              <div className="skill-bar" style={{"--percent": "70%"}}></div>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="skill-category">
          <h2 className="category-title">
            <i className="fas fa-language"></i> Idiomas
          </h2>
          <div className="language-section">
            <div className="language-item">
              <span className="language-name">Inglés</span>
              <span className="language-level">B1</span>
              <p className="language-description">Nivel intermedio con capacidad de comunicación efectiva</p>
            </div>
          </div>
        </div>

        <div className="skill-category experience-section">
          <h2 className="category-title">
            <i className="fas fa-briefcase"></i> Experiencia Laboral
          </h2>
          <div className="experience-content">
            <div className="status-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="status-title">Iniciando mi Carrera Profesional</h3>
            <p className="status-description">
              Actualmente me encuentro en búsqueda de mi primera experiencia laboral 
              en el campo del desarrollo de software.
            </p>
            <div className="ready-badge">
              <i className="fas fa-check-circle"></i>
              Listo para nuevos retos
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}