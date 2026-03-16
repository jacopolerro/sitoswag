import './AppV2.css'

function AppV2() {
  return (
    <div className="skrillex-vibe">
      {/* Background Hero con immagine immersiva */}
      <div className="hero-bg">
        <div className="overlay"></div>
      </div>

      {/* Header / Navbar */}
      <header className="header">
        <div className="logo">FIVESEVEN</div>
        <nav className="nav-center">
          <a href="#about">ABOUT</a>
          <a href="#music">MUSIC</a>
          <a href="#gigs">TOUR DATES</a>
          <a href="#shop">SHOP</a>
          <a href="#booking" className="contact-pill">CONTACT</a>
        </nav>
      </header>

      {/* Side Nav (Verticale a sinistra) */}
      <aside className="side-nav">
        <div className="line"></div>
        <div className="side-text">MUSIC</div>
        <div className="line"></div>
        <div className="line"></div>
      </aside>

      {/* Main Title Hero */}
      <main className="main-content">
        <h1 className="huge-title">FIVESEVEN</h1>
      </main>

      {/* Footer o Sezioni successive (scrollabili) */}
      <section className="bottom-scroll">
        <p className="scroll-hint">SCROLL TO EXPLORE</p>
      </section>
    </div>
  )
}

export default AppV2
