import styled from "styled-components";

const Screenshots = ({ image }) => {
    return (
        <>
            <Screenshot src={image} />
        </>
    );
}

export default Screenshots;

const Screenshot = styled.img`
    width: 90%;
    margin: 1rem 0;

    :hover {
        transform: translate(250px, -100px) scale(1.5);
        transition: all .5s ease-out;
        width: bold
    }
`