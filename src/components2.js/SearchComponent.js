import React,{useState} from 'react'

export const SearchComponent = ({setCategories}) => {
    const [inputValue,setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const  handleSubmit = (e) => {
        e.preventDefault();

        setCategories(categorys => [inputValue,...categorys])
        setInputValue('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input
                type="text"
                value={inputValue}
                className="form-control"
                onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary">Buscar Categoria</button>
            </form>
        </div>
    )
}
