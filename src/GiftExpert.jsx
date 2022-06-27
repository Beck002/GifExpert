import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

import './App.css';


export const GiftExpert = () =>  {
    
    const [categories, setCategories] = useState(['OnePunch'])

    const onAddCategory = ( newCategory ) =>{


        if( categories.includes(newCategory)) return;

        setCategories([ newCategory,...categories ])
        // setCategories(cat => [...cat, 'weon2']) -> forma de cambiar el estado del arreglo utilizando una funcion flecha
    }


    return (
    <>
        {/* Titutlo */}
        <h2>GiftExpertApp</h2>
            
        {/* Input */}

        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={onAddCategory}
        />

        {/* Listado  */}
        {
            categories.map( category =>(
            <GifGrid  key={category} category={category}/>    
        )) 
        }      
    </>

   )
}







