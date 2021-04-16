// Write your Character component here
import React from 'react';

const Character = ({charObj}) => {
    return ( 
        <div className='char-container'>
            <div>
                <h2>{charObj.name}</h2>
                <p>{charObj.birth_year}</p>
            </div>
        </div>
     );
}
 
export default Character;