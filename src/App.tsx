import './App.css'

function App() {
  return (
    <main className="brutal-container">
      <div className="noise-bg"></div>
      <div className="scanlines"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="glitch main-title" data-text="FIVESEVEN">FIVESEVEN</h1>
          <h1 className="glitch main-title secondary" data-text="CBR320">CBR320</h1>
          
          <div className="hero-nav">
            <a href="#music" className="nav-btn-small">MUSIC</a>
            <a href="#gallery" className="nav-btn-small">VISUALS</a>
            <a href="#gigs" className="nav-btn-small">GIGS</a>
            <a href="#booking" className="nav-btn-small red-fill">BOOKING</a>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marquee border-top">
        <div className="marquee-content">
          FIVESEVEN CBR // STAY SWAG // SWAG PEOPLE MAKES SAFE SEX // TRULY HUMBLE UNDER GOD // NO CAP // STAY DRIPPY // FIVESEVEN CBR // STAY SWAG // SWAG PEOPLE MAKES SAFE SEX // TRULY HUMBLE UNDER GOD // NO CAP // STAY DRIPPY //
        </div>
      </div>

      {/* Music Section */}
      <section id="music" className="section border-top">
        <h2 className="title">MUSIC HUB</h2>
        <div className="music-grid">
          {/* SoundCloud Section */}
          <div className="music-block">
            <h3 className="block-title">SOUNDCLOUD // RAW</h3>
            <div className="brutal-card">
              <iframe 
                width="100%" 
                height="350" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
          
          {/* Spotify Section */}
          <div className="music-block">
            <h3 className="block-title">SPOTIFY // DROP</h3>
            <div className="brutal-card">
              <iframe 
                style={{ borderRadius: '0' }} 
                src="https://open.spotify.com/embed/artist/0TnOYISjUG1Ynb7Yj9HqbI?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Visuals / Graphics Section */}
      <section id="gallery" className="section border-top">
        <div className="visuals-header">
          <h2 className="title">VISUALS</h2>
          <span className="badge-small">CUSTOM GRAPHICS COMING SOON</span>
        </div>
        <div className="gallery-grid">
          {/* Questi div sono pronti per le grafiche custom che mi manderai */}
          <div className="gallery-item brutal-card custom-graphic-placeholder">
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" alt="DJ" />
            <div className="placeholder-text">PLACEHOLDER GRAPHIC #1</div>
          </div>
          <div className="gallery-item brutal-card custom-graphic-placeholder">
            <img src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=800" alt="Club" />
            <div className="placeholder-text">PLACEHOLDER GRAPHIC #2</div>
          </div>
        </div>
      </section>

      {/* Gigs Section */}
      <section id="gigs" className="section border-top">
        <h2 className="title">ON TOUR</h2>
        <div className="gigs-list">
          <div className="gig-row">
            <span className="date">15.MAR</span>
            <span className="city">MILANO // CLUB X</span>
            <span className="status">SOLD OUT</span>
          </div>
          <div className="gig-row">
            <span className="date">22.MAR</span>
            <span className="city">ROMA // WAREHOUSE 57</span>
            <span className="status">TICKETS</span>
          </div>
          <div className="gig-row">
            <span className="date">04.APR</span>
            <span className="city">NAPOLI // UNDERGROUND BASS</span>
            <span className="status">TICKETS</span>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section border-top last">
        <h2 className="title">CONTACT / BOOKING</h2>
        <form className="brutal-form">
          <input type="text" placeholder="NAME / AGENCY" className="brutal-input" />
          <input type="email" placeholder="EMAIL ADDRESS" className="brutal-input" />
          <textarea placeholder="MESSAGE" className="brutal-input" rows={5}></textarea>
          <button type="submit" className="btn-brutal red-bg full-width">SEND TRANSMISSION</button>
        </form>
      </section>

      <footer className="footer border-top">
        <p>&copy; 2026 FIVESEVEN CBR. TRULY HUMBLE UNDER GOD.</p>
      </footer>
    </main>
  )
}

export default App
