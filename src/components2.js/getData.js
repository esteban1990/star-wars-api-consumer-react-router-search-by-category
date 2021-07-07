import React from 'react'

export const getData = async(categorys) => {
    const url = `https://www.swapi.tech/api/${categorys}`
    const resp = await fetch(url)
    const data = await resp.json();

    const getEspecificData = data.results.map(data => {
        return {
            id:data.uid,
            name: data.name,
            url:data.url
        }
    })
    return getEspecificData
}
