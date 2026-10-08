import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "VII Congresso Internacional de Autismo",
      role: "Palestrante",
      location: "São Paulo, Brasil",
      date: "2024",
      image: "/autism-conference-presentation.jpg",
    },
    {
      title: "Workshop para Empretecos",
      role: "Facilitador",
      location: "Online",
      date: "2024",
      image: "/business-workshop-neuroscience.jpg",
    },
    {
      title: "Palestra na UNOPAR",
      role: "Palestrante Convidado",
      location: "Londrina, Brasil",
      date: "2023",
      image: "/university-lecture-neuroscience.jpg",
    },
    {
      title: "Palestras na FAI",
      role: "Palestrante",
      location: "Itapeva, Brasil",
      date: "2023",
      image: "/academic-presentation-brain.jpg",
    },
    {
      title: "Participações em TV",
      role: "Especialista Convidado",
      location: "Diversos",
      date: "2022-2024",
      image: "/tv-interview-doctor.jpg",
    },
    {
      title: "Workshops Internacionais",
      role: "Instrutor",
      location: "Europa e América do Norte",
      date: "2022-2024",
      image: "/international-workshop-neuroscience.jpg",
    },
  ]

  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Projetos & Aparições</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">Compartilhando Conhecimento</h2>
          <p className="text-xl text-muted-foreground">
            Palestras, workshops e participações em eventos nacionais e internacionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {project.role}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent">
            Ver Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
