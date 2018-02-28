import React, { Component } from 'react';
import '../Styles/App.css';

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        return (
            <div draggable="true" className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img draggable="false" src={`https://robohash.org/${id}?size=200x200`} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        )
    }
}

// const Card = ({ name, email, id }) => {
//     return (
//         <div draggable="true" className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img draggable="false" src={`https://robohash.org/${id}?size=200x200`} alt="" />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }

export default Card;