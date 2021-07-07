import React,{useState} from 'react'
import { SearchComponent } from './components2.js/SearchComponent'
import {Pixar } from './components2.js/Pixar'

const App2 = () => {

    const [categories,setCategories] = useState([])
    return (
        <>
            <SearchComponent setCategories={setCategories} />

            {
                categories.map(categorys => {
                    return (
                    <Pixar
                    key={categorys}
                    categorys={categorys}
                    />
                    )
                })
            }
            
        </>
    )
}
export default App2