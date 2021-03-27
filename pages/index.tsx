import React from 'react';
import styled from 'styled-components'
import {Reset} from 'styled-reset';
import {ThemeProvider} from 'styled-components';
import * as theme from '../theme/theme';
import PageHeader from '../components/Header';
import SearchBar from '../components/SearchBar';

import Note from '../components/Note';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-width: 100%;
  font-family: sans-serif;
  box-sizing: border-box;
  flex-flow: column nowrap;
  @media(min-width: 992px) {
    min-width: 960px;
    max-width: 960px;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(min-width: 992px) {
    flex-direction: row;
    align-items: start;

  }

`;

const NotesContainer = styled.div`
  display: flex;
  padding: 0.25rem;
  width: 100%;
  box-sizing: border-box;
  flex-flow: column nowrap;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column-gap: 1rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 0.2rem;
  border-left: 1px solid #eeeeee;
`;



export default function Home() {
  return <ThemeProvider theme={theme}>
    <Container>
      <Reset />
      <PageHeader />
      <Content>
        <MainContent>
          <SearchBar />
          <NotesContainer>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </NotesContainer>
        </MainContent>
      </Content>
    </Container>
  </ThemeProvider>
}
