import unsplash from "../Asset/unsplash.png";
import Nav from '../Components/Nav';
import HomeHero from "../Blocks/HomeHero";
// import Button from "./Button";

function Home() {
  return (
    <div>
      <body className="homebody">
        <header >
            <Nav />
          
        </header>
          <section className="hero-section">
           <HomeHero />
            <div className="banner">
              <img alt='farmer' src={unsplash} />
              
              
            </div>
        </section> 
      </body>
    </div>
  );
}
export default Home;
