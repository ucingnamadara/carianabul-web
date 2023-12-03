import { Link } from "react-router-dom"

const Navbutton = () => {
    return(
            <div className='flex items-center justify-center '>
                <Link className="border-2 border-solid border-black rounded-md px-6 py-2 text-black cursor-pointer text-center font-semibold" to='/login'>Sign In</Link>
            </div>
        
    )
}

export default Navbutton