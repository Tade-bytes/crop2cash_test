import c2c_logo2 from "./Asset/c2c_logo2.png";

function Home() {
  return (
    <div>
      <body className="homebody">
        <header className="nav-bar">
          <div className="nav-logo">
            <a href="">
              <img src={c2c_logo2} alt="" />
            </a>
          </div>
          <div>
            <nav>
              <ul className="nav-button">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Agents</a>
                </li>
                <li>
                  <a href="">About</a>{" "}
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </header>
        <section className="hero-section">
          <div className="hero">
            <h4>
              Making formal financing a 100% transparent process for banks while
              providing much needed capital to <span>farmers.</span>
            </h4>
            <p>
              Join us to make the world a better place one farmer at a time!
            </p>
            </div>
            <div className=" banner">

            </div>
        </section>
      </body>
    </div>
  );
}
export default Home;
