import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProtocolsSection from "@/components/protocols-section"
import ServicesSection from "@/components/services-section"
import EquipmentSection from "@/components/equipment-section"
import KnowledgeSharingSection from "@/components/knowledge-sharing-section"
import ReferenceCentersSection from "@/components/reference-centers-section"
import CertificationsSection from "@/components/certifications-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-[100vw]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProtocolsSection />
      <ServicesSection />
      <EquipmentSection />
      <KnowledgeSharingSection />
      <ReferenceCentersSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
