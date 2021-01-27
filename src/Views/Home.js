import React, { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../Components/Loader"
import ProductCard from "../Components/ProductCard"


function Home() {

    const url = `https://6011ba4a91905e0017be56d7.mockapi.io/api/v1/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error:false
    })

    useEffect(() => {
        setProducts({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url).then(response => {
            setProducts({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(() => 
            setProducts({
                loading:false,
                data:null,
                error:true
            }))
    }, [url])

    let content = null


    if(products.loading){
        content= <Loader/>
    }

    if(products.error){
       content=  <h1>
            Some error occured. Please try again
        </h1>
    }

    if (products.data) {
        content = 
        products.data.map((product)=>
        <div key={product.id}>
            <ProductCard product={product}/>
        </div>)
    }
    return (
        <>

            <h1 className="font-bold text-2xl p-3 ">Best sellers</h1>
            {content}
        </>
    )
}


export default Home