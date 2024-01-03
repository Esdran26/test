import { useState } from "react";
import { FaBook } from "react-icons/fa";

const options = ["Inicio", "Libros", "Editores", "Lectores"];

const MenuLateral = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const item = options.map((item, index) => (
    <li
      key={item}
      className={` ${index === selectedItem ? ' text-white' : ''}`}
      onClick={() => handleItemClick(index)}
    >
        <a className="cursor-pointer">{index === selectedItem ? ' > ' + item :  item}</a>

    </li>
  ));

  return (
    <>
      <div className="bg-[#7DA870] h-full flex flex-col items-center justify-around ">
        <div className=" rounded-lg m-3 p-2 bg-[#90B687]">
          <FaBook className="text-4xl text-gray-100" />
        </div>
        <ul className="text-gray-200 gap-2 flex flex-col items-center justify-center mb-8">
          {item}
        </ul>
        <div className="mb-5">
          <button className="bg-[#90B687] text-white px-6 py-[5px] rounded-lg shadow-md">Crear <strong>  +</strong></button>
        </div>
      </div>
    </>
  );
};

export default MenuLateral;
