import React, { useRef } from 'react';
import { Link } from "react-router-dom"
import styles from "./Contact.module.css";

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import imgGithub from "/contact/github-contact.png"
import imgInstagram from "/contact/instagram-contact.png"
import imgLinkedin from "/contact/linkedin-contact.png"
import imgUser from "/contact/user-contact.webp"
import imgEmail from "/contact/email-contact.webp"
import imgDescription from "/contact/description-contact.webp"


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Realizar validaciones
    if (!name || !email || !message) {
      Swal.fire({
        title: 'Alerta!',
        text: 'Completar todos los campos',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      return;
    }

    // Validar el formato del correo electrónico usando una expresión regular simple
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
            title: 'Alerta!',
            text: 'Por favor, ingresa un correo electrónico válido',
            icon: 'warning',
            position: 'center',
            confirmButtonText: 'Ok'
          })
      return;
    }

    // Si todas las validaciones pasan, enviar el formulario
    emailjs
      .sendForm('service_hg0hxay', 'template_b0jujif', form.current, '1LZEauZPTMLf39Fyv')
      .then(
        (result) => {
          console.log(result.text);
          
          Swal.fire({
            title: 'Exito',
            text: 'Enviado con exito',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contacto' className={styles.contact}>
        <span className={styles.TittleContacto}>Contacto</span>
        <div className={styles.contact1}>
          <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
            <div className={styles.ContainerInputs}>
              <img src={imgUser} alt='' className={styles.imgInp}/>
              <label className={styles.Labels}>Nombre</label>
              <input type="text" name="user_name"  placeholder='nombre' className={styles.inputs}/>
            </div>

            <div className={styles.ContainerInputs}>
              <label className={styles.Labels}>Email</label>
              <img src={imgEmail} alt='' className={styles.imgInp}/>
              <input type="text" name="email"  placeholder='email' className={styles.inputs}>
              </input>
            </div>

            <div className={styles.ContainerInputs}>
              <label className={styles.Labels}>Mensaje</label>
              <img src={imgDescription} alt='' className={styles.imgTex}/>
              <textarea name="message" placeholder='mensaje' className={styles.textareas}>
              </textarea> 
            </div>
            <button type="submit" value="Send" className={styles.btn}>Enviar</button>
          </form>
          <div className={styles.imgContact}>
            <Link to={"https://www.linkedin.com/in/2002-gabriel-arroyo/"}>
              <div className={styles.container}>
                <img src={imgLinkedin} alt='' className={styles.imgC1}/>
                <span className={styles.nameLogo}>Linkedin</span>
              </div>
            </Link>
            <Link to={"https://github.com/Gabriel20Arr"}>
              <div className={styles.container}>
                <img src={imgGithub} alt='' className={styles.imgC2}/>
                <span className={styles.nameLogo}>Github</span>
              </div>
            </Link>
            <Link to={"https://www.instagram.com/gabrielarroyo?igsh=MTFkemV6bnY2OXAyNQ%3D%3D&utm_source=qr"}>
              <div className={styles.container}>
                <img src={imgInstagram} alt='' className={styles.imgC3}/>
                <span className={styles.nameLogo}>Instagram</span>
              </div>  
            </Link>
          </div>
        </div>
    </div>
  );
}