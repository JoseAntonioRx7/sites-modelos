import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
