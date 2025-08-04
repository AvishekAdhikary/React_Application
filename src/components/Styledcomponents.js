import styled from 'styled-components';

const Button = () => {

    const ButtonStyle = styled.button`
  background-color: #4CAF50; /* Green */ 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;`;

    const InputStyle = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px`;

    const InputWrapper = styled.div`
  display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center`;

    return (
        <InputWrapper>
            <InputStyle type="text" placeholder="Enter text here" />
            <ButtonStyle>Submit</ButtonStyle>
        </InputWrapper>
    );
}

export default Button;