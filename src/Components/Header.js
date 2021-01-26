import React from "react"
import Navbar from "./Navbar"
function Header(){
    return(
        <div className="border-b  p-3 flex justify-between items-center">
            <p className="font-bold">This is a header</p>
            <Navbar/>
        </div>
    )
}


export default Header