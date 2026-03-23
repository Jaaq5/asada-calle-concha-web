import Link from "next/link";
import { FileText, PlusCircle, Download, AlertTriangle } from "lucide-react";
import styles from "./QuickAccess.module.css";

const quickAccessItems = [
  {
    icon: FileText,
    title: "Consultar Factura",
    href: "https://acueductoscr.com/Recibos?provincia=2&idacueducto=254",
    color: "blue" as const,
  },
  {
    icon: PlusCircle,
    title: "Solicitar Nuevo Servicio",
    href: "/servicios",
    color: "green" as const,
  },
  {
    icon: Download,
    title: "Descargar Formularios",
    href: "/tramites",
    color: "deepBlue" as const,
  },
  {
    icon: AlertTriangle,
    title: "Avisos Importantes",
    href: "/noticias",
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
            Realiza tus trámites de manera fácil y rápida
          </p>
        </header>

        <div className={styles.grid}>
          {quickAccessItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.href} href={item.href} className={styles.card}>
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
