import './App.css'

function App() {
  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">LUMI<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-button">Shop Now ↗</button>
      </nav>

      {/* Hero Section */}
      <main className="hero" id="home">

        <div className="hero-content">

          <div className="tag">
            ✦ YOUR SKIN, YOUR STORY
          </div>

          <h1>
            Glow Naturally.
            <br />
            <span>Feel Beautiful.</span>
          </h1>

          <p className="description">
            Discover the beauty of simple skincare.
            Clean ingredients, gentle formulas, and
            a little love for your skin every day.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Collection <span>↗</span>
            </button>

            <button className="secondary-btn">
              Our Philosophy
            </button>
          </div>

          <div className="rating">
            <div className="stars">★★★★★</div>
            <p>Loved by 2,000+ happy customers</p>
          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-image">

          <div className="image-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85"
            alt="Luxury skincare products"
          />

          <div className="floating-card">
            <span>✦</span>
            <div>
              <h4>Pure Beauty</h4>
              <p>Made with love</p>
            </div>
          </div>

          <div className="side-text">
            NATURAL BEAUTY • EVERY DAY
          </div>

        </div>

      </main>

      {/* Bottom Section */}
      <section className="features" id="products">

        <div className="feature">
          <span>✿</span>
          <div>
            <h3>Natural Ingredients</h3>
            <p>Nature-inspired formulas</p>
          </div>
        </div>

        <div className="feature">
          <span>♡</span>
          <div>
            <h3>Skin First</h3>
            <p>Gentle care for every day</p>
          </div>
        </div>

        <div className="feature">
          <span>✧</span>
          <div>
            <h3>Clean Beauty</h3>
            <p>Simple. Pure. Effective.</p>
          </div>
        </div>

      </section>

      <footer>
        © 2026 LUMI Beauty. Made with love.
      </footer>

    </div>
  )
}

export default App