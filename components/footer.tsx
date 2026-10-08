import { Brain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <span className="text-lg sm:text-xl font-bold">Braulino Peixoto</span>
            </div>
            <p className="text-sm sm:text-base text-secondary-foreground/80 leading-relaxed">
              Transformando a atividade elétrica cerebral em saúde, performance e bem-estar.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Links Rápidos</h3>
            <ul className="space-y-2 text-sm sm:text-base text-secondary-foreground/80">
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#protocolos" className="hover:text-accent transition-colors">
                  Protocolos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Neurolog Brasil</h3>
            <p className="text-sm sm:text-base text-secondary-foreground/80 leading-relaxed mb-3 sm:mb-4">
              Startup de cooperação em Neuromodulação Integrativa.
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-secondary-foreground/80">
              <p>@braulinopeixoto</p>
              <p>@neurologbrasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Dr. Braulino Peixoto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
