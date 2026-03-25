import './App.css'
import { VideoBackground } from './components/VideoBackground'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Identities } from './components/Identities'
import { LatestDrops } from './components/LatestDrops'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

function App() {
  return (
    <main className="brutal-container">
      <VideoBackground />
      <Header />
      <Hero />
      <Marquee />
      <Identities />
      <LatestDrops />
      
      {/* Qui potremo aggiungere altre sezioni come Visuals o Booking in componenti separati */}
      
      <Footer />
      <BackToTop />
    </main>
  )
}

export default App
