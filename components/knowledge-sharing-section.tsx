import Image from "next/image"

export default function KnowledgeSharingSection() {
  const activities = [
    {
      image: "/images/knowledge/workshop-empreendedores.jpeg",
      title: "Workshop para Empreendedores",
      description: "Capacitação em neurociência aplicada ao desenvolvimento de negócios e liderança",
    },
    {
      image: "/images/knowledge/rastreamento-neurodivergencia.png",
      title: "Rastreamento de Neurodivergência",
      description: "Avaliação neuropsicológica com tecnologia de ponta para diagnóstico preciso",
    },
    {
      image: "/images/knowledge/conselheiro-happyworkplace.jpeg",
      title: "Conselheiro Oficial HappyWorkplace",
      description: "Atuação estratégica em bem-estar corporativo e saúde mental organizacional",
    },
    {
      image: "/images/knowledge/participacao-tv.png",
      title: "Participação em TV",
      description: "Programa sobre mapeamento de neurodivergência infantil com tecnologia inovadora",
    },
    {
      image: "/images/knowledge/workshop-educadores.jpeg",
      title: "Workshop para Educadores",
      description: "Saúde Mental do Futuro: capacitando quem cuida de quem educa",
    },
  ]

  return (
    <section id="conhecimento" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
            Compartilhando Conhecimento
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Levando neurociência e inovação para empresas, universidades e comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg"
            >
              <div className="relative w-full h-[280px] md:h-[350px] lg:h-[420px] overflow-hidden bg-muted/30">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                  quality={95}
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {activity.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
