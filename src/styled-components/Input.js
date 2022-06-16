import styled from "styled-components";

const Input = styled.input`
    width: 60%;
    font-family: inherit;
    font-size: 1.1rem;
    color: white;
    padding: .5rem;
    margin: 1rem 0;
    background-color: black;
    border: none;
    border-bottom: solid #7bdcb5 2px;

    ::placeholder {
        color: white;
        font-style: italic
    }
`

export default Input;