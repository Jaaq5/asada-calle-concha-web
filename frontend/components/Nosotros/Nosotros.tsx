import { Target, Eye, Heart, CheckCircle, User, Scale, Droplets } from 'lucide-react'
import styles from './Nosotros.module.css'

const juntaDirectiva = [
  { cargo: 'Presidente', nombre: 'María Fernández Castro' },
  { cargo: 'Vicepresidente', nombre: 'Carlos Rodríguez Mora' },
  { cargo: 'Secretario', nombre: 'Ana Lucía Vargas Jiménez' },
  { cargo: 'Tesorero', nombre: 'José Manuel Solís Hernández' },
  { cargo: 'Vocal 1', nombre: 'Laura Patricia Méndez Rojas' },
  { cargo: 'Vocal 2', nombre: 'Roberto Arturo Calvo Arias' },
]

const valores = [
  'Transparencia',
  'Compromiso',
  'Servicio',
  'Responsabilidad',
  'Solidaridad',
  'Sostenibilidad',
]

const marcoLegal = [
  'Ley de Asociaciones Administradoras de Sistemas de Acueductos y Alcantarillados Comunales (Ley ASADAS)',
  'Regulación y supervisión del Instituto Costarricense de Acueductos y Alcantarillados (AyA)',
  'Reglamento de las ASADAS aprobado mediante Decreto Ejecutivo',
  'Estatutos internos de ASADA Calle Concha',
]

export function Nosotros() {
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
              <p>
                La Asociación Administradora del Acueducto y Alcantarillado Sanitario de Calle Concha 
                fue fundada con el propósito de garantizar el acceso a agua potable de calidad para 
                todos los habitantes de nuestra comunidad.
              </p>
              <p>
                Desde nuestros inicios, hemos trabajado incansablemente para mejorar la infraestructura 
                hídrica, expandir nuestra cobertura y mantener los más altos estándares de calidad en 
                el servicio de agua potable que brindamos a nuestros abonados.
              </p>
              <p>
                Operamos bajo la regulación y supervisión del Instituto Costarricense de Acueductos 
                y Alcantarillados (AyA), cumpliendo con todas las normativas vigentes para garantizar 
                un servicio seguro y confiable.
              </p>
            </div>
            <div className={styles.historiaImage}>
              <Droplets size={80} />
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
            <p>
              Administrar y operar eficientemente el sistema de acueducto y alcantarillado de Calle 
              Concha, garantizando el suministro de agua potable de calidad a toda la comunidad, 
              con un enfoque de sostenibilidad ambiental y responsabilidad social.
            </p>
          </div>

          <div className={`${styles.mvvCard} ${styles.vision}`}>
            <div className={`${styles.mvvIconWrapper} ${styles.vision}`}>
              <Eye size={24} />
            </div>
            <h3>Visión</h3>
            <p>
              Ser una ASADA modelo a nivel regional, reconocida por la excelencia en la gestión 
              del recurso hídrico, la innovación tecnológica y el compromiso permanente con el 
              bienestar de nuestra comunidad y el medio ambiente.
            </p>
          </div>

          <div className={`${styles.mvvCard} ${styles.valores}`}>
            <div className={`${styles.mvvIconWrapper} ${styles.valores}`}>
              <Heart size={24} />
            </div>
            <h3>Valores</h3>
            <p>Los principios que guían nuestro trabajo diario:</p>
            <div className={styles.valoresList}>
              {valores.map((valor) => (
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
              Período 2024-2027
            </span>
          </div>
          <div className={styles.juntaGrid}>
            {juntaDirectiva.map((miembro) => (
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
            {marcoLegal.map((item, index) => (
              <div key={index} className={styles.marcoItem}>
                <CheckCircle size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
