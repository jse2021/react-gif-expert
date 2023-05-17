
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const Gifgrid =({category})=>{

const {images,isLoading} =useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando..</h2>)
        }
         <div className='card-grid'>
            {
                images.map((image)=>(
                    <GifItem 
                    key={image.id}
                    // expande las propeidades para tomarlos por ejemplo en GifItem
                    {...image}
                    />
                )) 
            }
         </div>         
        </>
    );
};

// export default GifGrid;
