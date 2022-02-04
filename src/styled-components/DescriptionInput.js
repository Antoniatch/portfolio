import styled from "styled-components";

const DescriptionInput = styled.textarea`
    width: 60%;
    font-family: inherit;
    font-size: 1.1rem;
    padding: .5rem;
    margin: 1rem 0;
    height: 10rem;

    ::placeholder {
        color: black;
        font-style: italic
    }
`

export default DescriptionInput;