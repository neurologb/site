import Image from "next/image"
import { Brain, Award, Users, Lightbulb } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "Neuromodulação Integrativa",
      description: "Pioneiro e cocriador do conceito",
    },
    {
      icon: Lightbulb,
      title: "Inovação Científica",
      description: "Semeadura do Córtex e Rejuvenescimento Elétrico Cerebral",
    },
    {
      icon: Award,
      title: "CEO Neurolog Brasil",
      description: "Startup de cooperação em Neuromodulação",
    },
    {
      icon: Users,
      title: "Palestrante Internacional",
      description: "Congressos e workshops em diversos países",
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Images */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20dr%20atendendo-7wfvSAGX9EEtkY7h4blJEXaLZrMp7g.jpeg"
                    alt="Dr. Braulino atendendo paciente"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/consulta-lVhN3RpDVjL1mQ2M3xErK3nfsvcoQy.jpeg"
                    alt="Consulta de neuromodulação"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Sobre o Neuropsicólogo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 text-balance">
                Braulino Peixoto
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Neuropsicólogo, Neurocientista e CEO da <strong className="text-foreground">Neurolog Brasil</strong>,
                  startup pioneira em cooperação em Neuromodulação Integrativa.
                </p>
                <p>
                  Cocriador dos conceitos revolucionários de{" "}
                  <strong className="text-foreground">Neuromodulação Integrativa</strong>,
                  <strong className="text-foreground"> Semeadura do Córtex</strong>,
                  <strong className="text-foreground"> Rejuvenescimento Elétrico Cerebral</strong> e
                  <strong className="text-foreground"> Cirurgia Elétrica Cerebral</strong>.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-4 md:pl-6 border-l-4 border-accent py-2">
              <p className="text-lg md:text-xl font-medium italic text-foreground">
                "Não quero morrer antes de ver a atividade elétrica cerebral ser transformada em imagem e som."
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
