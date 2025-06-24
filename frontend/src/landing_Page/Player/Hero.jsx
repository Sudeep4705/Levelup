function Hero() {
  return (
    <div className="container py-5">
  <div className="row justify-content-center text-center">
    <div className="col-lg-10">
      <h1
        style={{
          transition: "all 0.6s ease-in-out",
          opacity: 1,
          transform: "translateY(0)",
        }}
        className="display-4 fw-bold mb-4 text-primary"
      >
        Welcome to Our Players World
      </h1>

      <h2 className="fs-3 fw-semibold mb-3 text-dark">
        🎮 Explore Our Elite Player Roster
      </h2>

      <p className="text-muted fs-5">
        Dive into the heart of our gaming universe. Meet the fierce competitors
        who make up our dynamic community — from rising stars to pro legends.
        Discover their <strong>roles</strong>, <strong>stats</strong>, and
        <strong> recent performances</strong> in competitive arenas.
      </p>

      <p className="text-muted fs-6 mt-3">
        Whether you're a fan, a scout, or a gamer yourself, this is the best
        place to track player progress and explore team synergy.
      </p>

      <hr className="my-4" />

      <p className="fs-6 text-secondary">
        🔥 Updated weekly • 📊 Real-time stats • 💬 Community approved
      </p>
    </div>
  </div>
</div>

  );
}

export default Hero;
