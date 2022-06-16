import { useState } from 'react';
import styled from 'styled-components';
import Fade from './Fade';

const Screenshot = ({ screen }) => {
    const [ growPicture, setGrowPicture ] = useState(false);


    return (
        <>
            <Screendiv onClick={() => setGrowPicture(!growPicture)}>
                <Picture src={screen} alt='screenshot' />
            </Screendiv>

            {growPicture && (
                <Fade>
                <LargePicture onClick={() => setGrowPicture(!growPicture)} visible={growPicture}>
                    <img src={screen} growPicture={growPicture} alt="large-pic" />
                </LargePicture>
                </Fade>
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
`
const LargePicture = styled.div`
        width: 50%;
        position: fixed;
        z-index: 10;
        top: 15%;
        right: 40%;

        img {
            border: solid white 15px;
            border-radius: 10px;
            padding: 5px
        }
`
