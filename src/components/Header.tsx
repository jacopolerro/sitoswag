import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se abbiamo scrollato più di 50px, nascondi l'header
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-header ${isScrolled ? 'header-hidden' : ''}`}>
      <nav className="top-nav">
        <a href="#profiles">PROFILES</a>
        <a href="#drops">DROPS</a>
        <a href="#gallery">VISUALS</a>
        <a href="#booking" className="nav-pill-red">BOOKING</a>
      </nav>
    </header>
  );
};
