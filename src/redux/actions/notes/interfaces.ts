import { IAction } from '../../../interfaces';
import { INoteState, NotesActionTypes } from '../../reducers/notes/interfaces';

export type ISaveNote = IAction<NotesActionTypes.SAVE_NOTE, INoteState>
export type ISaveNotes = IAction<NotesActionTypes.SAVE_NOTES, INoteState[]>
export type IDeleteNote = IAction<NotesActionTypes.DELETE_NOTE, number>
export type IUpdateNote = IAction<NotesActionTypes.UPDATE_NOTE, INoteState>