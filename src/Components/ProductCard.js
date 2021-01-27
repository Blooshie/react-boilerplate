import React from "react"
import { Link } from "react-router-dom"

function ProductCard(props) {
    return (
        <div className="mb-4 border rounded overflow-hidden">
            <Link to={`products/${props.product.id}`}>

                <div className="w-full h-64 bg-blue-400 bg-cover flex justify-center flex-wrap content-center">


                </div>
            </Link>

            <div className="flex flex-wrap justify-center content-center flex-col text-center">
                <div className="font-bold text-xl ml-1" >{props.product.name}</div>
                <div className="ml-1">{props.product.price}</div>
                <Link 
                to={`products/${props.product.id}`}
                className="bg-blue-500 text-white p-4  w-4/5 text-center">
                
                Visit
                </Link>

            </div>




        </div>
    )
}


export default ProductCard