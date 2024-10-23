import React, { useEffect } from 'react';
import styles from "./PrimerPortada.module.css";
import imgPortada2 from "/img-portadas/img-programer-7.jpg";
import imgGabriel from "/img-portadas/G-A-sinF.png"

export const PrimerPortada = () => {

    useEffect(() => {
        const text = document.querySelector(`.${styles.Texto2}`);
      
        const textLoad = () => {
          let currentStep = 0;
      
          const changeText = () => {
            switch (currentStep) {
              case 0:
                if (text) text.textContent = " Gabriel Arroyo";
                break;
              case 1:
                if (text) text.textContent = " Frontend Developer";
                break;
              case 2:
                if (text) text.textContent = " Backend Developer";
                break;
              default:
                break;
            }
      
            // Avanzar al siguiente paso
            currentStep = (currentStep + 1) % 3; // Reiniciar después de 3 pasos
          };
      
          // Cambiar el texto cada 4 segundos
          const intervalId = setInterval(changeText, 4000);
      
          // Iniciar el primer cambio de texto
          changeText();
      
          // Limpiar el intervalo cuando el componente se desmonte
          return () => clearInterval(intervalId);
        };
      
        textLoad();
      }, []); // Se ejecuta solo una vez
      
  return (
    <div id='home' className={styles.ContenedorHome}>
        <div className={styles.CImg}>
            <img src={imgGabriel} alt='' className={styles.ImgP}/>
        </div>
        <div className={styles.CText}>
        <div className={styles.CText2}>
            <div className={styles.first}>
            <span className={styles.first0}>Hola, bienvenido!!</span>
            <div className={styles.animacionTexto}>
                <span className={styles.Texto1}>Soy</span>
                <span className={`${styles.Texto2} text02`}> </span>
            </div>
            </div>
            <div className={styles.CLogo}>
            <a href="/CV-Gabriel-FullStack.pdf" download="CV-Gabriel-FullStack" className={styles.button53}>Mi CV</a>
            </div>
        </div>
        </div>
    </div>
  );
};
