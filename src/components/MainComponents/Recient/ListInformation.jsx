// eslint-disable-next-line react/prop-types
const ListInformation = ({title, users, children }) => {
    return (
      <div className="">
      <div className="p-4 flex flex-col  bg-[#F2F2F2] m-2 rounded-md shadow-md">
      <div className="flex justify-between">
      <h1 className="font-medium text-2xl">{title}</h1>
      <button className="bg-[#E6EDE5] text-[#7DA870] px-2 rounded-md">Ver Todo</button>
     
      </div>
      <p >{children}</p>
        {
            
            // eslint-disable-next-line react/prop-types
            users.map((user, index) => (
          
            <div key={index} className="py-2 px-2 ">
              <span className="font-medium">{user.name}</span>
              <span className="text-gray-700y-"> {user.info}</span>
              <span>{user.date}</span>
              <hr className="mt-2"></hr>
            </div>

                      
        ))}
        </div>
      </div>
    );
  };
  
  export default ListInformation;