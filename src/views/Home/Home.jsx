import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

import { Navigate } from "../Navigate/Navigate";
import { PrimerPortada } from "../PrimerPortada/PrimerPortada";
import { Experiencia } from "../Experiencia/Experiencia";
import { Proyectos } from "../Proyectos/Proyectos";
import { SobreMi } from "../SobreMi/SobreMi";
import { Contact } from "../Contact/Contact";

import LocationModal from "../ModalIP/LocationModal";

export const Home = () => {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    // Obtener la IP del usuario
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        // Usar la IP para obtener la ubicación
        fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_API_KEY
          }&ipAddress=${data.ip}`
        )
          .then((response) => response.json())
          .then((locationData) => {
            setRegion(locationData.location.region);
            setCity(locationData.location.city);
            setTimezone(locationData.location.timezone);
          });
      })
      .catch((error) => {
        console.error("Error al obtener la ubicación:", error);
      });
  }, []); // Se ejecuta una sola vez al montar el componen

  return (
    <div className={styles.containerHome}>
      <header>
        <Navigate />
      </header>

      <section className={styles.componentes} id="primer-portada">
        <PrimerPortada />
      </section>

      <section className={styles.componentes} id="exps">
        <Experiencia />
      </section>

      <section className={styles.componentes} id="proyectos">
        <Proyectos />
      </section>

      <section className={styles.componentes} id="sobre-mi">
        <SobreMi />
      </section>

      <section className={styles.componentes} id="contacto">
        <Contact />
      </section>

      <LocationModal region={region} city={city} timezone={timezone} />
    </div>
  );
};
