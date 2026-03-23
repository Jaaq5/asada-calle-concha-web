import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import styles from "./Contacto.module.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Contacto() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.sectionSubtitle}>
            Estamos para servirte. Contáctanos por cualquiera de nuestros
            canales
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={`${styles.iconWrapper} ${styles.iconBlue}`}>
                <MapPin size={22} />
              </div>
              <div className={styles.infoContent}>
                <h4>Dirección</h4>
                <p>
                  Calle Concha, 200 metros norte de la escuela local,
                  <br />
                  Sarchi, Costa Rica
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={`${styles.iconWrapper} ${styles.iconGreen}`}>
                <Phone size={22} />
              </div>
              <div className={styles.infoContent}>
                <h4>Teléfonos</h4>
                <p>
                  <a href="tel:+50624540300">2454-0300</a> (Oficina)
                  <br />
                  <a href="tel:+50660622347">6062-2347</a> (Oficina)
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={`${styles.iconWrapper} ${styles.iconDeepBlue}`}>
                <Mail size={22} />
              </div>
              <div className={styles.infoContent}>
                <h4>Correo Electrónico</h4>
                <p>
                  <a href="mailto:asadacalleconcha01@yahoo.com">
                    asadacalleconcha01@yahoo.com
                  </a>
                  <br />

                  {/*

                  <a href="mailto:tramites@asadacalleconcha.cr">
                    tramites@asadacalleconcha.cr
                  </a>

                  */}
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={`${styles.iconWrapper} ${styles.iconGreen}`}>
                <Clock size={22} />
              </div>
              <div className={styles.infoContent}>
                <h4>Horario de Atención</h4>
                <div className={styles.scheduleList}>
                  <span>Lunes a Sábado: 8:00 a.m. - 12:00 p.m.</span>
                  {/*
                  <span>Sábados: 8:00 a.m. - 12:00 m.d. (solo trámites)</span>
                  */}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mapSection}>
            <div className={styles.mapWrapper}>
              {/*
              <div className={styles.mapPlaceholder}>
                <MapPin size={48} />
                <span>Mapa de ubicación</span>
              </div>
              */}
              <iframe
                src="https://www.google.com/maps?q=10.0958412,-84.3290026&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Link
              href="https://www.google.com/maps/place/ASADA+Calle+Concha/@10.0958465,-84.3315775,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa059404f607289:0x976982edc8fff9af!8m2!3d10.0958412!4d-84.3290026!16s%2Fg%2F11pypdzlz1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              <Navigation size={18} />
              Cómo llegar
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/50688888888?text=Hola,%20necesito%20información%20sobre%20los%20servicios%20de%20ASADA%20Calle%20Concha"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </section>
  );
}
