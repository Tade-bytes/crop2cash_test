import CashCard from "../Blocks/CashCard";
import Manages from "../Blocks/Manage";
import Contact from "../Components/Contact";
import Blog from "../Blocks/Blog";
import Footer from "../Components/Footer";
import Video from "../Blocks/Video";

function Business() {
  return (
    
    <div className="w-[100%] flex flex-col bg-[#fff] justify-center items-center gap-1 sm:g-4">
      <CashCard />
      <Manages />
      <Video />
       <Blog /> 
      <Contact />
      <Footer /> 
       
      
         
        
       
    </div> 
  );
}
export default Business;
