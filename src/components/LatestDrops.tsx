const FIVESEVEN_DROPS = [
  {
    title: "MILLI FLOW",
    tag: "NEW ERA",
    img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    spotifyId: "4ixfEYxE37EqYshDaqqkoH"
  },
  {
    title: "NON CI VADO AL",
    tag: "VISION",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    spotifyId: "3KohbjrgKKgbIUZAqXS4CU"
  }
];

const CBR320_DROPS = [
  {
    title: "DIMELO QUE ES",
    tag: "ADE 2025",
    img: `${import.meta.env.BASE_URL}assets/born-again.jpg`,
    spotifyId: "2XwSeZA8oxBOq3uISDPtBu"
  },
  {
    title: "ROCK DVR",
    tag: "HOT",
    img: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800",
    spotifyId: "6WWtmHKupQx8vBUNon7cGj"
  }
];

const DropCard = ({ title, tag, img, spotifyId }: any) => (
  <div className="drop-card-swag brutal-card">
    <div className="drop-image">
      <img src={img} alt={title} />
      <div className="drop-overlay-tag">{tag}</div>
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
        <div className="drops-grid-swag">
          {FIVESEVEN_DROPS.map((drop, i) => <DropCard key={i} {...drop} />)}
        </div>
      </div>

      {/* SEZIONE CBR320 */}
      <div id="cbr320-drops" className="artist-drops-section border-top-dashed">
        <div className="section-header-swag">
          <h2 className="title artist-title-big">CBR320 <span className="red-glow-text">DROPS</span></h2>
        </div>
        <div className="drops-grid-swag">
          {CBR320_DROPS.map((drop, i) => <DropCard key={i} {...drop} />)}
        </div>
      </div>
    </div>
  </section>
);
