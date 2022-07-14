import NavItems from "./NavItems.jsx"
import ImputSearch from "./ImputSearch"


const Navegacion = (props) => {
    return(
        <nav className="navBar">
            <div className="img">
                <img src={props.logo} alt="..." />
            </div>
            <ImputSearch />
            <NavItems /> 
            
        </nav>
    )
}

export default Navegacion