import React from 'react';
import styles from "./SobreMi.module.css";

export const SobreMi = () => {
  const imagenes = [
    { src: '/logos-tech-webp/img-new/html.png', name: 'HTML' },
    { src: '/logos-tech-webp/img-new/css.png', name: 'CSS' },
    { src: '/logos-tech-webp/img-new/tailwind.png', name: 'Tailwind' },
    { src: '/logos-tech-webp/img-new/js.png', name: 'JavaScript' },
    { src: '/logos-tech-webp/img-new/react.png', name: 'React' },
    { src: '/logos-tech-webp/img-new/java.png', name: 'Java' },
    { src: '/logos-tech-webp/img-new/spring-boot.png', name: 'Spring Boot' },
    { src: '/logos-tech-webp/img-new/express.png', name: 'Express' },
    { src: '/logos-tech-webp/img-new/node-js.png', name: 'Node.js' },
    { src: '/logos-tech-webp/img-new/mysql.png', name: 'MySQL' },
    { src: '/logos-tech-webp/img-new/postgresql.png', name: 'PostgreSQL' },
    { src: '/logos-tech-webp/img-new/oracle.png', name: 'Oracle' },
    { src: '/logos-tech-webp/img-new/mongodb.png', name: 'MongoDB' },
    { src: '/logos-tech-webp/img-new/npm.png', name: 'npm' },
  ];

  const renderImages = (imageArray) => {
    return imageArray.map((image, index) => (
      <div key={index} className={styles.imageContainer}>
        <img 
          src={image.src} 
          alt={image.name} 
          className={styles.imgCarrusel} 
        />
        <div className={styles.imageName}>{image.name}</div>
      </div>
    ));
  };


  return (
    <div id="sobre-mi" className={styles.containerS}>
      <h1 className={styles.title}>Sobre Mi</h1>
      <p>
        Apasionado por el desarrollo de software y la innovación tecnológica, soy una persona 
        aplicada y comprometida, orientada a obtener resultados de calidad en todo lo que 
        emprendo. Mi enfoque se centra en obtener resultados de calidad y colaborar de manera 
        efectiva en equipos multidisciplinarios.
        <br />
        <br />
        En el <b>frontend</b>, desarrollo interfaces atractivas y receptivas utilizando bibliotecas modernas como React.js y Next.js, junto con prácticas avanzadas de CSS para estilos limpios y mantenibles.
        <br />
        <br />
        En el <b>backend</b>, especializado en Java, Spring Boot, JDBC y bases de datos 
        relacionales y no relacionales. Apasionado por la arquitectura y optimización de sistemas. 
        <br/>
        <br/>
        Además, poseo habilidades sólidas en el <b>despliegue</b> y gestión de aplicaciones en entornos de producción.
        <br/>
        <br/>
        Mi estilo de trabajo se caracteriza por ser <b>empático, responsable</b> y <b> disciplinado</b>. Disfruto colaborando en equipo y he demostrado habilidades de comunicación efectiva y liderazgo en entornos grupales, contribuyendo al éxito de los proyectos en los que participo.
      </p>

      <div className={styles.carouselSlide1}>
        <div className={`${styles.carouselSlide2} ${styles.slide2}`}>
          {renderImages(imagenes)}
          {renderImages(imagenes)}
        </div>
      </div>
    
    </div>
  );
};

