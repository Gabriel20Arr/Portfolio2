import React from 'react'
import styles from "./Experiencia.module.css"

export const Experiencia = () => {
  return ( 
    <div id="exps" className={styles.exp}>
        <h2 className={styles.title}>Experiencia</h2>
        <div className={styles.ContainerExp}>
          <div className={styles.ContainerExpLine}>
              <div className={styles.CExp1}>
                <span className={styles.spanR}></span>
                <span className={styles.titleExp}>Experiencia laboral - Grupo Consiti<span className={styles.date}>Junio, 2024 - Febrero, 2025</span></span>
                - Desarrollo de tabla dinámica con carga de archivos Excel y CSV, filtros, búsquedas,
                enrutamientos, traducion y diseño. Facilitando al usuario la organización y legibilidad de los datos cargados. <br/>
                - Consumo de diferentes apis priorizando optimización y escalabilidad del proyecto.<br/>
                - Me encargue del manejo de errores para una navegación correcta.<br/>
                - Realizacion de documentación y versionamiento de los cambios realizados.<br/>
                - Desarrollo de api rest para encabezados dinámicos divido por categoria.<br/>
                - Implementación de la lógica de negocio para la carga de archivos Excel y CSV.<br/> 
                - Mantenimiento y optimización de bases de datos SQL para mejorar la eficiencia y 
                rendimiento.<br/> 
                - Manejo y análisis de grandes volúmenes de datos.<br/>
                - Tecnologías:<br/> 
                React - JavaScrit - HTML - Redux - Tailwind - Java - SpringBoot - MongoDB - SQL - Hibernete - PL-SQL (Oracle) 
              </div>
              
              <div className={styles.ContainerCarta}>
                <a
                  href="/GabrielArroyo-2025-02-04.pdf "
                  download="Gabriel Arroyo - Carta de Recomendacion Laboral" 
                  className={styles.btnCarta}
                >
                  Carta de Recomendacion Laboral
                </a>
              </div>


              <div className={styles.CExp1}>
                <span className={styles.spanR}></span>
                <span className={styles.titleExp}>Freelancer<span className={styles.date}>Enero, 2021 - Actualidad</span></span>
                - Desarrollo de landing page, Ecommerce, dashboard y aplicaciones Full Stack utilizando: <br/>
                "React - Next.js - JavaScript - Css - HTML - Java -SpringBoot - Express - PostgreSQL - Tailwind - MongoDB -Oracle". <br/>
                - Diseñar interfaces, mantener y optimizar sitios web e interfaces. <br/>
                - Correcciones de Bugs.<br/>
                - Diseño de bases de datos y su implementación. 
              </div>
              <br />
          </div>
        </div>
    </div>
  )
}
