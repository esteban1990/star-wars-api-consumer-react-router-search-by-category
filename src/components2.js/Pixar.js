import React,{useState,useEffect} from 'react'
import { useFetchGrid } from './useFetchGrid'
import { PixarGridItem } from './PixarGridItem'

export const Pixar = ({categorys}) => {
    const {data,loading} = useFetchGrid(categorys)


    return (
        <>
            {
                data.map(data => {
                    return(
                        <PixarGridItem
                        key={data.id}
                        {...data}
                        />
                    )
                })
            }
        </>
    )
}
