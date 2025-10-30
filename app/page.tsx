import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Ethos } from "@/components/ethos"
import { Services } from "@/components/services"
import { Rooms } from "@/components/rooms"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <Hero />
      <Ethos />
      <Services />
      <Rooms />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
