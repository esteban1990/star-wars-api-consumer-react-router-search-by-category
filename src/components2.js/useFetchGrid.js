import React,{useState,useEffect} from 'react'
import { getData } from './getData'

export const useFetchGrid = (categorys) => {

    const [state,setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getData(categorys)
        .then(data => {
            setTimeout(() => {
                setState({
                    data:data,
                    loading:false
                })
            },4000)
        })

    }, [categorys])
    return state
}
