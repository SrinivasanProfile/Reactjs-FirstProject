import { useState,useEffect } from "react"

const useFetch = (request)=>
{
    let[data,setData] = useState(null)
    let[pending,setPending] = useState(true)
    let[error,setError] = useState(null)
    
    useEffect(()=>
    {
        setTimeout(()=>
        {
            fetch(request)
            .then((res)=>
            {
                if(res.ok === true)
                {
                    return res.json()
                }
                else
                {
                    throw Error("Data Not Found")
                }
             })
            .then((data)=>{setData(data); setPending(false)})
            .catch((err)=>{setError(err.message); setPending(false)})
        },2000)
    },
    [])

    return {data,pending,error} // When we want to return multiple values we use objects

}

export default useFetch