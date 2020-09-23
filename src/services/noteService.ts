import { HttpService } from "./httpService";
import { INoteState } from "redux/reducers/notes/interfaces";

interface INoteResponse {
    note : INoteState;
}

interface INotesResponse {
  notes : INoteState[];
}

export class NoteService {
  private static instance : NoteService;

  public static get Instance() : NoteService {
    if (!NoteService.instance) {
      NoteService.instance = new NoteService();
    }
    return NoteService.instance;
  }

  public getNotes<T>(url : string, body : T) {
    return HttpService.post<INotesResponse, T>(url, body);
  }

  public saveNote<T>(url : string, body : T) {
    return HttpService.post<INoteResponse, T>(url, body);
  }

  public deleteNote<T>(url : string, body : T) {
    return HttpService.delete<INotesResponse, T>(url, body);
  }

  public updateNote<T>(url : string, body : T) {
    return HttpService.put<INoteResponse, T>(url, body);
  }
}