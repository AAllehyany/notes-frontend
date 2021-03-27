import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-flow: column nowrap;
  justify-content: center;

  @media(min-width: 992px) {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
`;

export const FormHeader = styled.h1`
  font-size: 1.45rem;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  flex-flow: column nowrap;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333333;
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  margin-top: 0.35rem;
  &:focus{ 
    outline: none;
  }
`;

export const FormButton = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  background-color: #333333;
  color: #eeeeee;
  font-size: 1.1rem;
  padding: 0.75rem;
  border: 0;

  :hover{
    background-color: #222222;
  }

  :focus {
    background-color: #111111;
  }

  outline: none;
`;