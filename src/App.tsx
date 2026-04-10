import './App.css'
import { VideoBackground } from './components/VideoBackground'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Identities } from './components/Identities'
import { LatestDrops } from './components/LatestDrops'
import { Booking } from './components/Booking'
import { Social } from './components/Social'
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
      <Booking />
      <Social />
      <BackToTop />
    </main>
  )
}

export default App
