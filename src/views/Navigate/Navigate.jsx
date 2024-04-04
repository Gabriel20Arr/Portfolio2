import React, { useState } from 'react';

import styles from "./Navigate.module.css"
import imgMenu from "/menu.png"
import imgMenu2 from "/simbolo-x.png"


export const Navigate = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (sectionId, offset) => {
      const element = document.getElementById(sectionId);
      if (element) {
          const scrollPosition = element.offsetTop - offset;
          window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
          });
      }
      // Ocultar el menú después de hacer clic en un enlace
      setShowMenu(false);
  };

const toggleMenu = () => {
    setShowMenu(!showMenu);
};


  return (
    <div className={styles.Cnav}>
      <div className={styles.navbar}>
        <span className={styles.logo} onClick={() => handleScroll('home', 60)}>
          &lt; Portafolio /&gt;
        </span>

        {/* Menú de navegación */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <button className={styles.navItem2} onClick={() => handleScroll('home', 60)}>Inicio</button>
          </li>

          <li className={styles.navItem}>
            <button onClick={() => handleScroll('exp', 60)}>Experiencias</button>
          </li>

          <li className={styles.navItem}>
            <button onClick={() => handleScroll('proyectos', 60)}>Proyectos</button>
          </li>

          <li className={styles.navItem}>
            <button onClick={() => handleScroll('sobre-mi', 60)}>Sobre Mi</button>
          </li>

          <li className={styles.navItemEnd}>
            <button onClick={() => handleScroll('contacto', 60)}>Contacto</button>
          </li>
        </ul>


        {/* Menu desplegable */}
        <img  src={!showMenu ? imgMenu : imgMenu2} alt='' className={styles.imgMenu} onClick={toggleMenu}/> 
          
        { showMenu ? 
        <div className={styles.navLinks2}>
            <span className={styles.navItem2}>
              <button className={styles.navItem22} onClick={() => handleScroll('home', 60)}>Inicio</button>
            </span>

            <span className={styles.navItem2}>
              <button className={styles.navItem22} onClick={() => handleScroll('exp', 60)}>Experiencias</button>
            </span>

            <span className={styles.navItem2}>
              <button className={styles.navItem22} onClick={() => handleScroll('proyectos', 60)}>Proyectos</button>
            </span>

            <span className={styles.navItem2}>
              <button className={styles.navItem22} onClick={() => handleScroll('sobre-mi', 60)}>Sobre Mi</button>
            </span>

            <span className={styles.navItemEnd2}>
              <button className={styles.navItem22} onClick={() => handleScroll('contacto', 60)}>Contacto</button>
            </span>
        </div> 

          : 

        <div className={styles.navLinks3}>
              <span className={styles.navItem2}>
                <button className={styles.navItem22} onClick={() => handleScroll('home', 60)}>Inicio</button>
              </span>

              <span className={styles.navItem2}>
                <button className={styles.navItem22} onClick={() => handleScroll('exp', 60)}>Experiencias</button>
              </span>

              <span className={styles.navItem2}>
                <button className={styles.navItem22} onClick={() => handleScroll('proyectos', 60)}>Proyectos</button>
              </span>
              
              <span className={styles.navItem2}>
                <button className={styles.navItem22} onClick={() => handleScroll('sobre-mi', 60)}>Sobre Mi</button>
              </span>

              <span className={styles.navItemEnd2}>
                <button className={styles.navItem22} onClick={() => handleScroll('contacto', 60)}>Contacto</button>
              </span>
        </div> 
        
        }
        
      </div>
    </div>
  );
}