import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";


const Container = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = 'https://course-api.com/react-tours-project';
   try{
    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setPlaces(data);
        setIsLoading(false);
        return data;
    }
    useEffect(() => {
        fetchData(url);
    }, []);
 }

   catch(e){
       console.log(e);
   }

   const deleteCard=(id)=>{
       const modifiedPlaces= places.filter((place)=>(place.id!==id));
       setPlaces(modifiedPlaces);
    }
  
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
        <h1 className="main__tittle">Welcome to traveljit</h1>
        <div className="container">
             {
                 places.map((place)=>{
                     return <Card key={place.id} place={place} deleteCard={deleteCard}/>
                 })
             }
        </div>
        </>
    )
}


export default Container;