import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Activity, Heart, Zap, Shield, Sparkles, Waves, Target } from "lucide-react"

export default function ProtocolsSection() {
  const whatsappLink = "https://wa.me/5575999942943?text=Olá! Gostaria de saber mais sobre os protocolos de tratamento."

  const protocols = [
    {
      icon: Target,
      title: "Autismo de Alta Performance Cognitiva",
      description:
        "Protocolos especializados para desenvolvimento de habilidades cognitivas em indivíduos no espectro autista.",
    },
    {
      icon: Activity,
      title: "Biomodulação no Parkinsonismo",
      description: "Técnicas avançadas de neuromodulação para tratamento de sintomas parkinsonianos.",
    },
    {
      icon: Brain,
      title: "Remissão de Declínio Cognitivo Demencial",
      description: "Protocolos inovadores para retardar e reverter processos de declínio cognitivo.",
    },
    {
      icon: Heart,
      title: "Neuromodulação para Humor Depressivo",
      description: "Tratamento não invasivo para transtornos de humor e depressão.",
    },
    {
      icon: Waves,
      title: "Stress Profile",
      description: "Avaliação e tratamento personalizado para gestão de estresse e ansiedade.",
    },
    {
      icon: Zap,
      title: "Analgesia Elétrica em Enxaqueca",
      description: "Alívio eficaz de dores de cabeça crônicas através de estimulação elétrica.",
    },
    {
      icon: Shield,
      title: "Combate à Neuroinflamação",
      description: "Protocolos para redução de processos inflamatórios cerebrais.",
    },
    {
      icon: Sparkles,
      title: "Rejuvenescimento Elétrico Cerebral",
      description: "Técnicas exclusivas para otimização da atividade elétrica cerebral.",
    },
  ]

  return (
    <section id="protocolos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Protocolos Exclusivos</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Tratamentos Inovadores em Neuromodulação
          </h2>
          <p className="text-xl text-muted-foreground">
            Protocolos desenvolvidos com base em anos de pesquisa e experiência clínica internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {protocols.map((protocol, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <protocol.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{protocol.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{protocol.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Ver Todos os Protocolos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
