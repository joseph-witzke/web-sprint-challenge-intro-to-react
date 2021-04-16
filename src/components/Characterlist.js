import React from 'react';
import Character from './Character';

const Characterlist = ({characters}) => {
    return(
        <div className='char-list-container'>
            {characters.map((item) => {
                return (
                    <Character
                        key={item.url}
                        charObj={item}
                    />
                )
            })}
        </div>
    )
}
 
export default Characterlist;