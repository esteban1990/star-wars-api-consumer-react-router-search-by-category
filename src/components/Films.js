import React from 'react'

export const Films = ({films}) => {
    return (
        <>
        <p>Desde films</p>
            {
                films.map(f => {
                    return (
                    <li key={f._id}>{f.properties.title} - {f.properties.producer}</li>
                    )
                })
            }
        </>
    )
}
