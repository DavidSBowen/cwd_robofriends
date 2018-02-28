import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((a, b) => {
                return (<Card
                    key={a.id}
                    id={a.id}
                    name={a.name}
                    email={a.email} />
                )
            })}
        </div>
    );
}

export default CardList;