import Banner from "./Banner";
import Books from "../../../assets/books.png";
import Niños from "../../../assets/niños.png";
import BloqueCards from "../Cards/Cards";
import Recient from "../Recient/Recient";
import Autores from "../Autores/Autores";

const urlApi = "https://rickandmortyapi.com/api/character";
const tips = [
  "Lee los comentarios de tus lectores",
  "Elige el género que quieres para tu público",
  "Busca siempre a un editor de confianza!",
];

const Section = () => {
  return (
    <div className="w-full sm:w-4/5 md:flex md:flex-col p-2">
      <Banner
        title={"Hola, Andres! Tienes idea sobre un nuevo libro?"}
        img={Books}
        color={`#E9A763`}
      >
        <div className="flex flex-col gap-2">
          <div className="text-md">
            <p>Vuelve tus libros tendencia mundial!</p>
            <p>¿Quieres empezar a escribir una vez más?</p>
          </div>

          <div className=" cursor-pointer text-white bg-[#343A3F] w-[200px] h-auto bg- flex justify-center gap-5 px-3 py-1 rounded-xl items-center ">
            <span>Crear Borrador </span>
            <span className="font-extrabold text-3xl">+</span>
          </div>
        </div>
      </Banner>

      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 mb-3">
        <div className=" col-span-2">
          <BloqueCards></BloqueCards>
          <Autores url={urlApi}></Autores>
        </div>
        <div className="col-span-1">
          <Recient></Recient>
        </div>
      </div>
      
      <div className="mb-4 ">
        <Banner
          img={Niños}
          color={`#343A3F`}
          title={
            "Andrés, nos gusta tu contenido y queremos darte los siguientes tips:"
          }
          
        >
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{`${index + 1}. ${tip}`}</li>
            ))}
          </ul>
        </Banner>
      </div>
    </div>
  );
};

export default Section;
