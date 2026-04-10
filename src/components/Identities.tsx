export const Identities = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Usiamo una precisione maggiore per lo scroll
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="profiles" className="section border-top">
      <h2 className="title">IDENTITIES</h2>
      <div className="multiverse-container">
        {/* FIVESEVEN ZONE */}
        <div 
          className="music-zone identity-card-bg clickable-card" 
          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}assets/fiveseven-profile.jpg")` }}
          onClick={() => scrollToSection('fiveseven-drops')}
        >
          <div className="identity-overlay"></div>
          <div className="identity-content">
            <h3 className="zone-title">FIVESEVEN</h3>
            <div className="profile-links" onClick={(e) => e.stopPropagation()}>
              <a href="https://www.instagram.com/fivesevennnnnnnn/" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <InstagramIcon />
                <span className="music-label-small">INSTAGRAM</span>
              </a>
              <a href="https://soundcloud.com/gvmwav" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M11.56 8.87V17h9.05c1.87 0 3.39-1.52 3.39-3.39 0-1.88-1.52-3.39-3.39-3.39-.23 0-.46.03-.68.08-.57-3.08-3.26-5.41-6.49-5.41-1.42 0-2.73.45-3.8 1.21-.4-.68-1.12-1.13-1.95-1.13-.6 0-1.14.24-1.53.62V8.87c0 .54.44.98.98.98.54 0 .97-.44.97-.98zM2.63 12.3c-.54 0-.98.44-.98.98v1.36c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-1.36c0-.54-.44-.98-.97-.98zm1.95-1.47c-.54 0-.98.44-.98.98v3.3c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-3.3c0-.54-.44-.98-.97-.98zm1.95-.97c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98zm1.95 0c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98z"/></svg>
                <span className="music-label-small">SOUNDCLOUD</span>
              </a>
              <a href="https://open.spotify.com/intl-it/artist/3qiJX9hZDQiC2vLuQ2UT2I" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.216.353-.674.464-1.027.248-2.859-1.747-6.458-2.142-10.702-1.171-.403.093-.81-.161-.903-.564-.093-.403.161-.81.564-.903 4.636-1.06 8.618-.611 11.82 1.347.353.216.464.674.248 1.027zm1.473-3.262c-.272.441-.85.584-1.291.312-3.273-2.011-8.261-2.593-12.128-1.418-.496.15-1.022-.128-1.173-.624-.15-.496.128-1.022.624-1.173 4.417-1.341 9.919-.687 13.655 1.611.442.271.585.85.313 1.292zm.126-3.41c-3.927-2.332-10.404-2.548-14.175-1.402-.602.183-1.239-.168-1.422-.77-.183-.602.168-1.239.77-1.422 4.331-1.315 11.488-1.063 16.002 1.615.542.321.721 1.023.399 1.565-.321.542-1.022.721-1.564.401z"/></svg>
                <span className="music-label-small">SPOTIFY</span>
              </a>
            </div>
          </div>
        </div>

        {/* CBR ZONE */}
        <div 
          className="music-zone identity-card-bg zone-border-left clickable-card" 
          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}assets/cbr-profile.jpg")` }}
          onClick={() => scrollToSection('cbr320-drops')}
        >
          <div className="identity-overlay"></div>
          <div className="identity-content">
            <h3 className="zone-title">CBR320</h3>
            <div className="profile-links" onClick={(e) => e.stopPropagation()}>
              <a href="https://www.instagram.com/cbr.320/" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <InstagramIcon />
                <span className="music-label-small">INSTAGRAM</span>
              </a>
              <a href="https://soundcloud.com/cbr320" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M11.56 8.87V17h9.05c1.87 0 3.39-1.52 3.39-3.39 0-1.88-1.52-3.39-3.39-3.39-.23 0-.46.03-.68.08-.57-3.08-3.26-5.41-6.49-5.41-1.42 0-2.73.45-3.8 1.21-.4-.68-1.12-1.13-1.95-1.13-.6 0-1.14.24-1.53.62V8.87c0 .54.44.98.98.98.54 0 .97-.44.97-.98zM2.63 12.3c-.54 0-.98.44-.98.98v1.36c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-1.36c0-.54-.44-.98-.97-.98zm1.95-1.47c-.54 0-.98.44-.98.98v3.3c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-3.3c0-.54-.44-.98-.97-.98zm1.95-.97c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98zm1.95 0c-.54 0-.98.44-.98.98v4.75c0 .54.44.98.98.98.54 0 .97-.44.97-.98v-4.75c0-.54-.44-.98-.97-.98z"/></svg>
                <span className="music-label-small">SOUNDCLOUD</span>
              </a>
              <a href="https://open.spotify.com/intl-it/artist/2SgoL0eY9YL6eYFerZ5cne" target="_blank" rel="noopener noreferrer" className="brutal-card music-link-small">
                <svg viewBox="0 0 24 24" className="music-logo-defined" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.216.353-.674.464-1.027.248-2.859-1.747-6.458-2.142-10.702-1.171-.403.093-.81-.161-.903-.564-.093-.403.161-.81.564-.903 4.636-1.06 8.618-.611 11.82 1.347.353.216.464.674.248 1.027zm1.473-3.262c-.272.441-.85.584-1.291.312-3.273-2.011-8.261-2.593-12.128-1.418-.496.15-1.022-.128-1.173-.624-.15-.496.128-1.022.624-1.173 4.417-1.341 9.919-.687 13.655 1.611.442.271.585.85.313 1.292zm.126-3.41c-3.927-2.332-10.404-2.548-14.175-1.402-.602.183-1.239-.168-1.422-.77-.183-.602.168-1.239.77-1.422 4.331-1.315 11.488-1.063 16.002 1.615.542.321.721 1.023.399 1.565-.321.542-1.022.721-1.564.401z"/></svg>
                <span className="music-label-small">SPOTIFY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="music-logo-defined" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
