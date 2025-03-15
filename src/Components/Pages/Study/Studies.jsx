import React from 'react'
import './Studies.css'

export const Studies = () => {
  return (
    <div className="studies-container">
      <h1 className="studies-title">Formación Académica</h1>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <span className="date">2025 - Presente</span>
            <h3 className="institution">SENA</h3>
            <p className="degree">Tecnólogo en Programación de Software</p>
            <p className="status">En curso</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="date">2023</span>
            <h3 className="institution">SENA</h3>
            <p className="degree">Técnico en Programación de Software</p>
            <p className="status">Graduado</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="date">2023</span>
            <h3 className="institution">Colegio Jesús Maestro</h3>
            <p className="degree">Bachiller Académico</p>
            <p className="location">Montenegro, Quindío</p>
          </div>
        </div>
      </div>
    </div>
  )
}