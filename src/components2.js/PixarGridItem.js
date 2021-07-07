import React from 'react'

export const PixarGridItem = (data) => {
    return (
        <div>
            <p><strong>{data.name}</strong></p>
            <a href={data.url} class="btn btn-primary">URL</a>
        </div>
    )
}
