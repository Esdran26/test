import lastUsers from "../../data/TheLastUsers";
import Cards from "./Cards";
import TheLastComponent from "./TheLastComponent";

const TheLast = () => {
  return (
    <div className=" ml-2 w-full md:w-1/3 md:mt-4">
      <TheLastComponent title={'Lo Ultimo'}>
        <div className="flex md:flex-row  justify-between gap-2">
          <p className="md:order-1"><strong>{">"}</strong> Reciente</p>
          <span className="text-gray-500 md:order-2 md:ml-2">Popular</span>
        </div>
        <Cards users={lastUsers} />
      </TheLastComponent>
    </div>
  );
};

export default TheLast;
