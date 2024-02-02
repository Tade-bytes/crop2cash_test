import unsplash from "../Asset/unsplash.png";
import Nav from '../Components/Nav';
import Home_hero from "../Blocks/Home-hero";
// import Button from "./Button";

function Home() {
  return (
    <div>
      <body className="homebody">
        <header >
            <Nav />
          
        </header>
        <section className="hero-section">
          <Home_hero />
            <div className="banner">
              <img alt='' src={unsplash} />
              
              
            </div>
        </section>
      </body>
    </div>
  );
}
export default Home;
