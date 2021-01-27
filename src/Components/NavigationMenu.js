import React from "react"
import {Link} from  "react-router-dom"


function NavigationMenu(props) {


    return (
        <>
            <div className="font-bold py-3">
                <h1>This is the menu</h1>
            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="text-blue-500 py-3 border-t border-b block"
                        onDoubleClick={props.closeMenu}>Home</Link>
                </li>
                <li> 
                    <Link
                        to="/about"
                        className="text-blue-500 py-3 border-b block"
                        onDoubleClick={props.closeMenu}>About</Link>
                </li>
            </ul>
        </>
    )
}

export default NavigationMenu