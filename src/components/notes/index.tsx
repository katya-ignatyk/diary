import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProfileLayout from '../../containers/ProfileLayoutContainer';
import Note from '../../containers/NoteContainer';
import NewNote from '../../containers/NewNoteContainer';
import styles from './styles.css';
import { INotesReduxProps } from './interfaces';

function Notes(props : INotesReduxProps) {
  
  const { notes } = props;
  
  return (
    <ProfileLayout>
      <div className={styles.notes__container}>
        {
          notes.map((note, index) => (
            <Note key={uuidv4()} note={note} index={index}/>
          ))
        }
        <NewNote />
      </div>
    </ProfileLayout>
  );
}

export default Notes;