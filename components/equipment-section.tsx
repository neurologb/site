import Image from "next/image"

export default function EquipmentSection() {
  const equipment = [
    {
      name: "FLOW",
      logo: "/images/equipment/flow-logo.png",
      alt: "FLOW Neuroscience",
    },
    {
      name: "MindMedia",
      logo: "/images/equipment/mindmedia-logo.png",
      alt: "MindMedia",
    },
    {
      name: "Mind Alive",
      logo: "/images/equipment/mindalive-logo.png",
      alt: "Mind Alive Inc",
    },
    {
      name: "miha bodytec",
      logo: "/images/equipment/miha-bodytec-logo.png",
      alt: "miha bodytec",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Tecnologia de Ponta
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com os equipamentos mais avançados de neuromodulação do mercado internacional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center p-4 md:p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors"
            >
              <Image
                src={item.logo || "/placeholder.svg"}
                alt={item.alt}
                width={180}
                height={80}
                className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
