// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.h2`
    font-weight: bold;
    font-family: Lucida Console;
    &:hover {
        color: #e2703a;
        transition: .5s ease-in-out;
    }
transition: all .5s ease-in-out;
`
const StyledContainer = styled.div`
    border: 2px solid black;
    padding: 2%;
    height: 2rem;
    background-color: #f0e3ca;
    opacity: .7;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const Character = ({charObj}) => {
    return ( 
        <div className='char-container'>
            <StyledContainer>
                <StyledChar>{charObj.name}</StyledChar>
                <StyledChar>{charObj.birth_year}</StyledChar>
            </StyledContainer>
        </div>
     );
}
 
export default Character;