import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

const Icons = () => {
    return (
        <div>
            <div className="ml-[20px] flex gap-3">
                <IoIosNotificationsOutline className=" cursor-pointer rounded-lg w-[30px] h-[30px] bg-orange-100 text-orange-500" />
                <TiMessages className="cursor-pointer rounded-lg p-[3px] bg-green-100 text-green-600 w-[30px] h-[30px]" />
            </div>
        </div>
    );
}

export default Icons;
