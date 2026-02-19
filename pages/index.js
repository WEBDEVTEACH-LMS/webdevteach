import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="nav">
        <h2 className="logo">WebDevTeach</h2>

        <div className="navlinks">
          <Link href="/login">Login</Link>
          <Link href="/register">
            <button className="primaryBtn">Join Now</button>
          </Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">
        <h1>Build Tech Skills. Get Job Ready.</h1>
        <p>
          Learn Web Development, Cybersecurity, AI Tools & Freelancing  
          with practical training.
        </p>

        <Link href="/register">
          <button className="primaryBtn big">Start Learning ₹999/month</button>
        </Link>
      </section>


      {/* FEATURES */}
      <section className="features">
        <div className="card">💻 Live + Recorded Classes</div>
        <div className="card">📚 Real Projects</div>
        <div className="card">🚀 Freelancing + Job Ready</div>
        <div className="card">🎯 Beginner Friendly</div>
      </section>


      {/* COURSES */}
      <section className="courses">
        <h2>What You Will Learn</h2>

        <div className="grid">
          <div className="course">Web Development</div>
          <div className="course">Cybersecurity</div>
          <div className="course">Networking</div>
          <div className="course">AI Tools</div>
          <div className="course">Freelancing</div>
          <div className="course">Real Projects</div>
        </div>
      </section>


      {/* WHY US */}
      <section className="why">
        <h2>Why WebDevTeach?</h2>
        <p>
          We focus on practical skills, not theory.  
          Our goal is simple — help students earn money with tech skills.
        </p>
      </section>


      {/* CTA */}
      <section className="cta">
        <h2>Start Your Tech Career Today</h2>
        <Link href="/register">
          <button className="primaryBtn big">Join Now</button>
        </Link>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        © 2026 WebDevTeach • Tech Skills Academy
      </footer>

    </div>
  );
}
