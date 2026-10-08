import Image from "next/image"

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Neuropsicologia Clínica",
      institution: "Sociedade Brasileira de Neuropsicologia",
      logo: "/images/certifications/sbnp.png",
      country: "Brasil",
    },
    {
      name: "Formação em Imageamento Cerebral",
      institution: "London Science Neurotherapy",
      logo: "/images/certifications/lsn.png",
      country: "Londres",
    },
    {
      name: "Neurofeedback e Biofeedback",
      institution: "Biofeedback Federation of Europe",
      logo: "/images/certifications/bfe.png",
      country: "Europa",
    },
    {
      name: "Neuromodulação Integrativa",
      institution: "Boston Neurodynamics Applied Neuroscience Center",
      logo: "/images/certifications/boston.png",
      country: "EUA",
    },
  ]

  return (
    <section id="certificacoes" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Certificações</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
            Formação Internacional
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty">
            Certificações e especializações obtidas nos principais centros de excelência mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 hover:border-accent transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className="relative w-full h-20 sm:h-24 mb-3 sm:mb-4 flex items-center justify-center">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.name}
                  width={200}
                  height={96}
                  className="object-contain max-h-full w-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 text-balance leading-tight">{cert.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 text-pretty leading-snug">
                {cert.institution}
              </p>
              <span className="text-xs text-accent font-semibold uppercase tracking-wider">{cert.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
