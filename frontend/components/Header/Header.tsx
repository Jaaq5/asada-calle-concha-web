'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, FileText } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import styles from './Header.module.css'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Trámites', href: '/tramites' },
  { label: 'Transparencia', href: '/transparencia' },
  { label: 'Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-removebg-6s6Q6mM2O1hd0KLWTJK8y0ibL23TTy.png"
            alt="Logo ASADA Calle Concha"
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>ASADA Calle Concha</span>
            <span className={styles.logoSlogan}>Agua potable para nuestra comunidad</span>
          </div>
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <Link href="/factura" className={styles.ctaButton}>
            <FileText size={18} />
            Consultar Factura
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className={styles.menuButton} aria-label="Abrir menú">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <nav className={styles.mobileNav} aria-label="Navegación móvil">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className={styles.mobileCta}>
                <Link
                  href="/factura"
                  className={styles.mobileCtaButton}
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={20} />
                  Consultar Factura
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
