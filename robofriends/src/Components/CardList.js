import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((a, b) => {
                return (<Card
                    key={a._id}
                    id={a._id}
                    name={a.name}
                    email={a.email} />
                )
            })}
        </div>
    );
}

export default CardList;