"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, FileText, Sun, Moon, User } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./Header.module.css";

import logoNoBg from "@/public/images/logo-no-bg.png";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Trámites", href: "/tramites" },
  { label: "Transparencia", href: "/transparencia" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoNoBg}
            alt="Logo ASADA Calle Concha"
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>ASADA Calle Concha</span>
            <span className={styles.logoSlogan}>
              Agua 100% Potable
            </span>
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
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={mounted && resolvedTheme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <Link
            href="https://asadacalleconcha.com/admin"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.userButton}
            aria-label="Administración"
          >
            <User size={20} />
          </Link>

          <Link
            href="https://acueductoscr.com/Recibos?provincia=2&idacueducto=254"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <FileText size={18} />
            Consultar Recibo
          </Link>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className={styles.menuButton} aria-label="Abrir menú">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="dark:bg-[var(--asada-bg-primary)] dark:border-[var(--asada-border)]">
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
                  href="https://acueductoscr.com/Recibos?provincia=2&idacueducto=254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileCtaButton}
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={20} />
                  Consultar Recibo
                </Link>
                <Link
                  href="https://asadacalleconcha.com/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileUserButton}
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} />
                  Panel de Control
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
