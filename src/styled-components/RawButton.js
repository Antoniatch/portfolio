import styled from 'styled-components';

const RawButton = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
display: flex;
flex-direction: ${(props) => props.flexdirection};
flex-wrap: ${(props) => props.flexwrap};
align-items: ${(props) => props.alignitems};
`

export default RawButton;