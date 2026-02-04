import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-image-wrapper">
        <img src="cupcakes.jpg" alt="Delicious cupcakes" className="about-image" />
      </div>
      <div className="about-content">
        <h4 className="about-subtitle">ABOUT US</h4>
        <h2 className="about-title">Welcome to our Bakery</h2>
        <p className="about-tagline">
          <em>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur uis autem vel eum.</em>
           </p>
        <p className="about-text">
          Nor again is there anyone who loves or pursues or desires to obtain pain of 
          itself, because it is pain, but because occasionally circumstances occur in 
          which toil and pain can procure him some great pleasure. To take a trivial 
          example, which of us ever undertakes laborious physical exercise.
        </p>
        <button className="about-btn">Learn More</button>
      </div>
    </section>
  );
}