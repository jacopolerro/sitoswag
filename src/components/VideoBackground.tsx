export const VideoBackground = () => (
  <div className="video-bg-container">
    <div className="video-overlay"></div>
    {/* Lo sfondo principale con l'immagine "live" */}
    <div className="hero-image-bg" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}assets/j7.png")` }}></div>
    
    {/* Overlay pulsante per le luci rosse */}
    <div className="red-pulse-overlay"></div>
    
    <div className="noise-bg"></div>
    <div className="scanlines"></div>
  </div>
);
