"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente - Tratamento de Enxaqueca",
      content:
        "Após anos sofrendo com enxaquecas crônicas, os protocolos do Dr. Braulino mudaram minha vida. Hoje tenho uma qualidade de vida que não imaginava ser possível.",
    },
    {
      name: "João Santos",
      role: "Pai de Paciente - Autismo",
      content:
        "O trabalho do Dr. Braulino com meu filho tem sido transformador. Vemos progressos significativos em sua cognição e interação social.",
    },
  ]

  const instagramTestimonials = [
    {
      url: "https://www.instagram.com/reel/DQsVTqgj9Pj/?igsh=MTluamU0cGk1bGl0NQ==",
      label: "Depoimento de Paciente 1",
    },
    {
      url: "https://www.instagram.com/reel/DQTyXzqkapi/?igsh=MTIwNXdycjZ4Ym0xcg==",
      label: "Depoimento de Paciente 2",
    },
    {
      url: "https://www.instagram.com/reel/DQRTEJzEfkP/?igsh=cml5NjJkMnpmOWZs",
      label: "Depoimento de Paciente 3",
    },
    {
      url: "https://www.instagram.com/reel/DQOxdgIkWEX/?igsh=MWwzbnB4cXQxYWg0bw==",
      label: "Depoimento de Paciente 4",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">O Que Dizem Nossos Pacientes</h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de transformação e recuperação através da neuromodulação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Mais Depoimentos no Instagram</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramTestimonials.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[180px]">
                    <Instagram className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-foreground mb-2">{item.label}</p>
                    <p className="text-sm text-muted-foreground">Ver no Instagram →</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
