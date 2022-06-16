import styled from 'styled-components';

const CheckboxContainer = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default CheckboxContainer;

const Container = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-size: 1.5rem;

    input {
        width: 10%;
        height: 25px;
        margin: .6rem 0;
        cursor: pointer
    }

    label {
        width: 80%;
        margin: 0 1rem
    }

    label:hover {
        color: #7bdcb5        
    }
`