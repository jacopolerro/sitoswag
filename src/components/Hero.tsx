export const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8, // Scrolla quasi tutta la prima schermata per invitare a scoprire
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      <div className="hero-content" onClick={handleScroll}>
        <h1 className="glitch main-title" data-text="FIVESEVEN">FIVESEVEN</h1>
        <h1 className="glitch main-title secondary" data-text="CBR320">CBR320</h1>
      </div>
    </section>
  );
};
