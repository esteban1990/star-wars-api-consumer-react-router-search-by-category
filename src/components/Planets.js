import React from 'react'

export const Planets = ({planets}) => {
    return (
        <>
          <p>Desde Planets</p>  
          {
              planets.map(planet => {
                  return (
                  <li key={planet.uid}>{planet.name}</li>
                  )
              })
          }
        </>
    )
}
