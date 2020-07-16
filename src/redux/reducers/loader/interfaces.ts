export enum LoaderActionTypes {
  START_LOADER = 'START_LOADER',
  STOP_LOADER = 'STOP_LOADER',
}

export interface ILoaderState{
  isLoaderActive : boolean
}