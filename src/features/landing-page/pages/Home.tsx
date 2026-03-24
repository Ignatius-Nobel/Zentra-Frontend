import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { FeatureCards } from '../components/FeatureCards'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col w-full bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
