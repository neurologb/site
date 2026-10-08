"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ReferenceCentersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const centers = [
    { country: "Holanda", flag: "/images/flags/holanda.svg", institution: "Amsterdam Brain Institute" },
    { country: "Rússia", flag: "/images/flags/russia.svg", institution: "Moscow Neuroscience Center" },
    { country: "Inglaterra", flag: "/images/flags/inglaterra.png", institution: "London Brain Research" },
    { country: "Espanha", flag: "/images/flags/espanha.png", institution: "Barcelona Neuroscience Institute" },
    { country: "EUA", flag: "/images/flags/eua.png", institution: "Stanford Neuroscience Center" },
    { country: "Canadá", flag: "/images/flags/canada.svg", institution: "Toronto Brain Institute" },
    { country: "Itália", flag: "/images/flags/italia.jpg", institution: "Milan Neuroscience Lab" },
    { country: "Suécia", flag: "/images/flags/suecia.jpg", institution: "Stockholm Brain Research" },
    { country: "Brasil", flag: "/images/flags/brasil.webp", institution: "Neurolog Brasil" },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    scrollContainer.addEventListener("scroll", checkScroll)
    checkScroll()

    return () => scrollContainer.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <section id="centros" className="py-12 sm:py-16 md:py-24 bg-muted/30 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Centros de Referência
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 text-balance">
            Rede Internacional de Neurociência
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
            Colaboração com os principais centros de pesquisa e tratamento em neurociência ao redor do mundo.
          </p>
        </div>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm shadow-lg h-8 w-8 md:h-10 md:w-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
        )}

        {canScrollRight && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm shadow-lg h-8 w-8 md:h-10 md:w-10"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 md:gap-8 overflow-x-auto scrollbar-hide px-4 sm:px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {centers.map((center, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 sm:w-64 md:w-80 bg-card border-2 border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-accent transition-colors snap-center"
            >
              <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
                <div className="relative w-20 h-14 sm:w-24 sm:h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={center.flag || "/placeholder.svg"}
                    alt={`Bandeira ${center.country}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-1 sm:mb-2">{center.country}</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center">{center.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
