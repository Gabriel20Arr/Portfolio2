import React from 'react'
import styles from "./Experiencia.module.css"

export const Experiencia = () => {
  return (
    <div id="exp" className={styles.exp}>
        <h2>EXPERIENCIAS</h2>
        <div className={styles.ContainerExp}>
            <div className={styles.CExp1}>
              <span className={styles.spanR}></span>
              <span className={styles.titleExp}>Freelancer <span className={styles.date}>03 Oct - 02 Nov</span></span>
              un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
              Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
            </div>

            <div className={styles.CExp1}>
              <span className={styles.spanR}></span>
              <span className={styles.titleExp}>Henrry Academia <span className={styles.date}>03 Oct - 02 Nov</span></span>
              un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
              Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
            </div>

            <div className={styles.CExp1}>
              <span className={styles.spanR}></span>
              <span className={styles.titleExp}>Freelancer <span className={styles.date}>03 Oct - 02 Nov</span></span>
              un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
              Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
            </div>
        </div>
    </div>
  )
}
