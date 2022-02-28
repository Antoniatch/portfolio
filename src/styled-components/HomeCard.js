import styled from "styled-components";

const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '40%'};
`

export default HomeCard;