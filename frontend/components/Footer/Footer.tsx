import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Trámites", href: "/tramites" },
  { label: "Transparencia", href: "/transparencia" },
];

const serviceLinks = [
  { label: "Consultar Factura", href: "/factura" },
  { label: "Solicitar Servicio", href: "/solicitar" },
  { label: "Reportar Avería", href: "/reportar" },
  { label: "Formularios", href: "/formularios" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo-no-bg.png"
                alt="Logo ASADA Calle Concha"
                width={50}
                height={50}
                className={styles.logoImage}
              />
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>ASADA Calle Concha</span>
                <span className={styles.logoSlogan}>
                  Agua potable para nuestra comunidad
                </span>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Comprometidos con brindar agua potable de calidad y un servicio
              eficiente a toda la comunidad de Calle Concha.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Enlaces</h4>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.columnLink}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Servicios</h4>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.columnLink}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contacto</h4>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span>Calle Concha, Guanacaste, Costa Rica</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <span>+506 2222-2222</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <span>info@asadacalleconcha.cr</span>
            </div>
            <div className={styles.contactItem}>
              <Clock size={16} className={styles.contactIcon} />
              <span>Lunes a Viernes: 8:00 a.m. - 4:00 p.m.</span>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ASADA Calle Concha. Todos los derechos
            reservados.
          </p>
          <div className={styles.legal}>
            <Link href="/privacidad" className={styles.legalLink}>
              Política de Privacidad
            </Link>
            <Link href="/terminos" className={styles.legalLink}>
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
