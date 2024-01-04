import Icons from "./Icons";
import Profile from "./Profile";
import Search from "./Search";

const AppBar = () => {
    return (
        <nav className="md:w-full m-3 p-3 flex flex-col md:justify-between md:flex-row">
            <Search />
            <div className="mt-2 flex md:gap-12 justify-between">
            <Icons />
            <Profile name={'Andrés Vargas'}/>
            </div> 
        </nav>
    );
}

export default AppBar;
