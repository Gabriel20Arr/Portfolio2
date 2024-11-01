import React from 'react'
import styles from "./Experiencia.module.css"

export const Experiencia = () => {
  return ( 
    <div id="exps" className={styles.exp}>
        <h2 className={styles.title}>Experiencia</h2>
        <div className={styles.ContainerExp}>
            <div className={styles.CExp1}>
              <span className={styles.spanR}></span>
              <span className={styles.titleExp}>Freelancer <span className={styles.date}>10 May - Actualidad</span></span>
              Durante mi trayectoria como freelancer, he tenido la oportunidad de trabajar en una variedad de proyectos para clientes. Esto incluye la creación de sitios web completos, donde me encargué del desarrollo del frontend, backend y el despliegue. Por ejemplo, he desarrollado una plataforma de gestión de tareas completamente personalizada, adaptada a las necesidades específicas del cliente.
            </div>
            <br />


            <div className={styles.CExp1}>
              <span className={styles.spanR}></span>
              <span className={styles.titleExp}>Academia<span className={styles.date}>14 feb - 10 Jul</span></span>
              Durante mi tiempo en la academia, he tenido la oportunidad de participar en varios proyectos Full Stack. Uno de los más significativos fue el desarrollo de un Market Place, en el cual colaboré con un equipo de 6 personas. Mi rol abarcó el desarrollo del frontend, backend y la implementación de la plataforma. Además, he tenido la oportunidad de trabajar en dos proyectos adicionales de manera individual, donde me encargué de todas las etapas del proceso, desde el diseño hasta el despliegue de la web.
            </div>
            <br />

            <div className={styles.CExp1}>
              <span className={styles.spanR}></span>
              <span className={styles.titleExp}>Personal <span className={styles.date}>10 jul - Actualidad</span></span>
              Durante mi tiempo libre, me dediqué a desarrollar varios proyectos con el objetivo de seguir aprendiendo. Uno de ellos surgió a partir de una conversación con un reclutador de IT, quien mencionaba tener dificultades para recordar a todos los candidatos. Decidí crear una aplicación web que permitiera almacenar información sobre los candidatos para futuras oportunidades laborales, con la capacidad de filtrarlos según las necesidades específicas de cada puesto.
            </div>
        </div>
    </div>
  )
}
