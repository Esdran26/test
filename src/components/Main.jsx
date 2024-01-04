import AppBar from "./MainComponents/Appbar/AppBar";
import TheLast from "./MainComponents/TheLast/LoUltimo";
import Section from "./MainComponents/Section/Section";

const Main = () => {
  return (
    <div className="bg-white md:flex md:flex-col rounded-l-3xl transform -translate-x-4 z-1">
      <AppBar />
      <div className="flex flex-col md:flex-row gap-3">
        <Section />
        <TheLast></TheLast>
      </div>
    </div>
  );
};

export default Main;
