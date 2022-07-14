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

    const [claseD, setclaseD] = useState(false)

    return(
        <div>
            <ul className={`navCenter ${claseD ? 'navBar__show':''}`}>
                {objectNav.map(items => {
                    return(
                    <li key={items.name}>
                        <a href={items.link}>{items.name}</a>
                    </li>
                    )
                })}
            </ul>
            <i 
            onClick={() => setclaseD(!claseD)}
            className="icons icons-style"
            >
            </i>
        </div>
    )
}
            

export default NavItems