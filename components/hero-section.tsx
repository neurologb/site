import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

export default function HeroSection() {
  const whatsappLink = "https://wa.me/5575999942943?text=Olá! Gostaria de agendar uma consulta."

  return (
    <section className="relative min-h-[calc(100vh-80px)] md:min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-0 overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-accent font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider text-balance">
                Neuropsicólogo • Neurocientista • CEO Neurolog Brasil
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Transformando a atividade elétrica cerebral em <span className="text-primary">saúde</span>,{" "}
              <span className="text-accent">performance</span> e <span className="text-primary">bem-estar</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Atendimentos presenciais e online com protocolos exclusivos em neuromodulação e biofeedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-sm sm:text-base md:text-lg h-11 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Consulta
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base md:text-lg h-11 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 bg-transparent"
                asChild
              >
                <a href="#protocolos">
                  Conheça os Protocolos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:flex md:items-center md:gap-8 pt-4">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">15+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border" />
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">5000+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Pacientes Atendidos</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border" />
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">8</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Países</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto overflow-hidden">
              <div className="absolute top-4 right-4 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-accent/20 rounded-full blur-2xl sm:blur-3xl" />
              <div className="absolute bottom-4 left-4 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-primary/20 rounded-full blur-2xl sm:blur-3xl" />

              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20doutor-L9w00D0kE2pvOpe37Lu8XfLFcnV5sK.jpeg"
                  alt="Dr. Braulino Peixoto"
                  width={600}
                  height={800}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
