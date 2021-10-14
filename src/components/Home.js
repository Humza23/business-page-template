import React from "react";

const Home = () => {
  return (
    <section id="home">
      <main>
        <header>
          <div>
            <h1>Welcome!</h1>
            <p>Please buy our items! </p>
          </div>
          <button>Call to Action</button>
        </header>
      </main>
      <video autoPlay muted loop id="background-video">
        <source src="./videos/beach-2.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Home;
