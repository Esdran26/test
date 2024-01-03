import AppBar from "./MainComponents/Appbar/AppBar";
import TheLast from "./MainComponents/TheLast/LoUltimo";
// import LoUltimo from "./MainComponents/LoUltimo/LoUltimo";
import Section from "./MainComponents/Section/Section";

const Main = () => {
  return (
    <div className="bg-white md:flex flex-col rounded-l-3xl  transform -translate-x-4  z-1 ">
      <AppBar />
      <div className="flex gap-3 ">
      <Section />
      
      <TheLast></TheLast>
      
     
      </div>
      
    </div>
  );
};

export default Main;