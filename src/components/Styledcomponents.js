import styled from 'styled-components';
import { ButtonStyle, InputStyle, InputWrapper } from './components.styled';

const Button = () => {



  return (
    <InputWrapper>
      <InputStyle type="text" placeholder="Enter text here" />
      <ButtonStyle>Submit</ButtonStyle>
    </InputWrapper>
  );
}

export default Button;