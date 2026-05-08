import Link from "next/link";
import { FileText, PlusCircle, Download, AlertTriangle } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.decorativeElement} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Comprometidos con la calidad y continuidad del servicio de agua
            potable para la comunidad
          </h1>
          <p className={styles.subtitle}>
            Trabajamos día a día para garantizar agua potable de calidad,
            promoviendo la transparencia, la sostenibilidad y el servicio
            eficiente a todos los habitantes de Calle Concha.
          </p>
          <div className={styles.actions}>
            <Link href="/servicios" className={styles.primaryButton}>
              <PlusCircle size={20} />
              Solicitar Servicio
            </Link>

            <Link href="/noticias" className={styles.secondaryButton}>
              <FileText size={20} />
              Noticias Recientes
            </Link>

            <Link href="/tramites" className={styles.secondaryButton}>
              <AlertTriangle size={20} />
              Sugerencias, Quejas y Reclamos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
