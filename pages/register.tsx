import React from 'react';
import {ThemeProvider} from 'styled-components';
import PageHeader from '../components/Header';
import * as theme from '../theme/theme';
import {Reset} from 'styled-reset';
import styled from 'styled-components';
import * as f from '../components/FormWrappers';


const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <PageHeader />
      <f.FormWrapper>
        <f.FormHeader>Create Account</f.FormHeader>
        <f.FormContainer>
          <f.FormInput placeholder="username..." />
          <f.FormInput placeholder="email..." type="email" />
          <f.FormInput placeholder="password..." type="password" />
          <f.FormButton>Create Account</f.FormButton>
        </f.FormContainer>
      </f.FormWrapper>
    </ThemeProvider>
  )
}

export default Register;