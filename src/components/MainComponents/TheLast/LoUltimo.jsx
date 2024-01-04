import lastUsers from "../../data/TheLastUsers";
import Cards from "./Cards";
import TheLastComponent from "./TheLastComponent";

const TheLast = () => {
  return (
    <div className=" ml-7 w-full md:w-1/3 md:mt-4">
      <TheLastComponent title={'Lo Ultimo'}>
        <div className="flex md:flex-row gap-2">
          <p ><strong>{">"}</strong> Reciente</p>
          <span className="text-gray-500 ">Popular</span>
        </div>
        <Cards users={lastUsers} />
      </TheLastComponent>
    </div>
  );
};

export default TheLast;
