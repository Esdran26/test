import PropTypes from 'prop-types';


const Banner = ({ color ,title,children, img}) => {
    return (
        <>
            <div className={`bg-[${color ?? '#E9A763'}] text-white flex justify-between rounded-3xl font-medium  md:w-full w-full md:ml-2 `}>
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
                        className="object-contain mt-[180px] md:mt-6"
                        src={img}
                    />
                </div>
            </div>
        </>
    )
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
export default Banner;