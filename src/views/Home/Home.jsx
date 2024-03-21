import React from 'react'
import styles from "./Home.module.css" 

import { Navigate } from '../Navigate/Navigate'
import { PrimerPortada } from '../PrimerPortada/PrimerPortada'
import { Experiencia } from "../Experiencia/Experiencia"
import { Proyectos } from '../Proyectos/Proyectos'
import { SobreMi } from '../SobreMi/SobreMi'
import { Contact } from "../Contact/Contact"

export const Home = () => {
  return (
    <div className={styles.containerHome}>
        <header>
          <Navigate />
        </header>

        <PrimerPortada />
        <Experiencia />
        <Proyectos />
        <SobreMi />
        <Contact />
    </div>
  )
}