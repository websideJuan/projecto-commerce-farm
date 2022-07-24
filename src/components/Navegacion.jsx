import NavItems from "./NavItems.jsx"


const Navegacion = (props) => {
    return(
        <nav className="navbar flex-column">
            <div className="img">
                <img src={props.logo} alt="..." />
            </div>
            <NavItems /> 
        </nav>
    )
}

export default Navegacion