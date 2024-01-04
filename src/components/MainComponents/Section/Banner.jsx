// eslint-disable-next-line react/prop-types
const Banner = ({ color ,title,children, img}) => {
    return (
        <>
            <div className={`bg-[${color}] text-white flex justify-between rounded-3xl font-medium ml-2 md:w-full w-full `}>
                <div className="px-14 pt-5  text-white-50 w-2/3 flex flex-col justify-between">
                    <h1 className="text-2xl leading-tight font-normal">
                    {title} 
                    </h1>
                    <div className="py-5 ">
                    {children}
                    </div>

                </div>
                <div className="w-1/3 h-130">
                    <img
                        className="object-contain mt-6"
                        src={img}
                    />
                </div>
            </div>
        </>
    )
};





// esto de debe poner en el App, 

export default Banner;