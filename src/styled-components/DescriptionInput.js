import styled from "styled-components";

const DescriptionInput = styled.textarea`
    width: 60%;
    font-family: inherit;
    font-size: 1.1rem;
    color: white;
    background-color: black;
    padding: .5rem;
    margin: 1rem 0;
    height: 10rem;
    border: none;
    border-bottom: solid #7bdcb5 2px;

    ::placeholder {
        color: white;
        font-style: italic
    }
`

export default DescriptionInput;