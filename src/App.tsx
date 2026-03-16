import './App.css'

function App() {
  return (
    <main className="brutal-container">
      {/* Video Background Container */}
      <div className="video-bg-container">
        <div className="video-overlay"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="bg-video"
          poster="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=2000"
        >
          {/* Aggiungi <source src="/video-amici.mp4" type="video/mp4" /> qui quando avrai il file */}
        </video>
      </div>

      <div className="noise-bg"></div>
      <div className="scanlines"></div>

      {/* Header con Navigazione in alto a destra */}
      <header className="top-header">
        <nav className="top-nav">
          <a href="#profiles">PROFILES</a>
          <a href="#drops">DROPS</a>
          <a href="#gallery">VISUALS</a>
          <a href="#booking" className="nav-pill-red">BOOKING</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="glitch main-title" data-text="FIVESEVEN">FIVESEVEN</h1>
          <h1 className="glitch main-title secondary" data-text="CBR320">CBR320</h1>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marquee border-top">
        <div className="marquee-content">
          FIVESEVEN CBR // STAY SWAG // SWAG PEOPLE MAKES SAFE SEX // TRULY HUMBLE UNDER GOD // NO CAP // STAY DRIPPY // FIVESEVEN CBR // STAY SWAG // SWAG PEOPLE MAKES SAFE SEX // TRULY HUMBLE UNDER GOD // NO CAP // STAY DRIPPY //
        </div>
      </div>

      {/* Section 1: IDENTITIES */}
      <section id="profiles" className="section border-top">
        <h2 className="title">IDENTITIES</h2>
        <div className="multiverse-container">
          <div className="music-zone">
            <h3 className="zone-title">FIVESEVEN</h3>
            <div className="profile-links">
              <a href="https://soundcloud.com/gvmwav" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M11.56 8.87V17h9.05c1.87 0 3.39-1.52 3.39-3.39 0-1.88-1.52-3.39-3.39-3.39-.23 0-.46.03-.68.08-.57-3.08-3.26-5.41-6.49-5.41-1.42 0-2.73.45-3.8 1.21-.4-.68-1.12-1.13-1.95-1.13-.6 0-1.14.24-1.53.62V8.87c0 .54.44.98.98.98.54 0 .97-.44.97-.98zM2.63 12.3c-.54 0-.98.44-.98.98v1.36c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-1.36c0-.54-.44-.98-.97-.98zm1.95-1.47c-.54 0-.98.44-.98.98v3.3c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-3.3c0-.54-.44-.98-.97-.98zm1.95-.97c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98zm1.95 0c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98z"/></svg>
                <span className="music-label-small">SOUNDCLOUD</span>
              </a>
              <a href="https://open.spotify.com/artist/0TnOYISjUG1Ynb7Yj9HqbI" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.216.353-.674.464-1.027.248-2.859-1.747-6.458-2.142-10.702-1.171-.403.093-.81-.161-.903-.564-.093-.403.161-.81.564-.903 4.636-1.06 8.618-.611 11.82 1.347.353.216.464.674.248 1.027zm1.473-3.262c-.272.441-.85.584-1.291.312-3.273-2.011-8.261-2.593-12.128-1.418-.496.15-1.022-.128-1.173-.624-.15-.496.128-1.022.624-1.173 4.417-1.341 9.919-.687 13.655 1.611.442.271.585.85.313 1.292zm.126-3.41c-3.927-2.332-10.404-2.548-14.175-1.402-.602.183-1.239-.168-1.422-.77-.183-.602.168-1.239.77-1.422 4.331-1.315 11.488-1.063 16.002 1.615.542.321.721 1.023.399 1.565-.321.542-1.022.721-1.564.401z"/></svg>
                <span className="music-label-small">SPOTIFY</span>
              </a>
            </div>
          </div>
          <div className="music-zone zone-border-left">
            <h3 className="zone-title">CBR320</h3>
            <div className="profile-links">
              <a href="https://soundcloud.com/cbr320" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M11.56 8.87V17h9.05c1.87 0 3.39-1.52 3.39-3.39 0-1.88-1.52-3.39-3.39-3.39-.23 0-.46.03-.68.08-.57-3.08-3.26-5.41-6.49-5.41-1.42 0-2.73.45-3.8 1.21-.4-.68-1.12-1.13-1.95-1.13-.6 0-1.14.24-1.53.62V8.87c0 .54.44.98.98.98.54 0 .97-.44.97-.98zM2.63 12.3c-.54 0-.98.44-.98.98v1.36c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-1.36c0-.54-.44-.98-.97-.98zm1.95-1.47c-.54 0-.98.44-.98.98v3.3c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-3.3c0-.54-.44-.98-.97-.98zm1.95-.97c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98zm1.95 0c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98z"/></svg>
                <span className="music-label-small">SOUNDCLOUD</span>
              </a>
              <a href="https://open.spotify.com/artist/cbr320" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.216.353-.674.464-1.027.248-2.859-1.747-6.458-2.142-10.702-1.171-.403.093-.81-.161-.903-.564-.093-.403.161-.81.564-.903 4.636-1.06 8.618-.611 11.82 1.347.353.216.464.674.248 1.027zm1.473-3.262c-.272.441-.85.584-1.291.312-3.273-2.011-8.261-2.593-12.128-1.418-.496.15-1.022-.128-1.173-.624-.15-.496.128-1.022.624-1.173 4.417-1.341 9.919-.687 13.655 1.611.442.271.585.85.313 1.292zm.126-3.41c-3.927-2.332-10.404-2.548-14.175-1.402-.602.183-1.239-.168-1.422-.77-.183-.602.168-1.239.77-1.422 4.331-1.315 11.488-1.063 16.002 1.615.542.321.721 1.023.399 1.565-.321.542-1.022.721-1.564.401z"/></svg>
                <span className="music-label-small">SPOTIFY</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: LATEST DROPS */}
      <section id="drops" className="section border-top">
        <h2 className="title">LATEST DROPS</h2>
        <div className="drops-grid-swag">
          {/* DROP 1: MILLI FLOW */}
          <div className="drop-card-swag brutal-card">
            <div className="drop-image">
              <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800" alt="MILLI FLOW" />
              <div className="drop-overlay-tag">FIVESEVEN // NEW</div>
            </div>
            <div className="drop-content">
              <h4 className="drop-title glitch" data-text="MILLI FLOW">MILLI FLOW</h4>
              <iframe style={{ borderRadius: '0' }} src="https://open.spotify.com/embed/track/4ixfEYxE37EqYshDaqqkoH?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>

          {/* DROP 2: ROCK DVR */}
          <div className="drop-card-swag brutal-card">
            <div className="drop-image">
              <img src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800" alt="ROCK DVR" />
              <div className="drop-overlay-tag">CBR320 // HOT</div>
            </div>
            <div className="drop-content">
              <h4 className="drop-title glitch" data-text="ROCK DVR">ROCK DVR</h4>
              <iframe style={{ borderRadius: '0' }} src="https://open.spotify.com/embed/track/6WWtmHKupQx8vBUNon7cGj?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>

          {/* DROP 3: NON CI VADO AL */}
          <div className="drop-card-swag brutal-card">
            <div className="drop-image">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800" alt="NON CI VADO AL" />
              <div className="drop-overlay-tag">FIVESEVEN // VISION</div>
            </div>
            <div className="drop-content">
              <h4 className="drop-title glitch" data-text="NON CI VADO AL">NON CI VADO AL</h4>
              <iframe style={{ borderRadius: '0' }} src="https://open.spotify.com/embed/track/3KohbjrgKKgbIUZAqXS4CU?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Resto rimasto uguale... Visuals, Gigs, Booking */}
      <footer className="footer border-top">
        <p>&copy; 2026 FIVESEVEN CBR. TRULY HUMBLE UNDER GOD.</p>
      </footer>
    </main>
  )
}

export default App
