import styled from "styled-components";

const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '40%'};
    
    @media screen and (max-width: 600px) {
        width: ${(props) => props.width || '90%'};
    }
`

export default HomeCard;