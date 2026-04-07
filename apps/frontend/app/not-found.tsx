import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center bg-[var(--asada-bg-primary)]">
      <h1 className="text-7xl md:text-9xl font-bold mb-4 text-[var(--asada-blue-deep)] dark:text-[var(--asada-blue-light)]">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--asada-text-primary)]">
        404 Página no encontrada
      </h2>
      <p className="mb-8 max-w-md text-base md:text-lg text-[var(--asada-text-secondary)]">
        Lo sentimos, no pudimos encontrar la página que estás buscando. Es posible que haya sido eliminada o que la dirección sea incorrecta.
      </p>
      
      <Button asChild size="lg" className="gap-2 bg-[var(--asada-blue-deep)] text-white hover:bg-[var(--asada-blue-light)] dark:bg-[var(--asada-blue-light)] dark:hover:bg-white dark:hover:text-[var(--asada-blue-deep)]">
        <Link href="/">
          <Home size={20} />
          Volver a Inicio
        </Link>
      </Button>
    </div>
  )
}
