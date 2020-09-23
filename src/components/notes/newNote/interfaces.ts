import { INoteState } from '../../../redux/reducers/notes/interfaces';

export interface IAddNoteReduxProps {
  profileId : number;
  createNote : (note : Partial<INoteState>, profileId : number) => void;
}