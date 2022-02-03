import styled from "styled-components";

const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    h4 {
        padding: .5rem 5rem;

        :hover {
            transform: scale(1.1);
            transition: all .5s ease-out;
            width: bold
        }
    }
`

export default HomeCard;