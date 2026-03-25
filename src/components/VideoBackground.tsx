export const VideoBackground = () => (
  <div className="video-bg-container">
    <div className="video-overlay"></div>
    {/* Lo sfondo principale con l'immagine "live" */}
    <div className="hero-image-bg" style={{ backgroundImage: 'url("/assets/hero-bg.jpg")' }}></div>
    
    {/* Overlay pulsante per le luci rosse */}
    <div className="red-pulse-overlay"></div>
    
    <div className="noise-bg"></div>
    <div className="scanlines"></div>
  </div>
);
