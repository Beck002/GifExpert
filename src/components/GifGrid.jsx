
import { GifItem } from "./GifItem.jsx"; 
import { useFetchGifs } from "../hooks/useFetchGifs.js";

// El useEffect es un hook de react que sirve para disparar efectos secundarios
//Efecto secundario: proceso que queremos ejecutar cuando algo suceda. Ej: cuando un componente se renderice por primera vez queremos aplicar un efecto

// useEffect recibe dos argumentos el primero es una callback, y la segunda es una lista de dependencias(Son las condiciones con las cuales vamos a volver a ejecutar el callback)

// el segundo argumento es 'opcional', en caso de dejar la lista de dependecias vacia el hook se disparara solo la primera vez que se contruya el componente.  

// El useEffet tien quer regresar una funcion y no una promesa

  
export const GifGrid = ({ category }) => {


  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        (isLoading) && <h3>Cargando...</h3>
      }
      <div className="card- grid">

        {
          images.map((image)=>(
            <GifItem
              key={image.id} 
              {...image} //-> Pasamos todas las propiedades que tenga el 'image' directamente al comoponente gifItem de esta forma evitamos el desestructurar en caso de que contenga muchas propiedades.
            />
          ))
        }

      </div>


    </>
  )
}
