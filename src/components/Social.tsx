import j5Icon from '../assets/j5.png';
import f6Pattern from '../assets/f6.png';

const SOCIAL_LINKS = [
  { name: "BABYLON", url: "https://www.instagram.com/babylonroma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { name: "BUSCAME", url: "https://www.instagram.com/buscamevision?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { name: "UNDERHYTHM", url: "https://www.instagram.com/underhythm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { name: "FIVESEVEN", url: "https://www.instagram.com/fivesevennnnnnnn/" },
  { name: "CBR.320", url: "https://www.instagram.com/cbr.320/" }
];

export const Social = () => (
  <section id="social" className="section border-top">
    <div className="social-container">
      <div className="section-header-swag">
        <h2 className="title artist-title-big">FOLLOW THE <span className="red-glow-text">NETWORK</span></h2>
      </div>
      
      <div className="social-grid-swag">
        {SOCIAL_LINKS.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="social-pill-swag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="social-name">{link.name}</span>
          </a>
        ))}
      </div>

      <div className="pattern-divider-swag">
        <img src={f6Pattern} alt="" />
      </div>

      <div className="social-footer-branding">
        <img src={j5Icon} alt="" className="footer-icon-swag" />
        <p className="footer-copyright">
          © 2026 FIVESEVEN CBR. 
          <a href="https://www.instagram.com/jweb.69?igsh=NnpqNXV0MmplenEx" target="_blank" rel="noopener noreferrer" className="jweb-link"> PRODUCED BY JWEB</a>
        </p>
      </div>
    </div>
  </section>
);
