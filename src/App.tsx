import { useState, useEffect } from 'react'
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
  const [activeTrack, setActiveTrack] = useState<any>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Rivela la sezione quando il 15% è visibile
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          entry.target.classList.remove('revealed'); // Permette di ri-triggerare l'effetto
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="brutal-container">
      <VideoBackground />
      <Header />
      <Hero />
      
      <div className="reveal-section">
        <Marquee />
      </div>
      
      <div className="reveal-section">
        <Identities />
      </div>

      <div className="reveal-section">
        <div className="pattern-full-divider-swag"></div>
        <LatestDrops activeTrack={activeTrack} onPlay={setActiveTrack} />
      </div>

      <div className="reveal-section">
        <Booking />
      </div>

      <div className="reveal-section">
        <Social />
      </div>

      <BackToTop />

      {/* GLOBAL MASTER PLAYER BAR - FLOATING AT THE BOTTOM */}
      {activeTrack && (
        <div className="bottom-player-bar-swag slide-up">
          <div className="player-bar-content">
            <div className="player-bar-info">
              <div className="bar-text-info">
                <span className="bar-track-name">{activeTrack.title}</span>
                <span className="bar-artist-name">{activeTrack.artist}</span>
              </div>
            </div>
            
            <div className="player-bar-central">
              <div className="master-audio-engine">
                {activeTrack.spotifyId ? (
                  <iframe 
                    src={`https://open.spotify.com/embed/track/${activeTrack.spotifyId}?utm_source=generator&theme=0`} 
                    width="100%" height="80" frameBorder="0" allow="autoplay" 
                  ></iframe>
                ) : (
                  <div className="soundcloud-master-wrapper">
                    <iframe 
                      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(activeTrack.soundcloudUrl)}&color=%23ff0000&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=false`}
                      width="1200" height="240" frameBorder="0" allow="autoplay" 
                      className="soundcloud-master-iframe"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>

            <button className="close-player-bar" onClick={() => setActiveTrack(null)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
