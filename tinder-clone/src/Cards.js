import React, { useEffect, useState } from 'react';
import './css/Cards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios.js';




function Cards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get('/cards')

            setPeople(res.data)
        }
        fetchData();
        
    }, [])


    const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
}

const outOfFrame = (dir, name) => {
    console.log(`Swiped ${dir} on ${name}`);
}
  return (
    <div className='cards'>
        <div className='cardContainer'>
            {people.map((person) => (
                <TinderCard 
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}    
                    >
                <div style={{backgroundImage: `url(${person.imgUrl})`}} className='cardImage'>
                <h2>{person.name}</h2>   
                </div>
                </TinderCard>
            ))}
        </div>
        
    </div>
  )
}

export default Cards