import { INoteState } from '../../../redux/reducers/notes/interfaces';

export interface INoteReduxProps {
  profileId : number;
  deleteNote : (profileId : number, id : number, index : number) => void;
  updateNote : (note : INoteState) => Promise<void>;
}

export interface INoteProps {
  note : INoteState;
  index : number;
}