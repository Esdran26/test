// eslint-disable-next-line react/prop-types
const TheLastComponent = ({ title, children }) => {
    return (
        <div className="p-4 flex flex-col bg-[#F2F2F2] m-2 rounded-lg">
            <div className="flex justify-between">
                <h1 className="font-medium text-2xl">{title}</h1>
                <button className="bg-[#E6EDE5] text-[#7DA870] px-2 rounded-md">Ver Todo</button>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default TheLastComponent;
