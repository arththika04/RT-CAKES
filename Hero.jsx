// Hero.jsx
import './style.css';

export default function Hero() {
  return (
    <>
      <nav className="navbar">
        {/* nav links ... */}
      </nav>

      <section className="hero">
        {/* un hero HTML content same */}
      </section>
    </>
  );
}
import './style.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4 className="hero-subtitle">RT CAKES</h4>
        <h1 className="hero-title">Delicious Cake<br/>For Everyone</h1>
        <p className="hero-text">Freshly baked cakes with the best ingredients, perfect for every celebration.</p>
        <button className="hero-btn">Explore Menu</button>
      </div>
      <div className="hero-image-wrapper">
        <img src="cake.jpeg" alt="Delicious cake" className="hero-image" />
      </div>
    </section>
  );
}