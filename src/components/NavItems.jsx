import { useState } from "react"


const NavItems = () => {
    const objectNav = [
        {
            link:"https://www.google.com",
            name:"Home"
        },
        {
            link:"https://www.google.com",
            name:"Section"
        },
        {
            link:"https://www.google.com",
            name:"SectioN"
        }
    ]

    const [claseD, setclaseD] = useState(true);
    return(
        <div>
            <ul className={`navbar-nav ${claseD ? 'd-none':''}`}>
                {objectNav.map(items => {
                    return(
                    <li key={items.name} className="nav-item">
                        <a href={items.link} className="nav-link">{items.name}</a>
                    </li>
                    )
                })}
            </ul>
            <button 
            onClick={() => setclaseD(!claseD)}
            className="btn px-4 mb-2 icons-style"
            >
            </button>
        </div>
    )
}
            

export default NavItems