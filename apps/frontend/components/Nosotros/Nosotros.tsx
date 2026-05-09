import { Target, Eye, Heart, CheckCircle, User, Scale } from 'lucide-react'
import Image from 'next/image'
import styles from './Nosotros.module.css'
import { NosotrosData } from '@/types/nosotros'
import { Video } from '@/components/Video/Video'

export function Nosotros({ data }: { data: NosotrosData }) {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nosotros</h2>
          <p className={styles.sectionSubtitle}>
            Conoce nuestra historia, misión y compromiso con la comunidad
          </p>
        </header>

        {/* Historia */}
        <div className={styles.historia}>
          <div className={styles.historiaContent}>
            <div className={styles.historiaText}>
              <h3>Nuestra Historia</h3>
              {data.historia.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>
            <div className={styles.historiaImage}>
              <Image 
                src="/images/nosotros.webp" 
                alt="Historia de la ASADA" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className={styles.mvvGrid}>
          <div className={`${styles.mvvCard} ${styles.mision}`}>
            <div className={`${styles.mvvIconWrapper} ${styles.mision}`}>
              <Target size={24} />
            </div>
            <h3>Misión</h3>
            <p>{data.mision}</p>
          </div>

          <div className={`${styles.mvvCard} ${styles.vision}`}>
            <div className={`${styles.mvvIconWrapper} ${styles.vision}`}>
              <Eye size={24} />
            </div>
            <h3>Visión</h3>
            <p>{data.vision}</p>
          </div>

          <div className={`${styles.mvvCard} ${styles.valores}`}>
            <div className={`${styles.mvvIconWrapper} ${styles.valores}`}>
              <Heart size={24} />
            </div>
            <h3>Principios</h3>
            <p>Los principios que guían nuestro trabajo diario:</p>
            <div className={styles.valoresList}>
              {data.valores.map((valor) => (
                <span key={valor} className={styles.valorTag}>
                  <CheckCircle size={14} />
                  {valor}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Junta Directiva */}
        <div className={styles.juntaSection}>
          <div className={styles.juntaHeader}>
            <h3>Junta Directiva</h3>
            <span className={styles.periodoTag}>
              <User size={16} />
              {data.periodoJunta}
            </span>
          </div>
          <div className={styles.juntaGrid}>
            {data.juntaDirectiva.map((miembro) => (
              <div key={miembro.cargo} className={styles.juntaCard}>
                <div className={styles.juntaAvatar}>
                  <User size={24} />
                </div>
                <div className={styles.juntaInfo}>
                  <h4>{miembro.nombre}</h4>
                  <span>{miembro.cargo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marco Legal */}
        <div className={styles.marcoLegal}>
          <h3>
            <Scale size={20} />
            Marco Legal
          </h3>
          <div className={styles.marcoList}>
            {data.marcoLegal.map((item, index) => (
              <div key={index} className={styles.marcoItem}>
                <CheckCircle size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Destacado */}
        <div style={{ marginTop: '3rem' }}>
          <Video />
        </div>
      </div>
    </section>
  )
}
