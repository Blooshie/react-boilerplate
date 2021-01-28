import React, { useEffect, useState } from "react";
import axios from "axios"

export function AxiosHookExample(url) {
    const [result, setResult] = useState({
        loading:false,
        data:null,
        error:false
    })


    useEffect(() => {
        setResult({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url).then(response => {
            setResult({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(() => 
        setResult({
                loading:false,
                data:null,
                error:true
            }))
    }, [url])
    
    return(result)
}

