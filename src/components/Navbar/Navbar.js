import { Link } from "react-router-dom"
import Navlink from "./NavbarElement/Navlink"
import Navbutton from "./NavbarElement/NavButton"

const Navbar = ({page}) => {
    return(<div className="flex sticky top-0 z-50 flex-row justify-between w-full h-16 px-5 items-center border-2 border-black/20">
        <Link className='text-center lm:text-4xl text-2xl font-bold' to='/'>CariAnabul</Link>
        <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-3 justify-center items-center">
                <Navlink text={'Explore'} to='/explore' isCurrent={'explore' === page? 'font-bold' : 'font-normal'}></Navlink>
                <Navlink text={'Notification'} to='/notification' isCurrent={'notification' === page? 'font-bold' : 'font-normal'}></Navlink>
                <Navlink text={'Message'} to='/message' isCurrent={'message' === page? 'font-bold' : 'font-normal'}></Navlink>
            </div>
            <Navbutton></Navbutton>
        </div>
    </div>   
)}

export default Navbar