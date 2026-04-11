import Link from "next/link";
import { FileText, PlusCircle, Download, AlertTriangle, Phone, PhoneCallIcon, Smartphone } from "lucide-react";
import styles from "./QuickAccess.module.css";

const quickAccessItems = [
  {
    icon: FileText,
    title: "Consultar Recibo",
    href: "https://acueductoscr.com/Recibos?provincia=2&idacueducto=254",
    color: "blue" as const,
  },
  {
    icon: Download,
    title: "Descargar Certificación de Disponibilidad Hídrica",
    href: "/pdfs/servicios/certificacion-disponibilidad.pdf",
    color: "deepBlue" as const,
  },
  {
    icon: Smartphone,
    title: "Solicitar Certificación de Disponibilidad Hídrica",
    href: "https://wa.me/50660622347?text=Hola%20buenas%2C%20quisiera%20solicitar%20una%20certificaci%C3%B3n%20de%20disponibilidad%20h%C3%ADdrica",
    color: "green" as const,
  },
  {
    icon: PhoneCallIcon,
    title: "Reportar Avería",
    href: "tel:+50624540300",
    color: "blue" as const,
  },
];

const iconColorClasses = {
  blue: styles.iconBlue,
  green: styles.iconGreen,
  deepBlue: styles.iconDeepBlue,
};

export function QuickAccess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Accesos Rápidos</h2>
          <p className={styles.sectionSubtitle}>
            Realiza tus solicitudes de manera fácil y rápida
          </p>
        </header>

        <div className={styles.grid}>
          {quickAccessItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.href} href={item.href} className={styles.card} target="_blank" rel="noopener noreferrer">
                <div
                  className={`${styles.iconWrapper} ${iconColorClasses[item.color]}`}
                >
                  <IconComponent size={28} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
