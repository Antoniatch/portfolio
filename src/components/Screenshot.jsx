import { useState } from 'react';
import styled from 'styled-components';

const Screenshot = ({ screen }) => {

    const [ growPicture, setGrowPicture ] = useState(false);

    return (
        <>
        <Screendiv onClick={() => setGrowPicture(!growPicture)}>
            <Picture src={screen} alt='screenshot' />
        </Screendiv>
        
        {growPicture && (
            <LargePicture onClick={() => setGrowPicture(!growPicture)}>
                <img src={screen} alt="large-pic" />
            </LargePicture>
        )}
    </>
    );
}

export default Screenshot;

const Screendiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    cursor: pointer;

    :hover {
        border: white solid 3px
    }
`
const Picture = styled.img`
    width: 95%;
    margin: 1rem 0;
    transition: all .5s ease-out;
`
const LargePicture = styled.div`
    width: 50%;
    position: absolute;
    top: 45%;
    right: 65%;
    transform: translate(50%,-50%);
`