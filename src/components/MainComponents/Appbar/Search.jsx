import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="relative">
      <input
        className="bg-gray-100 pl-8 pr-4 py-2 rounded-lg w-full md:w-[400px] outline-none"
        type="search"
        placeholder="Buscar por libros, personas ó articulos"
      />
      <CiSearch className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default Search;
