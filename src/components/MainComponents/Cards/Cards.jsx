const estadisticas = {
    "Libreria": "124",
    "Me gusta": "155k",
    "Lectores": "8k",
    "Opiniones": "163 k"
};

// eslint-disable-next-line react/prop-types
const Cards = ({ data }) => {
    return (
        <>
            {Object.keys(data).map((key) => (
                <div key={key} className=" border ml-2 mt-2 rounded-2xl h-[5rem] w-[100px] flex flex-col  p-4 border-solid border-1.5 bg-gray/5 shadow-md justify-around">
                    <ul className="w-full  flex flex-col justify-between items-start">
                        <li key={key} className="opacity-50 text-sm">{`${key}`}</li>
                        <li key={key+1} className="font-medium text-2xl">{`${data[key]}`}</li>
                    </ul>
                </div>
            ))}
        </>
    )
};


const BloqueCards = () => {
    return (
        <>
            <div className="flex gap-5">
                <Cards data={estadisticas}></Cards>
            </div>
        </>
    )
};




export default BloqueCards;