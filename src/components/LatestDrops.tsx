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
    <div className="drop-card-inner-swag">
      <div className="drop-image">
        <img src={img} alt={title} />
      </div>
      <div className="drop-content">
        <h4 className="drop-title glitch" data-text={title}>{title}</h4>
        <div className="player-wrapper-swag">
          {spotifyId && (
            <iframe 
              style={{ borderRadius: '0' }} 
              src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`} 
              width="100%" 
              height="80" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="spotify-iframe-swag"
            ></iframe>
          )}
          {soundcloudUrl && (
            <div className="soundcloud-container-swag">
              {/* Cover originale nitida sovrapposta (solo Desktop) */}
              <img 
                src={img} 
                alt="" 
                className="soundcloud-cover-swag"
              />
              
              {/* Player SoundCloud */}
              <iframe 
                width="100%" 
                height="80" 
                frameBorder="0" 
                allow="autoplay" 
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%2300ffff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false&show_artwork=false`}
                className="soundcloud-iframe-swag"
              ></iframe>
            </div>
          )}
        </div>
      </div>
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
