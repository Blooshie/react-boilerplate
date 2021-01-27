import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"

function Product() {

    const {id} = useParams()
    const url = `https://6011ba4a91905e0017be56d7.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState({
        loading:false,
        data:null,
        error:false
    })

    let content = null


    useEffect(() => {
        setProduct({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url).then(response => {
            setProduct({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(() => 
            setProduct({
                loading:false,
                data:null,
                error:true
            }))
    }, [url])

    if(product.loading){
        content= <Loader/>
    }

    if(product.error){
       content=  <h1>
            Some error occured. Please try again
        </h1>
    }

    if (product.data) {
        content = <div>
            <h1> {product.data.name} </h1>
            <h1> {product.data.price} </h1>
        </div>
    }

    return (
        <>
            {content}
        </>
    )
}


export default Product