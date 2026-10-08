"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const whatsappLink = "https://wa.me/5575999942943"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Meu nome é ${formData.name}.\n\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMensagem: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5575999942943?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 text-balance">
            Agende Sua Avaliação
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground px-4">
            Entre em contato para agendar sua consulta ou tirar dúvidas sobre nossos tratamentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Informações de Contato</h3>
              <div className="space-y-4 sm:space-y-6">
                <Card className="border-2">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">WhatsApp</h4>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors"
                      >
                        +55 (75) 99994-2943
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">E-mail</h4>
                      <a
                        href="mailto:contato@vitalstrata.com.br"
                        className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-all"
                      >
                        contato@vitalstrata.com.br
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Atendimento</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Presencial e Online (Brasil e Internacional)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-sm">
                <a
                  href="https://instagram.com/braulinopeixoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  @braulinopeixoto
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://instagram.com/neurologbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  @neurologbrasil
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-medium mb-2">
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(XX) XXXXX-XXXX"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                    Motivo do Contato
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o motivo do seu contato..."
                    rows={5}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base">
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
