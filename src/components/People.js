import React from 'react'

export const People = ({people}) => {
    return (
        <>
        <p>Desde People</p>
        {
          people.map(p => {
            return (
            <li key={p.uid}>{p.name}-{p.url}</li>
            )
          })
        }  
        </>
    )
}
