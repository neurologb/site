import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Brain, ImageIcon, Activity, Presentation, Video } from "lucide-react"

export default function ServicesSection() {
  const whatsappLink = "https://wa.me/5575999942943?text=Olá! Gostaria de agendar um atendimento online."

  const services = [
    {
      icon: Video,
      title: "Atendimentos Online",
      description: "Consultas remotas para pacientes no Brasil, EUA, Europa, Ásia e Canadá.",
      highlight: true,
    },
    {
      icon: Brain,
      title: "Avaliação Neuropsicológica",
      description: "Avaliação completa das funções cognitivas e comportamentais.",
    },
    {
      icon: ImageIcon,
      title: "Imageamento Cerebral",
      description: "Mapeamento avançado da atividade elétrica cerebral.",
    },
    {
      icon: Activity,
      title: "Bio & Neuromodulação",
      description: "Tratamentos personalizados com protocolos exclusivos.",
    },
    {
      icon: Presentation,
      title: "Palestras e Workshops",
      description: "Eventos corporativos e acadêmicos sobre neurociência aplicada.",
    },
    {
      icon: Globe,
      title: "Consultoria Internacional",
      description: "Assessoria para clínicas e profissionais da saúde.",
    },
  ]

  return (
    <section id="servicos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">Como Podemos Ajudar Você</h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos uma gama completa de serviços em neuropsicologia e neuromodulação, tanto presencialmente quanto
            online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${
                service.highlight ? "border-2 border-accent bg-accent/5" : "border-2 hover:border-accent/50"
              } transition-all duration-300 hover:shadow-lg`}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-xl ${
                    service.highlight ? "bg-accent/20" : "bg-primary/10"
                  } flex items-center justify-center mb-4`}
                >
                  <service.icon className={`w-8 h-8 ${service.highlight ? "text-accent" : "text-primary"}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Atendimento Online
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
