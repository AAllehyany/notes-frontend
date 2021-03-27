import {Heart} from '@styled-icons/fa-regular';
import {Heart as SolidHeart} from '@styled-icons/fa-solid';
import {User} from '@styled-icons/fa-solid';
import { useState } from 'react';
import styled from 'styled-components';

const NoteCard = styled.div`
  display: flex;
  border: 1px solid #000000;
  flex-direction:column;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.7rem;
`;

const NoteTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  padding: 0.75rem;
`;

const NoteContent = styled.p`
  font-size: 0.875rem;
  padding: 0.5rem;
  line-height: 1.25;
`;

const NoteControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  background-color: black;
  height: 2.5rem;
  width: 100%;
  align-items: center;
  padding: 0.125rem;
  box-sizing: border-box;
`;

const NoteMetadata = styled.div`
  font-size: 0.875rem;
  line-height: 1.25;
  color: white;
  display: flex;
  align-items: flex-start;
`;

const NoteAuthorIcon = styled(User)`
  width: 1rem;
  height: 1rem;
  color: white;
  box-sizing: border-box;
  margin-right: 0.25rem;
`;

const NoteInteractions = styled.div`
  padding: 0.25rem;
  box-sizing: border-box;
  color: white;
  
  * {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Note = () => {
  
  const [mouseOver, setMouseover] = useState(false);
  
  return (
  <NoteCard>
    <NoteTitle>Programming 101 Notes</NoteTitle>
    <NoteContent>Variables refer to locations in memory. They could refer to either pointers or static value.</NoteContent>
    <NoteControls>
      <NoteMetadata><NoteAuthorIcon /><span>Ahmad</span></NoteMetadata>
      <NoteInteractions>
        <div onMouseEnter={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)}>
          {mouseOver ? <SolidHeart /> : <Heart />}
        </div>
      </NoteInteractions>
    </NoteControls>
  </NoteCard>
)}

export default Note;