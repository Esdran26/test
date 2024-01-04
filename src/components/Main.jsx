import AppBar from "./MainComponents/Appbar/AppBar";
import TheLast from "./MainComponents/TheLast/LoUltimo";
import Section from "./MainComponents/Section/Section";

const Main = () => {
  return (
    <div className="overflow-x-hidden bg-white md:flex md:flex-col md:rounded-l-3xl md:transform md:-translate-x-4 z-1">
      <AppBar />
      <div className="flex flex-col md:flex-row gap-3">
        <Section />
        <TheLast></TheLast>
      </div>
    </div>
  );
};

export default Main;
