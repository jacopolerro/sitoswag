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

export const LatestDrops = ({ activeTrack, onPlay }: any) => {
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
                onPlay={onPlay}
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
                onPlay={onPlay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
