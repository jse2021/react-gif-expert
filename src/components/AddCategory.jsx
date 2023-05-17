import { useState } from "react"

export const AddCategory =({onNewCategory})=>{
    const[inputValue,setInputValue]= useState('');

    const onInputChange=({target})=>{
        setInputValue(target.value);
    }

    const onSubmit =(event)=>{
        // para evitar el refresh del navegador al apretar enter
        event.preventDefault();
        // se cumple si tiene mas de un Caracter 
    if (inputValue.trim().length <=1) return;
        //categoria en estado actual + la categoria ingresada + el arreglo de categoria
        // setCategories(categories=>[...categories,inputValue]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return(

        <form onSubmit={(event)=>onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value = {inputValue}
                onChange={onInputChange}
            />
        </form>
        
    )
}