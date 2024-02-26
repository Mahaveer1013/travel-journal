import React from 'react';
import data from './data';
import PlaceCard from './PlaceCard';

function Cards() {
    
    const Card = data.map(item => {
        return (
            <PlaceCard
                key={item.id}
                title={item.title}
                location={item.location}
                googleMapUrl={item.googleMapUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
            />
        )
    });

    return (
        <>
            {Card}
        </>
    )
}

export default Cards