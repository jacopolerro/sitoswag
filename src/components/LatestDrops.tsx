import { useState, useEffect } from 'react';

const FIVESEVEN_DROPS = [
  {
    title: "MILLI FLOW",
    artist: "FIVESEVEN",
    img: `${import.meta.env.BASE_URL}assets/milli-flow.jpg`,
    spotifyId: "4ixfEYxE37EqYshDaqqkoH"
  },
  {
    title: "NON CI VADO AL",
    artist: "FIVESEVEN",
    img: `${import.meta.env.BASE_URL}assets/non-ci-vado-al.jpg`,
    spotifyId: "3KohbjrgKKgbIUZAqXS4CU"
  },
  {
    title: "ROCK DVR",
    artist: "FIVESEVEN",
    img: `${import.meta.env.BASE_URL}assets/rock-dvr.jpg`,
    spotifyId: "6WWtmHKupQx8vBUNon7cGj"
  },
  {
    title: "LIVE IS LIFE (RMX)",
    artist: "FIVESEVEN",
    img: `${import.meta.env.BASE_URL}assets/live-is-life.png`,
    soundcloudUrl: "https://soundcloud.com/gvmwav/live-is-life-fiveseven-remix"
  }
];

const CBR320_DROPS = [
  {
    title: "SPACESHIP",
    artist: "CBR320",
    img: `${import.meta.env.BASE_URL}assets/spaceship.jpg`,
    soundcloudUrl: "https://soundcloud.com/cbr320/spaceship-cbr320-edit"
  },
  {
    title: "DIMELO QUE ES",
    artist: "CBR320",
    img: `${import.meta.env.BASE_URL}assets/born-again.jpg`,
    spotifyId: "2XwSeZA8oxBOq3uISDPtBu"
  }
];

const DropCard = ({ track, isActive, onPlay }: any) => (
  <div className={`drop-card-swag brutal-card ${isActive ? 'active-track' : ''}`} onClick={() => onPlay(track)}>
    <div className="drop-image">
      <img src={track.img} alt={track.title} />
      {isActive && (
        <div className="active-track-overlay">
          <span className="live-indicator">ON AIR</span>
          <div className="playing-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      )}
    </div>
    <div className="drop-content">
      <h4 className="drop-title glitch" data-text={track.title}>{track.title}</h4>
      <p className="drop-artist-label">{track.artist}</p>
      <div className="play-hint">CLICK TO PLAY</div>
    </div>
  </div>
);

export const LatestDrops = () => {
  const [activeTrack, setActiveTrack] = useState<any>(null);

  return (
    <section id="drops" className="section border-top">
      <div className="drops-container">
        {/* SEZIONE FIVESEVEN */}
        <div className="artist-drops-section">
          <h2 className="title artist-title-big">FIVESEVEN <span className="red-glow-text">DROPS</span></h2>
          <div className="drops-grid-swag">
            {FIVESEVEN_DROPS.map((track, i) => (
              <DropCard 
                key={i} 
                track={track} 
                isActive={activeTrack?.title === track.title}
                onPlay={setActiveTrack}
              />
            ))}
          </div>
        </div>

        {/* SEZIONE CBR320 */}
        <div className="artist-drops-section border-top-dashed">
          <h2 className="title artist-title-big">CBR320 <span className="red-glow-text">DROPS</span></h2>
          <div className="drops-grid-swag">
            {CBR320_DROPS.map((track, i) => (
              <DropCard 
                key={i} 
                track={track} 
                isActive={activeTrack?.title === track.title}
                onPlay={setActiveTrack}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PERSISTENT BOTTOM PLAYER BAR */}
      {activeTrack && (
        <div className="bottom-player-bar-swag slide-up">
          <div className="player-bar-content">
            <div className="player-bar-info">
              <img src={activeTrack.img} alt="" className="mini-cover-bar" />
              <div className="bar-text-info">
                <span className="bar-track-name">{activeTrack.title}</span>
                <span className="bar-artist-name">{activeTrack.artist}</span>
              </div>
            </div>
            
            <div className="player-bar-central">
              <div className="waveform-container">
                {[...Array(60)].map((_, i) => (
                  <div 
                    key={i} 
                    className="wave-bar" 
                    style={{ 
                      height: `${20 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.03}s`
                    }}
                  ></div>
                ))}
              </div>
              
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
    </section>
  );
};
