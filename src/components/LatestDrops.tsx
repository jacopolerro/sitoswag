const FIVESEVEN_DROPS = [
  {
    title: "MILLI FLOW",
    img: `${import.meta.env.BASE_URL}assets/milli-flow.jpg`,
    spotifyId: "4ixfEYxE37EqYshDaqqkoH"
  },
  {
    title: "NON CI VADO AL",
    img: `${import.meta.env.BASE_URL}assets/non-ci-vado-al.jpg`,
    spotifyId: "3KohbjrgKKgbIUZAqXS4CU"
  },
  {
    title: "ROCK DVR",
    img: `${import.meta.env.BASE_URL}assets/rock-dvr.jpg`,
    spotifyId: "6WWtmHKupQx8vBUNon7cGj"
  },
  {
    title: "LIVE IS LIFE (RMX)",
    img: `${import.meta.env.BASE_URL}assets/live-is-life.png`,
    soundcloudUrl: "https://soundcloud.com/gvmwav/live-is-life-fiveseven-remix"
  }
];

const CBR320_DROPS = [
  {
    title: "SPACESHIP",
    img: `${import.meta.env.BASE_URL}assets/spaceship.jpg`,
    soundcloudUrl: "https://soundcloud.com/cbr320/spaceship-cbr320-edit"
  },
  {
    title: "DIMELO QUE ES",
    img: `${import.meta.env.BASE_URL}assets/born-again.jpg`,
    spotifyId: "2XwSeZA8oxBOq3uISDPtBu"
  }
];

const DropCard = ({ title, img, spotifyId, soundcloudUrl }: any) => (
  <div className="drop-card-swag brutal-card">
    <div className="drop-image">
      <img src={img} alt={title} />
    </div>
    <div className="drop-content">
      <h4 className="drop-title glitch" data-text={title}>{title}</h4>
      {spotifyId && (
        <iframe 
          style={{ borderRadius: '0' }} 
          src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`} 
          width="100%" 
          height="80" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      )}
      {soundcloudUrl && (
        <div style={{ 
          position: 'relative', 
          background: '#000', 
          height: '80px', 
          border: '1px solid #222', 
          overflow: 'hidden' 
        }}>
          {/* Cover originale nitida sovrapposta */}
          <img 
            src={img} 
            alt="" 
            style={{ 
              position: 'absolute', 
              left: '0', 
              top: '0', 
              height: '80px', 
              width: '80px', 
              zIndex: 10, 
              objectFit: 'cover',
              borderRight: '1px solid #222'
            }} 
          />
          
          {/* Player SoundCloud: invertito per essere nero con tasto play rosso */}
          <iframe 
            width="800px" // Larghezza fissa molto ampia per forzare la visibilità del titolo interno
            height="80" 
            frameBorder="0" 
            allow="autoplay" 
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%2300ffff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false&show_artwork=false`}
            style={{ 
              filter: 'invert(1) brightness(1.2)', 
              position: 'absolute',
              left: '80px', // Posizionato esattamente dopo la cover personalizzata
              top: '0',
              zIndex: 5
            }}
          ></iframe>
        </div>
      )}
    </div>
  </div>
);

export const LatestDrops = () => (
  <section id="drops" className="section border-top">
    <div className="drops-container">
      {/* SEZIONE FIVESEVEN */}
      <div id="fiveseven-drops" className="artist-drops-section">
        <div className="section-header-swag">
          <h2 className="title artist-title-big">FIVESEVEN <span className="red-glow-text">DROPS</span></h2>
        </div>
        <div className="drops-scroll-wrapper">
          <div className="drops-grid-swag scrollable">
            {FIVESEVEN_DROPS.map((drop, i) => <DropCard key={i} {...drop} />)}
          </div>
        </div>
      </div>

      {/* SEZIONE CBR320 */}
      <div id="cbr320-drops" className="artist-drops-section border-top-dashed">
        <div className="section-header-swag">
          <h2 className="title artist-title-big">CBR320 <span className="red-glow-text">DROPS</span></h2>
        </div>
        <div className="drops-scroll-wrapper">
          <div className="drops-grid-swag scrollable">
            {CBR320_DROPS.map((drop, i) => <DropCard key={i} {...drop} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
