import React, { useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useSpring,useTransition, animated} from 'react-spring'

function Navbar(){
    const [showMenu,setShowMenu] = useState(false)
   
    //menu fixed bg-white w-4/5 h-full left-0 top-0 shadow z-50"
    
    //mask bg-black-t-50 fixed top-0 left-0 w-full h-full z-50

    const transitionMenu = useTransition(showMenu, null, {
        from: {transform: 'translateX(-100%)', opacity:0},
        enter:{transform: 'translateX(0%)', opacity:1},
        leave:{transform: 'translateX(-100%)', opacity:0},
    })
    const transitionMask = useTransition(showMenu,null,{
        from: {position: 'absolute', opacity:0},
        enter:{opacity:1},
        leave:{opacity:0},
        })

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                icon={faBars}
                onClick={()=>setShowMenu(!showMenu)}
                />
            </span>
            
            {/* Black background */}
            {
                transitionMask.map(({item,key,props}) =>
                item &&
                <animated.div 
                    key={key} 
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={()=>setShowMenu(false)}>
                </animated.div>)
                
                
            }
            {/* Actual sidebar */}
            {
               transitionMenu.map(({item,key,props}) =>
               item &&
               <animated.div 
                   key={key} 
                   style={props}
                   className="fixed bg-white w-4/5 h-full left-0 top-0 shadow z-50"
                   onClick={()=>setShowMenu(!false)}>
                       Hello hello
               </animated.div>)

            }

            

        </nav>
    )
    
}

export default Navbar