import { Moment } from "moment";

export enum NotesActionTypes{
  SAVE_NOTE = 'SAVE_NOTE',
  SAVE_NOTES = 'SAVE_NOTES',
  DELETE_NOTE = 'DELETE_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE'
}

export interface INoteState {
  id : number;
  date : Moment;
  title : string;
  text : string;
}