import { useState } from "react";
import { AddCategory,Gifgrid } from "./components";




export const GifExpertApp = ()=>{

    const [categories,setCategories]= useState(['One Punch']);
    const onAddCategory =(newCategory)=>{
        // si de las categorias incluye la nueva, no lo agrega, sino continua
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
        
    }

    return (
        <>
        
        <h1>GifExpertApp</h1>
        

        
        <AddCategory 
            onNewCategory={(value)=>onAddCategory(value)}
        />
            {
                categories.map( (category) => (
                  
                    <Gifgrid
                        key={category}
                        category={category}/>                         
                ))
                }
        </>
        
    )

}