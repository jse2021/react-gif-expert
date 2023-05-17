import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs= (category) => {
    // const GifGrid = ({category}) => {
    const[images,setImages]= useState([]);
    // la carga arranca true
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        // evita que se ejecute 2 veces
        setIsLoading(false);
    }

    useEffect(()=> {
        getImages();
    },[])    

    return{
        images,
        isLoading
    }
    // }
}