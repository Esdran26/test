import { useState, useEffect } from "react";
import PropTypes from 'prop-types'


const AutorInformation = ({title, url }) => {

  const [dates, setDates] = useState(null);

  useEffect(() => {
      const fetchUsers = async () => {
          // eslint-disable-next-line no-useless-catch
          try {
              const response = await fetch(url);
              const data = await response.json();
              const firstThreeCharacters = data.results.slice(0, 3);

             setDates(firstThreeCharacters);
          } catch (error) {
              throw error;
          }
      }

      fetchUsers();
  }, [])
  
    return (
      <div className="md:m-2 w-full  ml-7 mt-2">
      <div className="  p-4 flex flex-col  bg-[#F2F2F2] rounded-lg shadow-md">
      <div className="flex justify-between">
      <h1 className="font-medium text-2xl">{title}</h1>
      <button className="bg-[#E6EDE5] text-[#7DA870] px-2 rounded-md">Ver Todo</button>
      </div>
        {
            
            dates ? dates.map((user, index) => (
          
            <div key={index} className=" grid mt-2 py-2 px-2 grid-cols-3 ">
            <div className="col-span-2 flex gap-6">
            <img className=" w-[40px] h-[40px] object-cover rounded-lg" src={user.image} alt="hola" />

                <div className="col-span-1">
              <span className="font-medium">{user.name}</span>
              <p className="text-gray-600"> {user.species}</p>
             
              <hr className="mt-2"></hr>
              
              </div>
            </div>
              
              <div className="col-span-1 ml-4">
                Status
                <span className=" text-[20px] font-medium ml-4">{user.status }</span>
              </div>
            </div>

                      
        )): <div>Cargando datos...</div>}
        </div>
      </div>
    );
  };
  AutorInformation.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
  }

  export default AutorInformation;