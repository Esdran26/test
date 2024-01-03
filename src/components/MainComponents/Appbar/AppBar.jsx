import Icons from "./Icons";
import Profile from "./Profile";
import Search from "./Search";

const AppBar = () => {
    return (
        <nav className=" m-3 p-3 flex justify-between ">
            <Search />
            <div className="flex gap-12">
            <Icons />
            <Profile name={'Andrés Vargas'}/>
            </div> 
        </nav>
    );
}

export default AppBar;
