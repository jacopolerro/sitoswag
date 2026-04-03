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
  }
];

const CBR320_DROPS = [
  {
    title: "DIMELO QUE ES",
    img: `${import.meta.env.BASE_URL}assets/born-again.jpg`,
    spotifyId: "2XwSeZA8oxBOq3uISDPtBu"
  }
];

const DropCard = ({ title, img, spotifyId }: any) => (
  <div className="drop-card-swag brutal-card">
    <div className="drop-image">
      <img src={img} alt={title} />
    </div>
    <div className="drop-content">
      <h4 className="drop-title glitch" data-text={title}>{title}</h4>
      <iframe 
        style={{ borderRadius: '0' }} 
        src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`} 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
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
