import { Link } from "react-router-dom"

const Navlink = ({text, to, isCurrent}) => {
    const className = isCurrent + " "
    return(<div className={className}><Link to={to}>{text}</Link></div>)
}

export default Navlink