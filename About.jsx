import './About.css';

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src="cupcakes.jpg" alt="Delicious cupcakes" className="about-image" />
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">ABOUT US</h4>
          <h2 className="about-title">Welcome to RT Cakes</h2>
          <p className="about-tagline">
            <em>Ready To Taste - Freshly baked cakes with love and the finest ingredients.</em>
          </p>
          <p className="about-text">
            At RT Cakes, we believe every celebration deserves the perfect cake. 
            Our passionate bakers craft each creation with premium ingredients, 
            bringing joy to every slice. From classic flavors to custom designs, 
            we make your sweet dreams come true.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}