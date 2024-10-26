import React, { useState, useEffect } from "react";
import styles from "./LocationModal.module.css";
import { DateTime } from "luxon";
import flecha from "/flecha-correcta.png";

const LocationModal = ({ region, city, timezone }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    // Configurar el intervalo para actualizar la hora cada segundo
    const interval = setInterval(() => {
      if (timezone) {
        setLocalTime(DateTime.now().setZone(timezone).toLocaleString(DateTime.TIME_WITH_SECONDS));
      }
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [timezone]);

  // Verificar si los datos necesarios están disponibles
  const isDataReady = region && city && timezone;

  return (
    <div className={isMinimized ? styles.modalMinimized : styles.modal}>
      <div className={styles.modalHeader}>

        {!isMinimized && <strong>Visitante de:</strong>}
        <button onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? (
            <img className={styles.felcha1} src={flecha} />
          ) : (
            <img className={styles.felcha2} src={flecha} />
          )}
        </button>
      </div>
      {!isMinimized && (
        <div className={styles.modalContent}>
          {!isDataReady ? (
            <div className={styles.loader}></div> // Mostrar el loader si los datos no están listos
          ) : (
            <>
              <p>{region}, {city}</p>
              <p><strong>Hora Local:</strong> {localTime}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationModal;
