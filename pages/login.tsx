import React from 'react';
import {ThemeProvider} from 'styled-components';
import PageHeader from '../components/Header';
import * as theme from '../theme/theme';
import {Reset} from 'styled-reset';
import styled from 'styled-components';
import * as f from '../components/FormWrappers';


const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <PageHeader />
      <f.FormWrapper>
        <f.FormHeader>Login</f.FormHeader>
        <f.FormContainer>
          <f.FormInput placeholder="email..." type="email" />
          <f.FormInput placeholder="password..." type="password" />
          <f.FormButton>Login</f.FormButton>
        </f.FormContainer>
      </f.FormWrapper>
    </ThemeProvider>
  )
}

export default Login;